import React, { useEffect } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { logIn } from 'actions';

import Auth from 'Auth';

const Loading = ({ history, logIn }) => {
  Auth.lock.on('authenticated', function(authResult) {
    localStorage.setItem('token', authResult.idToken);
    localStorage.setItem('username', authResult.idTokenPayload.nickname);
    logIn()
      .then(res => {
        if (res.newUser) {
          history.push('/user');
        } else {
          history.push('/reminders');
        }
      })
      .catch(() => {
        history.push('/');
      });
  });
  useEffect(() => {
    Auth.lock.resumeAuth(history.location.hash, function(error, authResult) {
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
