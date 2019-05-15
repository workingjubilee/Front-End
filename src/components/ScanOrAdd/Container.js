import React, { useReducer, useState } from 'react';
import { connect } from 'react-redux';
import { addMed } from '../../actions';
import Button from '@material-ui/core/Button';
import Scan from './Scan/Scan.js'; // Prioritizing the Scan component
import scanReducer, { init } from './scanReducer.js';
import Paper from '@material-ui/core/Paper';
import SearchPill from './SearchPill/SearchPill';
import PillInfoModal from '../Modals/PillInfoModal';
import AddPillModal from '../Modals/AddPillModal';

function ScanOrAdd({ location, history, addMed }) {
  const [state, dispatch] = useReducer(scanReducer, init(location));
  const [pill, setPill] = useState({});
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  console.log(pill);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = pillInfo => {
    handleClose();
    setPill(pillInfo);
    handleConfirmOpen();
  };

  const handleConfirmOpen = () => {
    setConfirmOpen(true);
  };

  const handleConfirmClose = () => {
    setConfirmOpen(false);
  };

  const handleAddPill = () => {
    addMed(pill)
      .then(() => {
        history.push('/pills');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleAddPillReminders = () => {
    addMed(pill)
      .then(() => {
        history.push('/adddosage');
      })
      .catch(error => {
        console.log(error);
      });
  };

  console.log(state); // purely for debugging

  return (
    <Paper square>
      <Scan state={state} dispatch={dispatch} />
      <SearchPill state={state} dispatch={dispatch} />
      <Button onClick={handleOpen} variant='contained'>
        Add Pill Manually
      </Button>
      <PillInfoModal
        open={open}
        handleConfirm={handleConfirm}
        handleClose={handleClose}
        setPill={setPill}
      />
      <AddPillModal
        open={confirmOpen}
        pill={pill}
        handleClose={handleConfirmClose}
        handleAddPill={handleAddPill}
        handleAddPillReminders={handleAddPillReminders}
      />
    </Paper>
  );
}

const mapStateToProps = state => ({
  addingMed: state.addingMed,
  error: state.error
});

export default connect(
  mapStateToProps,
  { addMed }
)(ScanOrAdd);
