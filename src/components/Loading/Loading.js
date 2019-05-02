import React, { useEffect } from 'react';
import axios from 'axios';

const Loading = ({ history, auth }) => {
  useEffect(() => {
    auth.handleAuthentication();
    // it's a loading screen, so it makes sense to check every 100ms or so for _something_ to load
    axios
      .post(`${process.env.REACT_APP_BACKEND}/login`)
      .then(res => {
        // set user to response
      })
      .catch(console.error);
    setInterval(() => {
      // wait for localStorage to populate ?
    }, 100);
  }, []);

  return <h2>loading. . .</h2>;
};

export default Loading;
