// @flow
import React, {Component} from 'react';

//import '../css/bootstrap.min.css';
import './css/landing_page.css';

type State = {}
type Props = {}

class LandingPage extends Component < State,
Props > {
  render() {
    return (<div><div id="main">
      <div className="main_img">
        <div className="main_centered">Order Online</div>
      </div>
    </div>

    <div id="tutorial">
      <div className="grid-container">
        <div className="grid-header">How to Use This Site</div>
        <div className="grid-item">
          <div className="grid-img">看</div>
          <div className="grid-img">選</div>
          <div className="grid-img">買</div>
          <div className="grid-txt">Checkout Our Menu</div>
          <div className="grid-txt">Select What You Want To Eat</div>
          <div className="grid-txt">Get It Delivered Or Scheduled For Pickup</div>
        </div>
      </div>
    </div></div>);
  }
}

export default LandingPage;
