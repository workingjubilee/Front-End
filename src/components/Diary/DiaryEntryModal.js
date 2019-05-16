import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import withStyles from '@material-ui/core/styles/withStyles';

import DiaryEntryDetail from './DiaryEntryDetail';

const styles = {
  card: {
    margin: 10,
    padding: '0 10 0 10',
    display: 'flex',
    justifyContent: 'space-between'
  },
  date: {
    fontSize: 25
  },
  label: {
    textTransform: 'capitalize',
    textAlign: 'center',
    fontSize: '1.1em'
  }
};

function DiaryModal({
  classes,
  diaryEntry,
  handleClose,
  medName,
  med_id,
  dateTime,
  ...other
}) {
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby='simple-dialog-title'
      {...other}
    >
      <div>
        <DiaryEntryDetail
          handleClose={handleClose}
          diaryEntry={diaryEntry}
          medName={medName}
          med_id={med_id}
          dateTime={dateTime}
        />
      </div>
    </Dialog>
  );
}

DiaryModal.propTypes = {
  onClose: PropTypes.func,
  selectedValue: PropTypes.string
};

function DiaryEntryModal({ classes, diaryEntry, newEntry, medName, med_id }) {
  const [open, setOpen] = React.useState(false);
  const [dateTime, setDateTime] = React.useState();

  function handleClickOpen() {
    setDateTime(new Date().getTime());
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='diaryEntryModal'>
      <Button
        className={classes.label}
        variant='text'
        color='primary'
        onClick={handleClickOpen}
      >
        {newEntry ? 'Add New Diary Entry' : 'View/Edit'}
      </Button>
      <DiaryModal
        open={open}
        onClose={handleClose}
        handleClose={handleClose}
        diaryEntry={diaryEntry}
        medName={medName}
        med_id={med_id}
        dateTime={dateTime}
      />
    </div>
  );
}

export default withStyles(styles)(DiaryEntryModal);
