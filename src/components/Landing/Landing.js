import React from 'react';
import { withRouter } from 'react-router-dom';

const Landing = () => {
  const handleGetStarted = e => {
    e.preventDefault();
    console.log("it's working");
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
