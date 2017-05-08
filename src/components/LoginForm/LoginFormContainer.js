import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { loginUser } from '../../actions/generalActions';
import PropTypes from 'prop-types';

// Container to fetch data and render subcomponent
// Login dont handle errors for now
// Gettoken

class LoginFormContainer extends Component {
  constructor(props) {
    super(props);
    this.getToken     = this.getToken.bind(this);
    this.saveToken    = this.saveToken.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Get Token
  getToken(loginData) {
    this.props.loginUser('http://localhost:3030/api/authenticate', loginData.name, loginData.password, this.saveToken);
  }

  handleChange(event) {
    const target  = event.target;
    const value   = target.value;
    const name    = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getToken(this.state);
  }

  // Save token to browser
  saveToken(data) {
    console.log('savedatoken', data);
    console.log('tering?');
    if (data.err) {
      console.log(data.err);
      console.log(data);
    } else {
      localStorage.setItem('token', data.data);
      this.props.router.replace('/beers');
    }
  }

  render() {
    return (
      <div>
        <LoginForm
          getToken={this.getToken}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

LoginFormContainer.propTypes = {
  loginUser: PropTypes.func.required,
  router: PropTypes.any,
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (url, username, password) => dispatch(loginUser(url, username, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
