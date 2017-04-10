import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory, hashHistory} from 'react-router';
import LoginFormContainer from './components/LoginForm/LoginFormContainer';
import Users from './components/Users';
import SingleBeerContainer from './components/Beers/SingleBeerContainer';
import BeersContainer from './components/Beers/BeersContainer';
import NotFound from './components/NotFound';
import * as api from './api/api';
import routes from './components/routes';
import styles from './layout.styl'


ReactDOM.render(
  <Router history={hashHistory} routes={routes} />,
  document.getElementById('app')
);