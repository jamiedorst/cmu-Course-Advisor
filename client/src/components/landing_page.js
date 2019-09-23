// @flow
import React, {Component} from 'react';
import './css/master.css';
import wordmark_red from '../images/CMU-red.png';


type State = {}
type Props = {}

class LandingPage extends Component < State, Props > {

    render() {
        return (<div>

            <div className="col-7 landingPage">
                <input className="landingPage" type="text" placeholder= "Search for a professor, course, requirement, department..." />
            </div> 

            <div className="col-5 landingPage">
                <h3 className="landingPage">WELCOME TO THE</h3>
                <img className="wordmark_red" src={wordmark_red} onError="this.style.borderWidth=0" alt="Carnegie Mellon University" />
                <h1 className="landingPage">Course Advisor</h1>
                <p className="landingPage">Learn about the courses you're interested in from the students who know best. Leave reviews for courses you've taken to help future students decide.</p>
                <p id="faded">Prefer to browse&#63; Click <a id="inLineLink" href="http://www.codecademy.com/">here</a> to look at the course catalog.</p>
                <li onClick={()=>{window.location = '/searchResults'}}>temporary search results page</li>
            </div>

        </div>);
    }
}

export default LandingPage;

// change link!!!!!
// cant click search image
// <li onClick={()=>{this.changeUrl('/searchResults')}}>temporary search results page</li>
// change link!!!!!
// these comments are so messed up