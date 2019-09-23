// search function
import React, {Component} from 'react';
import './css/master.css';

type State = {}
type Props = {}

class SearchResults extends Component < State, Props > {

    render() {

        return (<div>

            <div className="col-12 search">
                <h1 className="search">&ldquo;search query&rdquo;</h1>
            </div>

            <hr></hr>

            <div className="col-7 search">
                <div className="title">
                    <h3 className="search">00-000</h3>
                    <p className="search">Probably Lengthy CMU Class Name</p>
                </div>
                <p className="mini">SCS: Computer Science</p>
            </div>

            <div className="col-3 search">
                <h4>professor one, professor two</h4>
                <p className="mini">Offered Fall 2019</p>
            </div>

            <div className="col-2 search">
                <h5 className="search">4.6<span className="outOf">&#47;5</span></h5>
            </div>

        </div>);
    }
}

export default SearchResults;