import React from 'react';
import Auth from 'Auth';

const Landing = () => {
  const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userID');
  };
  return (
    <div className='homeScreen'>
      <h2>Home screen</h2>
      <button
        onClick={event => {
          event.preventDefault();
          Auth.lock.show();
        }}
      >
        Login or Register
      </button>
      {/* Logout needed for Auth0 testing, needs to be moved for production */}
      <button onClick={logOut}>Logout</button>
    </div>
  );
};

export default Landing;
