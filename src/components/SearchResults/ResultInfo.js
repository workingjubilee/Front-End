import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: '50%',
    height: '100%',
    border: '5px dotted yellow',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '10px',
    boxShadow: 'none'
  },
  static: {
    backgroundColor: '#F0F3F5',
    fontWeight: 'bold',
    height: '2.5rem'
  },
  dynamic: {
    backgroundColor: 'white',
    height: '2.5rem',
    border: '3px solid #F0F3F5'
  },
  row: {
    display: 'flex'
  }
};

const ResultInfo = ({ classes, result }) => {
  return (
    <Card className={classes.card}>
      <div className={classes.row}>
        <Typography className={classes.static}>Pill Name:</Typography>
        <Typography className={classes.dynamic}>
          {result.medicine_name}
        </Typography>
      </div>
      <div className={classes.row}>
        <Typography className={classes.static}>Strength:</Typography>
        <Typography className={classes.dynamic}>
          {result.medicine_name}
        </Typography>
      </div>
      <CardContent />
    </Card>
  );
};

export default withStyles(styles)(ResultInfo);
