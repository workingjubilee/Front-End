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

import Image from './Image';
import ResultInfo from './ResultInfo';
import AddPillButton from './AddPillButton';

const styles = {
  card: {
    border: '10px dotted blue',
    maxWidth: '90vw'
  },
  cardContent: {
    display: 'flex'
  }
};

const SearchResult = ({ classes, pill }) => {
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Image imageLink={pill.imageLink} />
        <ResultInfo pill={pill} />
        <AddPillButton />
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(SearchResult);
