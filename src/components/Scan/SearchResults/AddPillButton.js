import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  paper: {
    position: 'absolute',
    top: '30%',
    left: '30%',
    width: theme.spacing.unit * 75,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none'
  }
});

const AddPillButton = ({ classes, addPill, pill }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Add Pill</Button>
      <Modal
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className={classes.paper}>
          <Typography variant='h6' id='modal-title'>
            Would you like to add {pill.pillName} ?
          </Typography>
          <Button
            onClick={() => {
              addPill(false);
            }}
          >
            Add to medication list
          </Button>
          <Button
            onClick={() => {
              addPill(true);
            }}
          >
            Add to medication list with reminder
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default withStyles(styles)(AddPillButton);
