import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { addMed } from 'actions';
import { useToggle } from 'utilities/useToggle';
import Button from '@material-ui/core/Button';
import Scan from './Scan/Scan.js'; // Prioritizing the Scan component
import SearchPill from './SearchPill/SearchPill';
import Search from 'components/SearchResults';
import ViewDetails from 'components/SearchResults/ViewDetails';
// import Pill from 'components/PillsContainer/Pill.js';

function ScanOrAdd({ location, history, addMed }) {
  const [open, setOpen] = useToggle(false);
  const [data, setData] = useState();
  const [pill, setPill] = useState(null);

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
    <>
      {/* <Route path='/viewdetails' component={ViewDetails} /> */}
      {/* ^^^ hmm. Using hacky workaround for testing. NEEDS fixed */}

      {data ? (
        <Search
          setPill={setPill}
          searchResults={data}
          handleAddPill={handleAddPill}
          handleAddPillReminders={handleAddPillReminders}
          history={history}
          pill={pill}
        />
      ) : (
        <section className='scan-container'>
          <h2>Identify your Pill before scheduling</h2>
          <Scan history={history} setData={setData} />
          <SearchPill setData={setData} />
          <section className='option3-container'>
            <div className='label'>
              <h5>Option 3 -</h5>
              <p>Know your pill? Add it manually</p>
            </div>
            <Button onClick={setOpen} variant='contained'>
              Add Pill Manually
            </Button>
          </section>
        </section>
      )}
    </>
  );
}

export default connect(
  null,
  { addMed }
)(ScanOrAdd);
