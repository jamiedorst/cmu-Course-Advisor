// @flow
import React, {Component} from 'react';

//import Navbar from './navbar.js';
import LandingText from './landing_page.js';
import Location from './location.js';
import SearchResults from './searchResults.js';
import Footer from './footer.js';
import './css/app.css';


type State = {}
type Props = {}

class OrderOnline extends Component < State,
Props > {
  constructor(props) {
    super(props);
    this.state = {
      page: window.location.pathname,
      landing_page: <LandingText/>,
      menu_page_state: {
        tabSelected: 0,
        categorySelected: 0,
        hoveredItem: "",
        hoveredTab: "",
        selectedTab: "All Dishes",
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
    } else if(this.state.page==="/searchResults") {
      return <searchResults/>;
    }
  }

  render() {
    const pageStyle = {
      width: "100%",
      padding: "0px",
    };

    return (<div style={pageStyle}>
      {this.state.modal}
        {this.createPage()}
        <Footer />
    </div>); 


  }
}

export default OrderOnline;
