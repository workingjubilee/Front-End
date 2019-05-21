import React from 'react';
import Auth from 'Auth';

const Landing = () => {
  return (
    <div style={{ boxSizing: 'border-box' }}>
      {/* header */}
      <header
        style={{
          display: 'flex',
          background:
            'radial-gradient(farthest-side at 50% 0%, #2D8BEC, #252C35 90%)'
        }}
      >
        <div
          style={{
            margin: '150px 50px 50px 100px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            width: '50%'
          }}
        >
          <h1
            style={{
              fontSize: '60px',
              fontWeight: '000',
              color: '#FFFFFF'
            }}
          >
            Welcome to <br />
            RxID Pill Identifier
          </h1>
          <hr
            style={{
              width: '300px',
              marginLeft: '-150px',
              border: '2.5px solid #40AB48',
              justifyContent: 'flex-start'
            }}
          />
          <p style={{ color: '#74869B' }}>
            Identify your medications on their appearance and log each
            medication and your experience with them. Schedule your medications
            and get notifications minutes before due time with image and dosage
            amount to be taken.
          </p>
        </div>
        <div
          style={{
            width: '50%',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            margin: '150px 100px 50px 50px',
            lineHeight: '100%'
          }}
        >
          <button
            onClick={event => {
              event.preventDefault();
              Auth.lock.show();
            }}
            style={{
              color: '#E8EBEF',
              width: '180px',
              height: '60px',
              fontSize: '20px',
              background: 'none',
              border: '1px solid #979797',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Login
          </button>
          <button
            onClick={event => {
              event.preventDefault();
              Auth.lock.show();
            }}
            style={{
              fontSize: '20px',
              color: '#E8EBEF',
              width: '180px',
              height: '60px',
              background: '#2D90F5',
              border: '1px solid #2D90F5',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Join us
          </button>
        </div>
      </header>
      {/* core features */}
      <section>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h1>
            Our Core
            <br />
            Features
          </h1>
          <p>Check out our amazing features</p>
        </div>
      </section>
    </div>
  );
};

export default Landing;
