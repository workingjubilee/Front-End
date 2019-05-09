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
    maxWidth: '8rem'
  },
  // Not actually sure what this media class is doing
  media: {
    height: '8rem',
    width: '8rem'
  }
};

const Image = ({ classes, imageLink }) => {
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imageLink}
          title='Contemplative Reptile'
        />
        <CardContent />
      </CardActionArea>
    </Card>
  );
};

export default withStyles(styles)(Image);
