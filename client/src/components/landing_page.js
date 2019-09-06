// @flow
import React, {Component} from 'react';
import SearchFunction from './search.js';
import './css/landing_page.css';
import wordmark_red from '../images/CMU-red.png';

type State = {}
type Props = {}

class LandingPage extends Component < State, Props > {
  render() {
    return (<div><div className="col-7">
          <input id="searchTxt" type="text" placeholder= "Search for a professor, course, requirement, department..." />
        </div> 

        <div className="col-5 landing-page">
          <h3>WELCOME TO THE</h3>
          <img className="wordmark_red" src={wordmark_red} onError="this.style.borderWidth=0" alt="Carnegie Mellon University" />
          <h1>Course Advisor</h1>
          <p>Learn about the courses you're interested in from the students who know best. Leave reviews for courses you've taken to help future students decide.</p>
          <p id="faded">Prefer to browse&#63; Click <a id="inLineLink" href="http://www.codecademy.com/">here</a> to look at the course catalog.</p>
        </div>

      </div>);
  }
}


export default LandingPage;

// change link!!!!
// cant click search image