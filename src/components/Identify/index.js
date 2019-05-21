import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addMed } from 'actions';
import { useToggle } from 'utilities/useToggle';
import Button from '@material-ui/core/Button';
import ImageSearch from './ByImage'; // Prioritizing the Scan component
import FormSearch from './ByForm';
import SearchResults from './Results';
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
        <SearchResults
          searchResults={data}
          handleAddPill={handleAddPill}
          handleAddPillReminders={handleAddPillReminders}
          history={history}
        />
      ) : (
        <section className='scan-container'>
          <h2>Identify your Pill before scheduling</h2>
          <ImageSearch history={history} setData={setData} />
          <FormSearch setData={setData} />
          <section className='option3-container'>
            <div className='label'>
              <h5>
                <strong>Option 3</strong> - Know your pill? Add it manually
              </h5>
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
