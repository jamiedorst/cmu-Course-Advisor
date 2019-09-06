// navbar
// not present on landing page
import React, {Component} from 'react';
import './css/navbar.css';

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
      <ul>
        <li onClick={()=>{this.changeUrl('/menu')}}>Browse</li>
        <li onClick={()=>{this.changeUrl('/checkout')}}>Profile</li>
        <li onClick={()=>{this.changeUrl('/about')}}>About</li>
      </ul>
    </div>);
  }

}

export default Navbar;
