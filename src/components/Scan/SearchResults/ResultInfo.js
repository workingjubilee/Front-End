import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
};

const ResultInfo = ({ classes, pill }) => {
  return (
    <Card className={classes.card}>
      <Typography variant='h5'>{pill.pillName}</Typography>
      <Button>Expand</Button>
      <CardContent />
    </Card>
  );
};

export default withStyles(styles)(ResultInfo);
