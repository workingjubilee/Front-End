import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
  card: {
    boxShadow: 'none'
  },
  media: {
    height: '4rem',
    width: '5rem'
  }
};

const Image = ({ classes, imageLink }) => {
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={imageLink} />
        <CardContent />
      </CardActionArea>
    </Card>
  );
};

export default withStyles(styles)(Image);
