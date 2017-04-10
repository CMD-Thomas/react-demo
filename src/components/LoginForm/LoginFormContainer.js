import React from 'react';
import LoginForm from './LoginForm';
import Nav from '../Nav/Nav';
import * as api from '../../api/api';
import {Router, Route, Link, browserHistory, hashHistory} from 'react-router';



// Container to fetch data and render subcomponent
// Login dont handle errors for now
// Gettoken

class LoginFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.getToken = this.getToken.bind(this);
    this.saveToken = this.saveToken.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  // Get Token
  getToken(loginData) {
    api.getToken('http://localhost:3030/api/authenticate', loginData.name, loginData.password, this.saveToken);
  }

  // Save token to browser
  saveToken(data) {
    if (data.err) {
      console.log(data.err);
    } else {
      localStorage.setItem('token', data.data);
      console.log(this.props)
      this.props.router.replace('/beers');

    }
  }

  render() {
    return (
      <div>
        <LoginForm getToken={this.getToken} handleChange={this.handleChange}  handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default LoginFormContainer;
