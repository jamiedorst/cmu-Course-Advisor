// @flow
import React, {Component} from 'react';

import './css/footer.css';

type State = {}
type Props = {}

class Footer extends Component < State,
Props > {
  render() {
    return (<div id="footer">
      <ul>
        <li>© New Garden Chinese Cuisine 2011-2018</li>
        <li>About Us</li>
        <li>Terms of Use</li>
        <li>Report Website Bugs</li>
      </ul>
    </div>);
  }

}

export default Footer;
