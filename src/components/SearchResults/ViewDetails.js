import React from 'react';
import Modal from '@material-ui/core/Modal';
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
      </div>
    </Modal>
  );
};

export default withStyles(styles)(ViewDetails);
