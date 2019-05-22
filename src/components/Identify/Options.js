import React from 'react';
import ByImage from './ByImage'; // Prioritizing the Scan component
import ByForm from './ByForm';
import OrAdd from './OrAdd.js';
import Button from '@material-ui/core/Button';

const IdentifyOptions = ({ addPill, setData, ...props }) => {
  return (
    <section className='scan-container'>
      <header className='header-logo'>
        <h1>
          RxID <br /> Pill Identifier
        </h1>
        <h4>
          Identify your medications based on their appearance and log each
          <br />
          medication and your experiences with them.
        </h4>
        <Button variant='contained'>Learn more</Button>
      </header>
      <section className='options-container'>
        <h2>Identify your Pill before scheduling</h2>
        <ByImage setData={setData} />
        <ByForm setData={setData} />
        <OrAdd addPill={addPill} />
      </section>
    </section>
  );
};

export default IdentifyOptions;
