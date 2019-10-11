// search function
import React, {Component} from 'react';
import './css/master.css';

type State = {};
type Props = {};

function Results(props) {
    return(<div>
        <hr></hr>

            <div className="col-7 search">
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
            </div>
        </div>);
}

class SearchResults extends Component < State, Props > {

    render() {
        let arr = [ <Results/>, <Results/>, <Results/>, <Results/>, <Results/>, <Results/>, <Results/>, <Results/>]

        return (<div>
            <div className="col-12 search">
                <h1 className="search">&ldquo;search query&rdquo;</h1>
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
            </div>

            <div className="col-4 sort">
                <p className="mini search">XX results sorted by <span id="sort">Best Match</span></p>
            </div>

            <div>{arr}</div>
        </div>);
    }
}

export default SearchResults;