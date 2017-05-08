import React from 'react';

const LoginForm = (props) => {
  return (
    <div >
      <form className="loginform" onSubmit={props.handleSubmit}>
        <div className="form__group">
          <input
            type="text"
            className="form__input"
            onChange={props.handleChange}
            placeholder="Username"
            name="name"
            required
          />
          <label htmlFor="name">Username</label>
        </div>
        <div className="form__group">
          <input
            type="password"
            className="form__input"
            onChange={props.handleChange}
            placeholder="Password"
            name="password"
            required
          />
          <label htmlFor="password">Password</label>
          <input type="submit" value="Submit" className="form__submit" />
          <div className="form__register"><span>No account yet? <a href="">register here</a>
          </span></div>
        </div>
      </form>

    </div>
  );
};

LoginForm.propTypes = {
  getToken: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  handleChange: React.PropTypes.func.isRequired,
};

export default LoginForm;
