import React, { PropTypes } from 'react';

const Users = (props) => {
  const users = props.users.map((user, index) =>
    <li className="list__item" key={index}>
      <span className="user__name">{user.username}</span>
    </li>
  );

  return (
    <div className="container">
      <ul className="list">
        {users}
      </ul>
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
};

export default Users;
