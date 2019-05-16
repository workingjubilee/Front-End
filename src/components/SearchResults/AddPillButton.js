import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddPillModal from '../Modals/AddPillModal';

const AddPillButton = ({ addPill, pill }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Add Pill</Button>
      <AddPillModal
        addPill={addPill}
        pill={pill}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};

export default AddPillButton;
