import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchUser, deleteMed } from '../../actions';
import PillsList from './PillsList';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const PillsContainer = ({ fetchUser, user, deleteMed, history, location }) => {
  const { username } = user;
  const userID = user.id ? user.id : localStorage.getItem('userID');
  useEffect(() => {
    if (!user.auth_id) {
      fetchUser(userID);
    }
  }, [user, fetchUser, userID]);
  const [open, setOpen] = useState(false);
  const [medID, setMedID] = useState(null);

  function openDialog(id) {
    handleClickOpen();
    setMedID(id);
  }

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleDeleteMed() {
    handleClose();
    deleteMed(medID);
  }

  return (
    <div className='DashboardPage'>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='delete-pill'
        aria-describedby='alert-dialog-description'
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
          <Button onClick={handleClose} color='primary'>
            No, keep this medication
          </Button>
          <Button color='primary' autoFocus onClick={handleDeleteMed}>
            Delete this medication
          </Button>
        </DialogActions>
      </Dialog>
      {username ? (
        <PillsList
          user_id={userID}
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
  user: state.userReducer,
  fetchingUser: state.fetchingUser,
  error: state.error
});

export default connect(
  mapStateToProps,
  { fetchUser, deleteMed }
)(StyledPillsContainer);
