// search function
import React, {Component} from 'react';
import './css/master.css';

type State = {};
type Props = {};

function Results(props) {
    return(<div>

            <div className="col-12 divider">
                <div id="divider"></div>
            </div>

            <div className="col-12 browse">
                <h3 className="browse">SCS</h3>
                <h2 className="browse">00-000</h2>
                <h2 className="browse">Probably Lengthy CMU Course Name</h2>
                <h3 className="browse">Prof 1, Prof 2, Prof 3</h3>
                <h3 className="browse">All</h3>
                <h3 className="browse">00</h3>
                <h3 className="browse">0.0</h3>
            </div>

            {/*<div className="col-7 search">
                <div className="title">
                    <h3 className="search">00-000</h3>
                    <p className="search">Probably Lengthy CMU Class Name</p>
                </div>
                <p className="mini search">SCS: Computer Science</p>
            </div>

            <div className="col-3 search">
                <h4>professor one, professor two</h4>
                <p className="mini search">Offered Fall 2019</p>
            </div>

            <div className="col-2 search">
                <h5 className="search">4.6<span className="outOf">&#47;5</span></h5>
            </div>*/}
        </div>);
}

class Browse extends Component < State, Props > {

    render() {
        let arr = [ <Results/>, <Results/>, <Results/>, <Results/>, <Results/>, <Results/>, <Results/>, <Results/>]

        return (<div>
            <div className="col-12 search">
                <h1 className="search">Browse</h1>
            </div>

            <div className="col-8 filter">
                <div className="button">
                    <h6 className="search">ALL SEMESTERS<span className="triangle"></span></h6>
                </div>
                <div className="button">
                    <h6 className="search">ALL PROFESSORS<span className="triangle"></span></h6>
                </div>
                <div className="button">
                    <h6 className="search">ALL RATINGS<span className="triangle"></span></h6>
                </div>
                <div className="button">
                    <h6 className="search">ALL REQUIREMENTS<span className="triangle"></span></h6>
                </div>
                <div className="button">
                    <h6 className="search">ALL DEPARTMENTS<span className="triangle"></span></h6>
                </div>
                <div className="button">
                    <h6 className="search">ALL UNITS<span className="triangle"></span></h6>
                </div>
            </div>

            <div className="col-4 sort">
                <p className="mini search">00 results sorted <span id="sort">Numerically</span></p>
            </div>

            <div className="col-12 titles">
                <h1 className="browse" id="school">SCHOOL</h1>
                <h1 className="browse" id="course">COURSE</h1>
                <h1 className="browse" id="title">TITLE</h1>
                <h1 className="browse" id="instructors">INSTRUCTORS</h1>
                <h1 className="browse" id="semester">SEMESTER</h1>
                <h1 className="browse" id="units">UNITS</h1>
                <h1 className="browse" id="rating">RATING</h1>
            </div>

            <div onClick={()=>{window.location = '/courseDetail'}}>
                {arr}
            </div>

        </div>);
    }
}

export default Browse;
