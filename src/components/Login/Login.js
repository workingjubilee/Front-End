import React from "react";
import { connect } from "react-redux";
import { logIn } from "../../actions";
import { useInput } from "../../utilities/useInput";

const Login = ({ history, logIn }) => {
  const username = useInput();
  const password = useInput();

  const submitLogin = e => {
    e.preventDefault();
    logIn({ username: username.value, password: password.value })
      .then(res => {
        history.push("/dashboard");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="loginPage">
      <form onSubmit={submitLogin}>
        <input
          required
          type="text"
          value={username.value}
          name="username"
          onChange={username.updateValue}
          placeholder="username"
        />
        <input
          type="password"
          value={password.value}
          name="password"
          onChange={password.updateValue}
          placeholder="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default connect(
  null,
  { logIn }
)(Login);
