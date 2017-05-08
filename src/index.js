import React from 'react';
import { Router, hashHistory, } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import PropTypes from 'prop-types';
import routes from './components/routes';

import styles from './styles/all.styl'

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
