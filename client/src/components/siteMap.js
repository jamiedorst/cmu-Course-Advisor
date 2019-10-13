// @flow
import React, {Component} from 'react';

import LandingPage from './landing_page.js';
import SearchResults from './searchResults.js';
import About from './about.js';
import Navbar from './navbar.js';
import Browse from './browse.js';
import CourseDetail from './courseDetail.js';
import './css/app.css';


type State = {};
type Props = {};

class SiteMap extends Component < State,
Props > {
    constructor(props) {
        super(props);
        this.state = {
            page: window.location.pathname,
            landing_page: <LandingPage/>,
            searchResults: <SearchResults/>,
            about: <About/>,
            navbar: <Navbar/>,
            browse: <Browse/>,
            courseDetail: <CourseDetail/>,
            modal: ""
        }
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
            return this.state.searchResults;
        } else if (this.state.page==="/about") {
            return this.state.about;
        } else if (this.state.page==="/browse") {
            return this.state.browse;
        } else if (this.state.page==="/courseDetail") {
            return this.state.courseDetail;
        }
    }

    render() {
        const pageStyle = {
            width: "100%",
            padding: "0px",
        };
        if(this.state.page==="/") {
            return (<div style={pageStyle}>
                {this.state.modal}
                {this.createPage()}
                </div>);
        } else {
            return (<div style={pageStyle}>
                <Navbar/>
                {this.state.modal}
                {this.createPage()}
                </div>);
        }
    }
}

export default SiteMap;
