import React, {Component} from 'react';
import {Button, ButtonToolbar} from 'reactstrap';
import './css/menu_page.css';

class MenuPage extends Component {
  changeCategory(tab, category) {
    const pageCategory = document.getElementById("page_"+tab+"_"+category);
    window.scrollTo(0, window.scrollY+pageCategory.getBoundingClientRect().y);
    this.props.update({selectedCategory: category, hoveredItem:""});
  }

  createTab(tabName) {
    const items = this.props.state.data.tabs[tabName].cat.map(e => {
      return this.createCategory(e, tabName);
    });

    const tabDescription = this.props.state.data.tabs[tabName].description;
    return (
      <div style={{width: "100%", background: "white"}}>
        <div style={{fontSize: "40px"}}>{tabName}</div>
        <div className="tab_description">{tabDescription}</div>
        {items}
      </div>);
  }

  createCategory(categoryName, tabName) {
    const {data} = this.props.state;
    const categoryNametoDisplay = data.cats[categoryName].displayed_name;
    const items = data.cats[categoryName].items.map(e => {
      return this.createItem(e, categoryName, tabName);
    });

    const catStyle = {
      width: "100%",
      fontSize: "30px"
    }

    return (<div style={{
        background: "white",
        marginTop: "10px",
        marginBottom: "10px"
      }} id={"page_"+tabName+"_"+categoryName} key={"page_"+tabName+"_"+categoryName}>
      <div style={catStyle}>{categoryNametoDisplay}</div>
      <div style={{
          width: "100%",
          height: "1px",
          background: "gray"
        }}></div>
      {items}
    </div>)
  }

  createItem(itemName, categoryName, tabName) {
    const {data} = this.props.state;
    const smPrice = data.items[itemName].price.sm;
    const lgPrice = data.items[itemName].price.lg;

    const selectedItemStyle = { background: "lightgray" };
    const unselectedItemStyle = { background: "white" };


    const items = [<p className = "item_name"
                      style = { itemName === this.props.state.hoverItem
                              ? selectedItemStyle
                              : unselectedItemStyle }
                      key = { "page_" + tabName + "_" + categoryName + "_" + itemName + "_name"}>
                      { itemName }
                   </p>];

    if (smPrice) {
      items.push(
        <p className = "item_price"
           style = { itemName === this.props.state.hoverItem
                   ? selectedItemStyle
                   : unselectedItemStyle
           }
           key = { "page_" + tabName + "_" + categoryName + "_" + itemName + "_srice" }>
           ${smPrice.toFixed(2)}</p>);
    }

    if (lgPrice) {
      items.push(
        <p className = "item_price"
           style = { itemName === this.props.state.hoverItem
                   ? selectedItemStyle
                   : unselectedItemStyle
           }
           key = { "page_" + tabName + "_" + categoryName + "_" + itemName + "_lprice" }>
           ${lgPrice.toFixed(2)}</p>);
    }

    return (
      <div className = "item"
           style = {{ background: itemName !== this.props.state.hoverItem
                    ? "white"
                    : "lightgray",
                      borderLeft: itemName === this.props.state.hoverItem
                      ? "2px solid red"
                      : "none"
                    }}
          onMouseOver = {() => { this.props.update({hoverItem: itemName }) }}
          onMouseMove = {() => { this.props.update({hoverItem: itemName }) }}
          onMouseOut = {() => {this.props.update({hoverItem: "" }) }}
          onClick = {() => {this.createPopup(itemName)}}
          key = { "page_" + tabName + "_" + categoryName + "_" + itemName } id = { "page_" + tabName + "_" + categoryName + "_" + itemName }>
          {items}
      </div>);
  }

  createPopup(itemName) {
    console.log(itemName);
    const style= {

    }
    const modal = (
      <div className={"menu_modal"} style={style}>
        <div className={"menu_modal_content"}>
          <p>Cancel</p>
          <p>Title: {itemName}</p>
          <p>Description: {itemName}</p>
          <p>Quantity: {itemName}</p>
          <p>Required Questions: {itemName}</p>
          <p>Question: {itemName}</p>
          <p>Special Instructions: {itemName}</p>
          <p>Add to Bag{itemName}</p>
        </div>
      </div>
    );
    this.props.updateModal(modal);
  }

  createCategoryMenu(tabName) {
    const {data} = this.props.state;
      const categories =
        Object.keys(data.tabs[tabName].cat).map( index => {
          const key = data.tabs[tabName].cat[index];
          const displayName = data.cats[key].displayed_name;

          const selectedCategoryStyle = {borderLeft: "2px solid red"};
          const hoveredCategoryStyle = {background: "lightgray"};
          const unhoveredCategoryStyle = {background: "white"};

          return (
            <div className = "category_menu_item"
              style = { this.props.state.hoveredItem === key &&
                        (this.props.state.hoveredItem !== this.props.state.selectedCategory)
                          ? hoveredCategoryStyle
                          : (this.props.state.selectedCategory===key
                            ? selectedCategoryStyle
                            : unhoveredCategoryStyle)
                        }
              onMouseOver = { ()=>{this.props.update({ hoveredItem: this.props.state.selectedCategory === key? "" : key})}}
              onMouseMove={()=>{this.props.update({hoveredItem: this.props.state.selectedCategory===key ? "": key})}}
              onMouseOut={()=>{this.props.update({hoveredItem: ""})}}
              onClick={(e)=>{this.changeCategory(tabName, key)}}
              id={tabName + "_" + key}
              key={tabName + "_" + key}>
              {displayName}
            </div>
        );
      });
      return (<div>{categories}</div>);
  }

  createTabMenu() {
    const styleSelected = {
      background: "gray",
      color: "white",
    }

    const styleUnselected = {
      background: "white",
      color: "black",
      border: "1px solid gray"
    }

    const styleHovered = {
      fontWeight: "bold",
      border: "1px solid gray"
    }

    const {data} = this.props.state;
    const buttons = Object.keys(data.tabs).map(key => {
      return <Button
              id = {"button_"+key}
              key = {"button_"+key}
              className = "tab_button"
              style = { this.props.state.hoveredTab === key &&
                        (this.props.state.selectedTab !== key)
                        ? styleHovered
                        :

                        this.props.state.selectedTab === key
                        ? styleSelected
                        : (this.props.state.hoveredTab === key &&
                          (this.props.state.selectedTab !== key)
                          ? styleHovered
                          : styleUnselected)
                      }
              onClick = { () => {
                      this.props.update({selectedTab: key, selectedCategory: data.tabs[key].cat[0]})}}
              onMouseEnter = { () => {
                      this.props.update({hoveredTab: key})}}
              onMouseMove = { () => {
                      this.props.update({hoveredTab: key})}}
              onMouseOut = { () => {
                      this.props.update({hoveredTab: ""})}}>
              {key}
            </Button>
    });
    return (<ButtonToolbar id="tab_bar">{buttons}</ButtonToolbar>);
  }

  updateScroll() {
    const {data, selectedTab} = this.props.state;
    const keys = Object.keys(data.tabs[selectedTab].cat);
    var selectedCategory = data.tabs[selectedTab].cat[0];

    for(var k in keys) {
      const category = data.tabs[selectedTab].cat[k];
      const pageCategory = document.getElementById("page_"+selectedTab+"_"+category);

      if(pageCategory) {
        const boundingBox = pageCategory.getBoundingClientRect();
        if(boundingBox && (boundingBox.bottom>window.innerHeight*0.15)) {
          selectedCategory = category;
          break;
        }
      }
    }

    this.props.update({
      selectedCategory: selectedCategory,
      hoveredItem: "",
      hoverItem: ""
    });
  }

  componentDidMount() {
     window.addEventListener('scroll', this.updateScroll.bind(this));
  }

  render() {
    return (<div id="menu">
              <div style={{marginLeft: "100px",marginRight: "100px"}}>
                {this.createTabMenu()}
                <div style={{display: "flex"}}>
                <div id="category_menu">
                  {this.createCategoryMenu(this.props.state.selectedTab)}
                </div>
                <div style={{flex: 1, marginLeft: "20px"}}>
                  <div id="menu_content">
                    {this.createTab(this.props.state.selectedTab)}
                  </div>
                </div>
                </div>
              </div>
          </div>
    );
  }
}

export default MenuPage;
