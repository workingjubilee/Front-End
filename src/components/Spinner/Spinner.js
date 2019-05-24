import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import withStyles from '@material-ui/core/styles/withStyles';

function Spinner({ classes }) {
  return (
    <div className={classes.loading}>
      <CircularProgress
        className={classes.progress}
        color='primary'
        disableShrink
      />
    </div>
  );
}

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2
  },
  loading: {
    margin: '0 auto',
    width: 500,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default withStyles(styles)(Spinner);
