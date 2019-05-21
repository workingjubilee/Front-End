import React from 'react';
import Auth from 'Auth';
import ArrowIcon from '@material-ui/icons/CompareArrows';
import DiaryIcon from '@material-ui/icons/QuestionAnswer';
import ScanIcon from '@material-ui/icons/CenterFocusStrong';
import PillIcon from '@material-ui/icons/Link';
// import '../../scss/Landing.scss';

const Landing = () => {
  return (
    <div className='landing'>
      {/* header */}
      <header className='header'>
        <div className='product-data'>
          <h1>
            Welcome to <br />
            RxID Pill Identifier
          </h1>
          <hr />
          <p>
            Identify your medications on their appearance and log each
            medication and your experience with them. Schedule your medications
            and get notifications minutes before due time with image and dosage
            amount to be taken.
          </p>
        </div>
        <div className='buttons'>
          <button
            className='login'
            onClick={event => {
              event.preventDefault();
              Auth.lock.show();
            }}
          >
            Login
          </button>
          <button
            onClick={event => {
              event.preventDefault();
              Auth.lock.show();
            }}
            className='join'
          >
            Join us
          </button>
        </div>
      </header>
      {/* core features */}
      <section className='core-features'>
        <div className='text-content'>
          <h1>
            Our Core
            <br />
            Features
          </h1>
          <p>Check out our amazing features</p>
        </div>
        <div className='tiles'>
          <div className='tiles-column'>
            <div className='scan-tile'>
              <ScanIcon className='scan-icon' />
              <p>Scan & Identify Pills</p>
            </div>
            <div className='tile'>
              <PillIcon className='icon' />
              <p>Medication List</p>
            </div>
          </div>
          <div className='tiles-column'>
            <div className='tile'>
              <ArrowIcon className='icon' />
              <p>Schedule Pills</p>
            </div>
            <div className='tile'>
              <DiaryIcon className='icon' />
              <p>Medication Diary</p>
            </div>
          </div>
        </div>
      </section>
      {/* testimonials */}
      <section className='testimonials'>
        <div className='text-content'>
          <h1>Testimonials</h1>
          <p>What our users said about our product</p>
        </div>
      </section>
      {/* team */}
      {/* footer */}
    </div>
  );
};

export default Landing;
