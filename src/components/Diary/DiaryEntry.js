import React from 'react';
import moment from 'moment';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    margin: 10,
    padding: '0 10 0 10',
    display: 'flex',
    justifyContent: 'space-between'
  },
  date: {
    fontSize: 25
  }
};

const DiaryEntry = ({ classes, diaryEntry }) => {
  const entryDate = moment(diaryEntry.diary_date).format('ddd, M/D/YY, h:mm a');
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.date}>{entryDate}</Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' color='primary'>
          View Entry
        </Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(DiaryEntry);
