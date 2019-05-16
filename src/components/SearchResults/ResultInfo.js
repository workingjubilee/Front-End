import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import MuiCardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const CardContent = withStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between'
  }
})(props => <MuiCardContent {...props} />);

CardContent.muiName = 'CardContent';

const styles = {
  card: {
    width: '50%',
    height: '100%',
    marginLeft: '1.25rem',
    boxShadow: 'none'
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
  row: {
    display: 'flex'
  }
};

const ResultInfo = ({ classes, result }) => {
  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.row}>
          <Typography className={classes.static}>Pill Name:</Typography>
          <Typography className={classes.dynamic}>
            {result.strength[0] && result.strength[0][0]}
          </Typography>
        </div>
        <div className={classes.row}>
          <Typography className={classes.static}>Strength:</Typography>
          <Typography className={classes.dynamic}>
            {result.strength[0] && result.strength[0][1]}
            {result.strength[0] && result.strength[0][2]}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(ResultInfo);
