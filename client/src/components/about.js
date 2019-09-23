import React, {Component} from 'react';
import './css/master.css';

type State = {}
type Props = {}

class About extends Component < State, Props > {

  render() {
    return (<div>

        <div className="col-12 about">
          <h1 className="about">About</h1>
          <p>Learn about the courses you're interested in from the students who know best. Leave reviews for courses you've taken to help future students decide.</p>
        </div>

      </div>);
  }

}

export default About;
