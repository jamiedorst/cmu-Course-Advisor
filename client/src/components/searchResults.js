// search function
import React, { Component } from "react";
import "./css/master.css";
import Results from './results.js';
import api from '../api'


type State = {};
type Props = {};

class SearchResults extends Component<State, Props> {

  constructor(props) {
    super(props)
    
    this.state = {
        all_courses: [],
        isLoading: false
    }
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true })

    await api.getAllCourses().then(courses => {
        this.setState({
            all_courses: courses.data.data,
            isLoading: false,
        })
    })
  }

  render() {
    // populate the list of courses. 
    // 1. Loop through each element and put value into result
    const { all_courses, isLoading } = this.state
    // console.log('TCL: CoursesList -> render -> couses', all_courses)
    
    const arr = []

    for (var j = 0; j < all_courses.length; j++){
      const tmp = all_courses[j] 
      arr.concat(<Results elem={tmp}/>)
    }



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
        <Results/>
        </div>
      </div>
    );
  }
}

export default SearchResults;
