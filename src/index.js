import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import PropTypes from 'prop-types';

import LoginFormContainer from './components/LoginForm/LoginFormContainer';
import UsersContainer from './components/Users/UsersContainer';
import SingleBeerContainer from './components/Beers/SingleBeerContainer';
import BeersContainer from './components/Beers/BeersContainer';
import NotFound from './components/NotFound';
import * as api from './api/api';
import routes from './components/routes';


import styles from './styles/all.styl'

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')

);




