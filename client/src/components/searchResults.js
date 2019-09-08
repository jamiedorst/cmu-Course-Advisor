// search function
import React, {Component} from 'react';
import './css/searchResults.css';

type State = {}
type Props = {}

var searchQuery = "search query";
var courseNum = "xx-xxx"; 
var courseName = "name of CMU class"; 
var professors = "prof1, prof2";
var fceRating = "4.2";
var school = "SCS: Computer Science";
var timing = "Offered Fall 2019";
var resultsNum = "40"; {/*ie. "40" results sorted by best match*/}


class searchResults extends Component < State, Props > {
  render() {
    return (<div>
        <div className="col-2">
          <h1>searchQuery</h1>
          <p>courseName</p>
          <h3>courseNum</h3>
          <p className="mini">school</p>
        </div> 

        <div className="col-8">
          <h4>professors</h4>
          <p className="mini">timing</p>
        </div>

        <div className="col-11">
          <h5>fceRating</h5>
          <h6>"&#47;5"</h6>
        </div>

      </div>);
  }
}




export default searchResults;