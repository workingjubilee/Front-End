import React, { useEffect } from 'react';
import axios from 'axios';

import Auth from '../../Auth/Auth';

const Loading = ({ history }) => {
  useEffect(() => {
    Auth.handleAuthentication()
      .then(() => {
        axios
          .post(`${process.env.REACT_APP_BACKEND}/api/auth/login`, null, {
            headers: {
              authorization: localStorage.getItem('token')
            }
          })
          .then(res => {
            console.log(res);
            history.push('/dashboard');
          })
          .catch(err => {
            console.error(err);
            history.push('/login');
          });
      })
      .catch(err => console.error(err));
  }, []);

  return <h2>loading. . .</h2>;
};

export default Loading;
