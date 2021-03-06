// search function
import React, { Component } from "react";
import "./css/master.css";
import api from '../api'


type State = {};
type Props = {};

function Results(props) {
  return (
    <div>
      <div className="col-12 divider">
        <div id="divider"></div>
      </div>
      <div className="col-7 search">
        <div className="title">
          <h3 className="search">00-001</h3>
          <p className="search">Probably Lengthy CMU Class Name</p>
        </div>
        <p className="mini search">SCS: Computer Science</p>
      </div>

      <div className="col-3 search">
        <h4 className="search">professor one, professor two</h4>
        <p className="mini search">Offered Fall 2019</p>
      </div>

      <div className="col-2 search">
        <h5 className="search">
          4.6<span className="outOf">&#47;5</span>
        </h5>
      </div>
    </div>
  );
}
class SearchResults extends Component<State, Props> {

  constructor(props) {
    super(props)
    this.state = {
        courses: [<Results/>, <Results/>, <Results/>, <Results/>],
        isLoading: false
    }
  }

  // componentDidMount = async () => {
  //   this.setState({ isLoading: true })

  //   await api.getAllCourses().then(courses => {
  //       this.setState({
  //           courses: courses.data.data,
  //           isLoading: false,
  //       })
  //   })
  // }

  render() {
    // populate the list of courses. 
    // 1. Loop through each element and put value into result
    let arr = this.state.courses

    return (
      <div>
        <div className="col-12 search">
          <h1 className="search">&ldquo;search query&rdquo;</h1>
        </div>

        <div className="col-8 filter">
          <div className="button">
            <h6 className="search">
              ALL SEMESTERS<span className="triangle"></span>
            </h6>
          </div>
          <div className="button">
            <h6 className="search">
              ALL PROFESSORS<span className="triangle"></span>
            </h6>
          </div>
          <div className="button">
            <h6 className="search">
              ALL RATINGS<span className="triangle"></span>
            </h6>
          </div>
          <div className="button">
            <h6 className="search">
              ALL REQUIREMENTS<span className="triangle"></span>
            </h6>
          </div>
          <div className="button">
            <h6 className="search">
              ALL DEPARTMENTS<span className="triangle"></span>
            </h6>
          </div>
          <div className="button">
            <h6 className="search">
              ALL UNITS<span className="triangle"></span>
            </h6>
          </div>
        </div>

        <div className="col-4 sort">
          <p className="mini search">
            00 results sorted by <span id="sort">Best Match</span>
          </p>
        </div>

        <div
          onClick={() => {
            window.location = "/courseDetail";
          }}
        >
          {arr}
        </div>
      </div>
    );
  }
}

export default SearchResults;
