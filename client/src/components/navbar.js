// @flow
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
        <li onClick={()=>{this.changeUrl('/')}}>Home</li>
        <li onClick={()=>{this.changeUrl('/menu')}}>Menu</li>
        <li onClick={()=>{this.changeUrl('/location')}}>Location</li>
        <li onClick={()=>{this.changeUrl('/checkout')}}>Checkout</li>
        <li onClick={()=>{this.changeUrl('/about')}}>About</li>
      </ul>
    </div>);
  }

}

export default Navbar;
