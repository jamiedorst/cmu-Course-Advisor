// @flow
import React, {Component} from 'react';

import './css/footer.css';

type State = {}
type Props = {}

class Footer extends Component < State,
Props > {

  changeUrl(newUrl) {
    window.history.pushState("", "", newUrl);
    this.props.redirect(newUrl);
  }


  render() {
    return (<div id="footer">
      <ul>
        <li>© jamie :D 2019</li>
        <li onClick={()=>{window.location = '/about'}}>About</li>
        <li>Terms of Use</li>
        <li>Report Website Bugs</li>
      </ul>
    </div>);
  }

}

export default Footer;
