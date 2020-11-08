# cmuCourseAdvisor

For the fce web scraper:

	pip install Selenium
	Install ChromeDriver from http://chromedriver.chromium.org/downloads
	

To run the application for developing purposes:

Database:

(Before you do this you need to have mongo installed)
sudo mongod --dbpath=< Mongo data/db path > (this creates a mongo server shell)
mongo (creates a mongo shell - this is what you use to actually add/update/delete/read from db)

For consistency you should name your mongo shell: "cmu_course_advisor"
Do this by entering: using "cmu_course_advisor" in the mongo shell.

Server:
1. Launch the server first by changing the directory so that you are in server ../cmu-Course-Advisor/server
2. run server by using command: node index.js (Alternatively can run nodemon instead of node to restart after all changes)

Client:
1. Launch the client first by changing the directory so that you are in client ../cmu-Course-Advisor/client
2. run client by using command: npm start
3. If the page does not auto load the default port we use is localhost:3000