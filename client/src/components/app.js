// @flow
import React, {Component} from 'react';
// import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
// import LandingPage from './landing_page.js';
// import MenuPage from './menu_page.js';
import OrderOnline from './order_online_app.js'

import * as actions from '../actions';

type State = {}
type Props = {}

class App extends Component<State, Props> {
  render() {
    return (<OrderOnline />);
  }
}

export default connect(null, actions)(App);
