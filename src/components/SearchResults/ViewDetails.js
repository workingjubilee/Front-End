import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  paper: {
    position: 'absolute',
    top: '20%',
    left: '20%',
    width: '60vw',
    height: '60vh',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    outline: 'none',
    borderRadius: '5px'
  },
  no: {
    backgroundColor: '#5AAC49'
  },
  yes: {
    backgroundColor: '#3490F5'
  },
  button: {
    width: '30%',
    height: '2rem',
    fontSize: '0.7rem',
    color: 'white',
    textTransform: 'Capitalize',
    boxShadow: '.2rem .2rem .1rem grey',
    background: '#2D90F5'
  },
  static: {
    backgroundColor: '#F0F3F5',
    fontWeight: 'bold',
    fontSize: '16px',
    width: '9rem',
    height: '1.5rem',
    padding: '5px'
  },
  dynamic: {
    backgroundColor: 'white',
    height: '1.5rem',
    fontSize: '16px',
    border: '3px solid #F0F3F5',
    width: '100%',
    padding: '5px'
  },
  genericImage: {
    width: '100px',
    height: '100px'
  }
});

const ViewDetails = ({ classes, setOpen, open, result }) => {
  console.log(result);
  return (
    <Modal
      open={open}
      onClose={e => {
        e.preventDefault();
        setOpen(false);
      }}
    >
      {/* <img
        className={classes.genericImage}
        src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEtm2tJxpsgbyWcy36iZ6tPxSyg-wLQNBLOzRqbiNCaq1iAy5O`}
      /> */}
      <Button>Add Pill</Button>
      <Button>Add pill with reminder</Button>
    </Modal>
  );
};

export default withStyles(styles)(ViewDetails);
