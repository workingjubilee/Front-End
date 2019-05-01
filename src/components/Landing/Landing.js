import React from 'react';
import { withRouter } from 'react-router-dom';
import Auth from '../Auth/Auth';

const auth = new Auth();

const Landing = () => {
  const handleGetStarted = e => {
    e.preventDefault();
    console.log("it's working");
    auth.login();
  };

  return (
    <div>
      <header>
        <h1>RXid</h1>
        <p>
          Identify your medications based on their appearance and log each
          medication and your experiences with them
        </p>
      </header>
      <section>
        <button onClick={handleGetStarted}>Get Started</button>
      </section>
    </div>
  );
};

export default withRouter(Landing);
