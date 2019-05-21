import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addMed } from 'actions';
import { useToggle } from 'utilities/useToggle';
import Button from '@material-ui/core/Button';
import Scan from './ByImage/Scan'; // Prioritizing the Scan component
import SearchPill from './ByForm/SearchPill';
import Search from 'components/SearchResults';
import PillInfoModal from 'components/Modals/PillInfoModal';
// import Pill from 'components/PillsContainer/Pill.js';

function ScanOrAdd({ location, history, addMed }) {
  const [open, setOpen] = useToggle(false);
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
    <>
      {data ? (
        <Search
          searchResults={data}
          handleAddPill={handleAddPill}
          handleAddPillReminders={handleAddPillReminders}
          history={history}
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
          <PillInfoModal
            open={open}
            handleAddPill={handleAddPill}
            handleAddPillReminders={handleAddPillReminders}
            handleClose={setOpen}
          />
        </section>
      )}
    </>
  );
}

export default connect(
  null,
  { addMed }
)(ScanOrAdd);
