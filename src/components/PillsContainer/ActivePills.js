import React from 'react';
import Pill from './Pill';
import withStyles from '@material-ui/core/styles/withStyles';

const ActivePills = ({ classes, activeMeds, openDialog }) => {
  return (
    <div className={classes.meds}>
      <h3>
        Below are your active medications. You can either discontinue them or
        add a diary note.
      </h3>
      {activeMeds.map(med => (
        <Pill key={med.id} med={med} openDialog={openDialog} />
      ))}
    </div>
  );
};

const styles = theme => ({
  meds: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  }
});

export default withStyles(styles)(ActivePills);
