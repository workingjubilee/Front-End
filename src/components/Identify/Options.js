import React from 'react';
import ByImage from './ByImage'; // Prioritizing the Scan component
import ByForm from './ByForm';
import OrAdd from './OrAdd.js';

const IdentifyOptions = ({ addPill, setData, ...props }) => {
  return (
    <section className='scan-container'>
      <h2>Identify your Pill before scheduling</h2>
      <ByImage setData={setData} />
      <ByForm setData={setData} />
      <OrAdd addPill={addPill} />
    </section>
  );
};

export default IdentifyOptions;
