import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteMed, discontinueMed } from '../../actions';
import PillsList from './PillsList';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const PillsContainer = ({
  user,
  deleteMed,
  discontinueMed,
  history,
  location
}) => {
  const { username } = user;
  const [disOpen, setDisOpen] = useState(false);
  const [actOpen, setActOpen] = useState(false);
  const [delOpen, setDelOpen] = useState(false);
  const [medID, setMedID] = useState(null);
  const [medication, setMedication] = useState(null);

  function openDialog(dialog, id, med) {
    handleClickOpen(dialog, med);
    setMedID(id);
  }

  function handleClickOpen(dialog, inputMed) {
    if (dialog === 'discontinue') {
      setDisOpen(true);
      setMedication({ ...inputMed });
    } else if (dialog === 'reactivate') {
      setActOpen(true);
      setMedication({ ...inputMed });
    } else {
      setDelOpen(true);
    }
  }

  function handleClose(dialog) {
    if (dialog === 'discontinue') {
      setDisOpen(false);
    } else if (dialog === 'reactivate') {
      setActOpen(false);
    } else {
      setDelOpen(false);
    }
  }

  function handleDiscontinueMed(dialog) {
    handleClose(dialog);
    const editedMed = { ...medication };
    editedMed.med_active = false;
    editedMed.med_directions = editedMed.med_directions
      ? JSON.stringify(editedMed.med_directions)
      : editedMed.med_directions;
    discontinueMed(editedMed);
  }

  function handleReactivateMed(dialog) {
    handleClose(dialog);
    const editedMed = { ...medication };
    editedMed.med_active = true;
    editedMed.med_directions = editedMed.med_directions
      ? JSON.stringify(editedMed.med_directions)
      : editedMed.med_directions;
    discontinueMed(editedMed);
  }

  function handleDeleteMed(dialog) {
    handleClose(dialog);
    deleteMed(medID);
  }

  return (
    <div className='pills-container'>
      <Dialog
        open={disOpen}
        onClose={() => handleClose('discontinue')}
        aria-labelledby='discontinue-pill'
        aria-describedby='this-dialog-discontinues-this-pill'
        keepMounted
      >
        <DialogTitle id='discontinue-pill'>
          {'Are you sure you want to discontinue this medication?'}
        </DialogTitle>
        <DialogActions>
          <Button onClick={() => handleClose('discontinue')} color='primary'>
            No, keep this medication
          </Button>
          <Button
            color='primary'
            autoFocus
            onClick={() => handleDiscontinueMed('discontinue')}
          >
            Discontinue this medication
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={actOpen}
        onClose={() => handleClose('reactivate')}
        aria-labelledby='reactivate-pill'
        aria-describedby='this-dialog-reactivates-this-pill'
        keepMounted
      >
        <DialogTitle id='reactivate-pill'>
          {'Are you sure you want to reactivate this medication?'}
        </DialogTitle>
        <DialogActions>
          <Button onClick={() => handleClose('reactivate')} color='primary'>
            No, keep it inactive
          </Button>
          <Button
            color='primary'
            autoFocus
            onClick={() => handleReactivateMed('reactivate')}
          >
            Reactivate this medication
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={delOpen}
        onClose={() => handleClose('delete')}
        aria-labelledby='delete-pill'
        aria-describedby='this-dialog-deletes-this-pill'
        keepMounted
      >
        <DialogTitle id='delete-pill'>
          {'Are you sure you want to delete this medication?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Deleting a medication will also delete its reminders.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose('delete')} color='primary'>
            No, keep this medication
          </Button>
          <Button
            color='primary'
            autoFocus
            onClick={() => handleDeleteMed('delete')}
          >
            Delete this medication
          </Button>
        </DialogActions>
      </Dialog>
      {username ? (
        <PillsList
          openDialog={openDialog}
          history={history}
          location={location}
        />
      ) : null}
    </div>
  );
};

// Not being used for now
const styles = theme => ({
  label: {
    color: 'rgba(0, 0, 0, 0.26)',
    cursor: 'pointer',
    display: 'inline-flex',
    fontSize: '14px',
    transition: '0.3s ease all',
    lineHeight: '1.428571429',
    fontWeight: '400',
    paddingLeft: '0'
  }
});

const StyledPillsContainer = withStyles(styles)(PillsContainer);

const mapStateToProps = state => ({
  user: state.userReducer.user,
  fetchingUser: state.userReducer.fetchingUser,
  error: state.userReducer.error
});

export default connect(
  mapStateToProps,
  { deleteMed, discontinueMed }
)(StyledPillsContainer);
