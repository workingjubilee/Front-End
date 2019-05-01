import React, { useEffect } from 'react';

const Loading = ({ auth }) => {
  useEffect(() => {
    auth.handleAuthentication();
  }, []);

  return <h2>loading. . .</h2>;
};

export default Loading;
