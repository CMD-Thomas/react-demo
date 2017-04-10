import React from 'react';
import notLoggedIn from './notLoggedIn';

class Users extends React.Component {

  constructor(props) {
    super(props);
    const token = localStorage.getItem('token');
    this.state = {
      token,
    };
  }

  componentDidMount() {
    // this.props.getUsers();
  }


  render() {
    if (!this.state.token) {
      return (
        <notLoggedIn />
      );
    } else {
      return (
        <p>Found token. Still have to check it </p>
      );
    }
  }
}

export default Users;
