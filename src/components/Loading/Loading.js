import React, { useEffect } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { logIn } from '../../actions';

import auth from '../../Auth';

const Loading = ({ history, logIn }) => {
  auth.lock.on('authenticated', function(authResult) {
    localStorage.setItem('token', authResult.idToken);
    console.log("it's authenticated");
    logIn()
      .then(res => {
        if (res.newUser) {
          history.push('/onboard');
        } else {
          history.push('/dashboard');
        }
      })
      .catch(() => {
        history.push('/');
      });
  });
  useEffect(() => {
    console.log(history.location.hash);
    auth.lock.resumeAuth(history.location.hash, function(error, authResult) {
      if (error) {
        alert('Could not parse hash');
      }
    });
  }, [history, logIn]);

  return <h2>loading. . .</h2>;
};

export default connect(
  null,
  { logIn }
)(Loading);
