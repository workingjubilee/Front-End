import React from 'react';
import moment from 'moment';

import DiaryEntryModal from './DiaryEntryModal';

import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
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
  const entryDate = moment(parseInt(diaryEntry.diary_date)).format(
    'ddd M/D/YY h:mma'
  );
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.date}>{entryDate}</Typography>
      </CardContent>
      <CardActions>
        <DiaryEntryModal diaryEntry={diaryEntry} newEntry={false} />
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(DiaryEntry);
