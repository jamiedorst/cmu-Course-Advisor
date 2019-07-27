import selenium
from selenium import webdriver
import time
from time import sleep
import csv

USERNAME = ""
PASSWORD = ""

## Authentication

chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument("--incognito")
browser = webdriver.Chrome(executable_path = './chromedriver', 
                           options = chrome_options)
browser.get('https://wwwh3.smartevals.com/SchoolList.aspx?rejtor=zzwe_StudentsSeeResults')

school = browser.find_element_by_id("_ctl0_cphContent_grd1_DXSE_I")
school.send_keys("Carnegie Mellon University")
time.sleep(2)

log_in = browser.find_element_by_xpath('//*[@id="_ctl0_cphContent_grd1_cell0_3_btnLogin"]')
log_in.click()
time.sleep(4)

username = browser.find_element_by_id("j_username")
username.send_keys(USERNAME)
time.sleep(1)

password = browser.find_element_by_id("j_password")
password.send_keys(PASSWORD)
time.sleep(1)

login = browser.find_element_by_xpath('//*[@id="formwrapper"]/div[4]/input[2]')
login.click()
time.sleep(4)

#saves old tab title
window_previous = browser.window_handles[0]

#opens new tab
survey_results = browser.find_element_by_xpath('//*[@id="_ctl0_lnkSeeResults"]')
survey_results.click()
time.sleep(4)

#saves new tab title
window_results = browser.window_handles[1]

#switch to new tab
browser.switch_to_window(window_results)
time.sleep(4)

## Scraping

filename = "courses_fce.csv"

#loops through all the pages
count = 0
retry = False
while True:
    try:
        if count == 0:
            #there is a bug with fce where they show type and trait
            #this fixes it by clicking to page 2 and back to page 1
            page2 = browser.find_element_by_xpath('//*[@id="_ctl0_cphContent_grd1_DXPagerTop"]/a[1]')
            page2.click()
            time.sleep(5)
            page1 = browser.find_element_by_xpath('//*[@id="_ctl0_cphContent_grd1_DXPagerTop"]/a[3]')
            page1.click()
            time.sleep(5)
            
            #creating column labels
            class_val = "dxgvHeader_Custom _color_TableHeaderBG dx-wrap"
            xpath_title = '//*[@class="' + class_val + '"]'
            title_list = browser.find_elements_by_xpath(xpath_title)
            header = []
            for title_item in title_list:
                header.append(title_item.text)
            #write header to csv file
            with open(filename, "w+") as csv_file:
                csv_writer = csv.writer(csv_file)
                csv_writer.writerow(header)
        
        xpath_val = '//*[@id="_ctl0_cphContent_grd1_DXDataRow' + str(count) + '"]/td'
        list_item = browser.find_elements_by_xpath(xpath_val)
        sample_course = []
        for item in list_item:
            sample_course.append(item.text)
        with open(filename, "a") as csv_file:
            csv_writer = csv.writer(csv_file)
            csv_writer.writerow(sample_course)
        count += 1
        if count % 50 == 0:
            next_page = browser.find_element_by_xpath('//*[@id="_ctl0_cphContent_grd1_DXPagerTop"]/a[4]')
            next_page.click()
            time.sleep(2)
        retry = False
    except:
        if retry == False:
            retry = True
            time.sleep(5)
            continue
        else:
            break

browser.close()
browser.switch_to_window(window_previous)
browser.close()