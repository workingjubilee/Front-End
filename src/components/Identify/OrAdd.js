import React, { useState } from 'react';
import { useToggle } from 'utilities/useToggle';
import PillInfoModal from 'components/Modals/PillInfoModal';
import Button from '@material-ui/core/Button';

const OrAdd = ({ handleAddPill, handleAddPillReminders }) => {
  const [open, setOpen] = useToggle(false);

  return (
        <>
          <section className='option3-container'>
            <div className='label'>
              <h5>
                <strong>Option 3 - </strong>Know your pill? Add it manually
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
        </>
  );
}

export default OrAdd;
