import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { FormHelperText } from '@material-ui/core';

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
