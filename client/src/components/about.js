import React, {Component} from 'react';

import './css/about.css';

type State = {}
type Props = {}

class About extends Component < State, Props > {



  render() {
    return (<div>

        <div className="col-5 landing-page">
          <h3>about page hopefully</h3>
          <h1>ABOUT PAGE</h1>
          <p>Learn about the courses you're interested in from the students who know best. Leave reviews for courses you've taken to help future students decide.</p>
        </div>

      </div>);
  }
  
}

export default About;