import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: '95%',
    height: '100%',
    minHeight: '5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: '3%',
    boxShadow: 'none'
  },
  static: {
    backgroundColor: '#F0F3F5',
    fontWeight: 'bold',
    fontSize: '.7rem',
    width: '9rem',
    height: '2.2rem',
    padding: '5px 5px 5px 10px',
    display: 'flex',
    alignItems: 'center'
  },
  dynamic: {
    backgroundColor: 'white',
    height: '2.2rem',
    fontSize: '1rem',
    border: '1px solid #F0F3F5',
    fontWeight: '300',
    width: '100%',
    padding: '5px',
    display: 'flex',
    alignItems: 'center'
  },
  row: {
    display: 'flex'
  }
};

const ResultInfo = ({ classes, result, correctCasing }) => {
  return (
    <div className={classes.card}>
      <div className={classes.row}>
        <Typography className={classes.static}>Pill Name:</Typography>
        <Typography className={classes.dynamic}>
          {correctCasing(result.strength[0] && result.strength[0][0])}
        </Typography>
      </div>
      <div className={classes.row}>
        <Typography className={classes.static}>Strength:</Typography>
        <Typography className={classes.dynamic}>
          {result.strength[0] && result.strength[0][1]}
          {result.strength[0] && result.strength[0][2]}
        </Typography>
      </div>
    </div>
  );
};

export default withStyles(styles)(ResultInfo);
