import React from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions';
import { useInput } from '../../utilities/useInput';

const Register = ({ history, register }) => {
  const firstName = useInput();
  const lastName = useInput();
  const phone = useInput();
  const email = useInput();
  const username = useInput();
  const password = useInput();
  const confirmPassword = useInput();

  const submitRegister = e => {
    e.preventDefault();
    if (password.value === confirmPassword.value) {
      register({
        username: username.value,
        password: password.value,
        first_name: firstName.value,
        last_name: lastName.value,
        phone: phone.value,
        email: email.value
      })
        .then(res => {
          history.push('/dashboard');
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      alert('Passwords do not match.');
    }
  };

  return (
    <div className='registerPage'>
      <form onSubmit={submitRegister}>
        <input
          type='text'
          value={firstName.value}
          name='firstName'
          onChange={firstName.updateValue}
          placeholder='first name'
        />
        <input
          type='text'
          value={lastName.value}
          name='lastName'
          onChange={lastName.updateValue}
          placeholder='last name'
        />
        <input
          type='text'
          value={phone.value}
          name='phone'
          onChange={phone.updateValue}
          placeholder='phone'
        />
        <input
          type='text'
          value={email.value}
          name='email'
          onChange={email.updateValue}
          placeholder='email'
        />
        <input
          required
          type='text'
          value={username.value}
          name='username'
          onChange={username.updateValue}
          placeholder='username'
        />
        <input
          required
          type='password'
          value={password.value}
          name='password'
          onChange={password.updateValue}
          placeholder='password'
        />
        <input
          required
          type='password'
          value={confirmPassword.value}
          name='confirmPassword'
          onChange={confirmPassword.updateValue}
          placeholder='confirm password'
        />
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default connect(
  null,
  { register }
)(Register);
