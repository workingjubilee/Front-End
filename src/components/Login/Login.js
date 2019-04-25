import React from 'react';
import { connect } from 'react-redux';

import { useInput } from '../../utilities/useInput';

const Login = () => {
  const username = useInput();
  const password = useInput();

  // login action creator call goes here...

  return (
    <div className='loginPage'>
      <form>
        <input
          required
          type='text'
          value={username.value}
          name='username'
          onChange={username.updateValue}
          placeholder='username'
        />
        <input
          type='password'
          value={password.value}
          name='password'
          onChange={password.updateValue}
          placeholder='password'
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default connect(
  null,
  null
)(Login);
