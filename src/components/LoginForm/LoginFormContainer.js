import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';import LoginForm from './LoginForm';
import * as api from '../../api/api';

class LoginFormContainer extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getToken     = this.getToken.bind(this);
    this.saveToken    = this.saveToken.bind(this);
  }

  // Get Token
  getToken(loginData) {
    api.getToken('http://localhost:3030/api/authenticate', loginData.name, loginData.password, this.saveToken);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getToken(this.state);
  }

  handleChange(event) {
    const target  = event.target;
    const value   = target.value;
    const name    = target.name;

    this.setState({
      [name]: value,
    });
  }

  // Save token to browser
  saveToken(data) {
    if (data.err) {
      // Do something
    } else {
      localStorage.setItem('token', data.data);
      this.props.router.replace('/beers');
    }
  }

  render() {
    return (
      <div>
        <LoginForm handleChange={this.handleChange}  handleSubmit={this.handleSubmit} 
        getToken={this.getToken}  />
      </div>
    )
  }
}

export default LoginFormContainer;
