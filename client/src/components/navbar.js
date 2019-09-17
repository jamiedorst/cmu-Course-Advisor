// navbar
// not present on landing page
import React, {Component} from 'react';
import './css/master.css';
import wordmark_white from '../images/CMU-white.png';

type State = {}
type Props = {}

class Navbar extends Component < State,
Props > {

    changeUrl(newUrl) {
        window.history.pushState("", "", newUrl);
        this.props.redirect(newUrl);
    }

    render() {
        return (<div id="navbar">

            <div className="col-12 nav">
                <img className="wordmark_white" src={wordmark_white} onError="this.style.borderWidth=0" alt="Carnegie Mellon University" />
                <h1 className="nav">Course Advisor</h1>
                <ul>
                    <li className="nav" onClick={()=>{this.changeUrl('/menu')}}>Browse</li>
                    <li className="nav" onClick={()=>{this.changeUrl('/checkout')}}>Profile</li>
                    <li className="nav" onClick={()=>{this.changeUrl('/about')}}>About</li>
                </ul>
                <input className="nav" type="text"/>
            </div>

        </div>);
    }   

}

export default Navbar;