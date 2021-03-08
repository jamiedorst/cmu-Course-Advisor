// navbar
// not present on landing page
import React, {Component} from 'react';
import './css/master.css';
import wordmark_white from '../images/CMU-white.png';
import user from '../images/user.png';

type State = {};
type Props = {};

class Navbar extends Component < State,
Props > {

    changeUrl(newUrl) {
        window.history.pushState("", "", newUrl);
        this.props.redirect(newUrl);
    }

    render() {
        return (<div>

            <div className="col-12 nav">
                <img className="wordmark_white" src={wordmark_white} onError={ () => this.style.borderWidth = 0} alt="Carnegie Mellon University" onClick={()=>{window.location = '/'}}/>
                <h1 className="nav" onClick={()=>{window.location = '/'}} >Course Advisor</h1>

                <ul className="nav">
                    <li className="nav" onClick={()=>{window.location = '/about'}}>About</li> 
                    <li className="nav" onClick={()=>{window.location = '/browse'}}>Browse</li>
                </ul>

                <input className="nav" type="text"/>

                <img className="user" src={user} onClick={()=>{window.location = '/profile'}}/>
            </div>

        </div>);
    }

}

export default Navbar;
