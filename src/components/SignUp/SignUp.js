import React from "react";
import { connect } from "react-redux";
import { signUp } from "../../actions";
import { useInput } from "../../utilities/useInput";

const SignUp = ({ history, signUp }) => {
  const firstName = useInput();
  const lastName = useInput();
  const phone = useInput();
  const email = useInput();
  const username = useInput();
  const password = useInput();
  const confirmPassword = useInput();

  const submitSignUp = e => {
    e.preventDefault();
    signUp({
      username: username.value,
      password: password.value,
      firstName: firstName.value,
      lastName: lastName.value,
      phone: phone.value,
      email: email.value
    })
      .then(res => {
        history.push("/dashboard");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="signUpPage">
      <form onSubmit={submitSignUp}>
        <input
          required
          type="text"
          value={firstName.value}
          name="firstName"
          onChange={firstName.updateValue}
          placeholder="first name"
        />
        <input
          type="password"
          value={lastName.value}
          name="lastName"
          onChange={lastName.updateValue}
          placeholder="last name"
        />
        <input
          required
          type="number"
          value={phone.value}
          name="phone"
          onChange={phone.updateValue}
          placeholder="phone"
        />
        <input
          type="text"
          value={email.value}
          name="email"
          onChange={email.updateValue}
          placeholder="email"
        />
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
        <input
          required
          type="password"
          value={confirmPassword.value}
          name="confirmPassword"
          onChange={confirmPassword.updateValue}
          placeholder="confirm password"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default connect(
  null,
  { signUp }
)(SignUp);
