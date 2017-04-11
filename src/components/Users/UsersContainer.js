import React from 'react';
import notLoggedIn from '../notLoggedIn';
import Users from './Users';
import * as api from '../../api/api';
import Nav from '../Nav/Nav';


class UsersContainer extends React.Component {

  constructor(props) {
    super(props);
    this.saveUsersInState = this.saveUsersInState.bind(this);
    const token = localStorage.getItem('token');
    this.state = {
      token,
      users: undefined
    };
  }

  componentWillMount() {
    const token = localStorage.token;
    api.get('http://localhost:3030/api/users', token, this.saveUsersInState);
  }

  saveUsersInState(data) {
    console.log(data);
    this.setState({
      users: data,
    });
  }


  // render() {
  //   if (!this.state.token) {
  //     return (
  //       <notLoggedIn />
  //     );
  //   } else if (this.state.users === undefined) {
  //     return (
  //       <div>
  //         <p>No response yet</p>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <Nav title={"All users"} />
  //         <Users users={this.state.saveUsersInState} />
  //       </div>
  //     );
  //   }
  // }
  render() {
    if (this.state.users === undefined) {
      return (
        <div>The response it not here yet!</div>
      );
    }
    return (
      <div>
        <Nav title={"All Users"} />
        <Users users={this.state.users.users} />
      </div>
    );
  }
}

export default UsersContainer;




