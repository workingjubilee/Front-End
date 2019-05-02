import React, { useEffect } from 'react';
import axios from 'axios';

import Auth from '../../Auth/Auth';

const Loading = ({ history }) => {
  useEffect(() => {
    Auth.handleAuthentication();
    // it's a loading screen, so it makes sense to check every 100ms or so for _something_ to load
    axios
      .post(`${process.env.REACT_APP_BACKEND}/login`)
      .then(res => {
        // set user to response
      })
      .catch(console.error);
  }, []);

  return <h2>loading. . .</h2>;
};

export default Loading;
