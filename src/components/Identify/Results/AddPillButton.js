import React from 'react';
import { useToggle } from 'utilities/useToggle';
import Button from '@material-ui/core/Button';
import AddPillModal from 'components/Modals/AddPillModal';

const AddPillButton = ({ addPill, pill }) => {
  const [open, setOpen] = useToggle(false);
  return (
    <div>
      <Button onClick={setOpen}>Add Pill</Button>
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
