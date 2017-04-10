import React from 'react';
import LoginFormContainer from './LoginForm/LoginFormContainer';

function notLoggedIn() {
  return (
    <div>
      <p>You're not logged in</p>
      <LoginFormContainer />
    </div>
  );
}

export default notLoggedIn;
