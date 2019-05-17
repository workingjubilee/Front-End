import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  paper: {
    position: 'absolute',
    top: '15%',
    left: '15%',
    width: theme.spacing.unit * 75,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none'
  },
  no: {
    backgroundColor: '#5AAC49'
  },
  yes: {
    backgroundColor: '#3490F5'
  }
});

const ViewDetails = ({ classes, setOpen, open }) => {
  return (
    <Modal
      open={open}
      onClose={e => {
        e.preventDefault();
        setOpen(false);
      }}
    >
      <div className={classes.paper}>
        Please purchase Premium to View Details
        <Button className={classes.no}>No thanks</Button>
        <Button className={classes.yes}>Sure, take my money!</Button>
      </div>
    </Modal>
  );
};

export default withStyles(styles)(ViewDetails);
