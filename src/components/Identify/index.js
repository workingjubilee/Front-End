import React, { useState, Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { addMed } from 'actions';

import ByImage from './ByImage'; // Prioritizing the Scan component
import ByForm from './ByForm';
import OrAdd from './OrAdd.js';
import Spinner from 'components/Spinner/Spinner.js';

const SearchResults = lazy(() => import('./Results'));

function ScanOrAdd({ location, history, addMed, ...props }) {
  const [data, setData] = useState();

  const handleAddPill = pillInfo => {
    addMed({
      ...pillInfo,
      med_add_date: new Date().getTime()
    })
      .then(() => {
        history.push('/pills');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleAddPillReminders = pillInfo => {
    addMed({
      ...pillInfo,
      med_add_date: new Date().getTime()
    })
      .then(() => {
        history.push('/adddosage');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
      <Suspense fallback={<Spinner />}>
      {data ? ( 
        <SearchResults
          searchResults={data}
          handleAddPill={handleAddPill}
          handleAddPillReminders={handleAddPillReminders}
          history={history}
        />
      ) : (
        <section className='scan-container'>
          <h2>Identify your Pill before scheduling</h2>
          <ByImage setData={setData} />
          <ByForm setData={setData} />
          <OrAdd 
            handleAddPill={handleAddPill}
            handleAddPillReminders={handleAddPillReminders}
          />
        </section>
      )}
      </Suspense>
  );
}

export default connect(
  null,
  { addMed }
)(ScanOrAdd);
