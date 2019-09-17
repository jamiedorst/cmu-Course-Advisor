// search function
import React, {Component} from 'react';
import './css/master.css';

type State = {}
type Props = {}


class searchResults extends Component < State, Props > {

    render() {
        return (<div>

            <div className ="col-12 search">
                <h1 className="search">&ldquo;search query&rdquo;</h1>
            </div>

            <div className ="col-7 search">
                <h3 className="search">XX-XXX</h3>
                <p>name of CMU class</p>
                <p className="mini">SCS: Computer Science</p>
            </div> 

            <div className="col-3 search">
                <h4>prof1, prof2</h4>
                <p className="mini">Offered Fall 2019</p>
            </div>

            <div className="col-2 search">
                <h5>4.6</h5>
                <h6>"&#47;5"</h6>
            </div>

        </div>);
    }
}

export default searchResults;