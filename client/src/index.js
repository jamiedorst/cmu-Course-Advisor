import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/index.js';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import './components/css/index.css';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}><App/></Provider>, document.getElementById('root')
);
