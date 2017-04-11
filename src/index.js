import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory, hashHistory} from 'react-router';

import LoginFormContainer from './components/LoginForm/LoginFormContainer';
import UsersContainer from './components/Users/UsersContainer';
import SingleBeerContainer from './components/Beers/SingleBeerContainer';
import BeersContainer from './components/Beers/BeersContainer';
import NotFound from './components/NotFound';
import * as api from './api/api';
import routes from './components/routes';

import styles from './styles/all.styl'


ReactDOM.render(
  <Router history={hashHistory} routes={routes} />,
  document.getElementById('app')
);