import React from 'react';
import { withRouter } from 'react-router-dom';

const Landing = props => {
  const handleGetStarted = e => {
    e.preventDefault();
    console.log("it's working");
    props.history.push('/register');
  };

  const handleGoogle = e => {
    e.preventDefault();
    console.log("it's working");
    // executes the register action with user's google info
    // links to user dasboard on success
    // alerts user of error on failuer
  };

  const handleFacebook = e => {
    e.preventDefault();
    console.log("it's working");
    // executes the register action with user's facebook info
    // links to user dasboard on success
    // alerts user of error on failuer
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
        <p>or sign up with</p>
        <div>
          <button onClick={handleGoogle}>google</button>
          <button onClick={handleFacebook}>facebook</button>
        </div>
      </section>
    </div>
  );
};

export default withRouter(Landing);
