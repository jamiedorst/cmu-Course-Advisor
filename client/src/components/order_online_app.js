// @flow
import React, {Component} from 'react';

import Navbar from './navbar.js';
import LandingPage from './landing_page.js';
import Location from './location.js';
import MenuPage from './menu_page.js';
import Footer from './footer.js';
import menu_info from './menu_info.js';
import './css/app.css';


type State = {}
type Props = {}

class OrderOnline extends Component < State,
Props > {
  constructor(props) {
    super(props);
    this.state = {
      page: window.location.pathname,
      landing_page: <LandingPage />,
      menu_page_state: {
        tabSelected: 0,
        categorySelected: 0,
        selectedCategory: menu_info.tabs["All Dishes"].cat[0],
        hoveredItem: "",
        hoveredTab: "",
        selectedTab: "All Dishes",
        data: menu_info
      },
      modal: ""
    }
  }

  updateMenuState(updatedStateValues) {
    const {menu_page_state} = this.state;
    Object.keys(updatedStateValues).forEach(key=>{
      menu_page_state[key] = updatedStateValues[key];
    });
    this.setState({menu_page_state: menu_page_state});
  }

  updateModal(modal) {
    this.setState({modal: modal});
  }

  changePage(newPage) {
    this.setState({page: newPage});
  }

  createPage() {
    if(this.state.page==="/") {
      return this.state.landing_page;
    } else if(this.state.page==="/menu") {
      return <MenuPage state={this.state.menu_page_state} update={this.updateMenuState.bind(this)} updateModal={this.updateModal.bind(this)}/>;
    } else if(this.state.page==="/location") {
      return <Location/>;
    }
  }

  render() {
    const pageStyle = {
      width: "100%",
      padding: "0px",
    };

    const boxStyle = {
      minWidth: "1000px",
      maxWidth: "1000px",
      width: "1000px",
      boxShadow: "0 0.1em .5em",
      marginTop: "20px",
      marginBottom: "20px",
      marginLeft: "auto",
      marginRight: "auto"
    };

    const headerStyle = {
      fontSize: "50px",
      marginLeft: "auto",
      marginRight: "auto",
      width: "600px",
      textAlign: "center",
      padding: "20px"
    }


    return (<div style={pageStyle}>
      {this.state.modal}
      <div style={boxStyle} >
        <div style={headerStyle}>NEW GARDEN</div>
        <Navbar redirect={this.changePage.bind(this)} />
        {this.createPage()}
        <Footer />
      </div>
    </div>);
  }
}

export default OrderOnline;
