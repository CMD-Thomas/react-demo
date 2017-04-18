import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import Nav from '../Nav/Nav';
import { usersFetchData } from '../../actions/users';

class UsersContainer extends Component {

  componentDidMount() {
    const token = localStorage.getItem('token');
    this.props.fetchData('http://localhost:3030/api/users', token);
  }

  render() {

    if (this.props.areLoading) {
      return (
        <p>Can't you see I'm loading? Leave me alone!</p>
      );
    }

    if (this.props.haveErrored) {
      return (
        <p>Something went wrong.</p>
      );
    }

    return (
      <div>
        <Nav title={"All Users"} />
        <Users users={this.props.users} />
      </div>
    );
  }
}

UsersContainer.propTypes = {
  users: PropTypes.array.isRequired,
  fetchData: PropTypes.func.isRequired,
  haveErrored: PropTypes.bool.isRequired,
  areLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    haveErrored: state.hasErrored,
    areLoading: state.areLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url, token) => dispatch(usersFetchData(url, token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

