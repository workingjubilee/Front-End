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
  }
};

function DiaryModal({ classes, diaryEntry, handleClose, ...other }) {
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby='simple-dialog-title'
      {...other}
    >
      <div>
        <DiaryEntryDetail handleClose={handleClose} diaryEntry={diaryEntry} />
      </div>
    </Dialog>
  );
}

DiaryModal.propTypes = {
  onClose: PropTypes.func,
  selectedValue: PropTypes.string
};

function DiaryEntryModal({ diaryEntry }) {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant='contained' color='primary' onClick={handleClickOpen}>
        View Entry
      </Button>
      <DiaryModal
        open={open}
        onClose={handleClose}
        handleClose={handleClose}
        diaryEntry={diaryEntry}
      />
    </div>
  );
}

export default withStyles(styles)(DiaryEntryModal);
