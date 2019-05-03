import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { logIn } from '../../actions';

import Auth from '../../Auth/Auth';

const Loading = ({ history, logIn }) => {
  useEffect(() => {
    Auth.handleAuthentication()
      .then(() => {
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
      })
      .catch(err => {
        console.error(err);
        history.push('/');
      });
  }, []);

  return <h2>loading. . .</h2>;
};

export default connect(
  null,
  { logIn }
)(Loading);
