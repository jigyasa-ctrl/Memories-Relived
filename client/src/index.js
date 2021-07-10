import React from 'react';
import ReactDOM  from 'react-dom';
import { Provider } from 'react-redux'; //provider allws us t access store from anywhere nsode the app
import { createStore, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk'
import './index.css';


import reducers from './reducers/index'

import App from './App.js';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));