import React, { useEffect } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import { connect } from 'react-redux';

import { useInput } from '../../utilities/useInput';

import { editDiary } from '../../actions';

const styles = {
  card: {
    margin: 10,
    padding: '0 10 0 10',
    width: 500
  },
  header: {
    fontSize: 25
  },
  subheader: {
    fontSize: 18
  }
};

const DiaryEntryDetail = ({ classes, diaryEntry, editDiary }) => {
  const entryDate = moment(diaryEntry.diary_date).format('ddd M/D/YY h:mma');
  const diary_text = useInput('');

  useEffect(() => {
    if (diaryEntry) {
      diary_text.setValue(diaryEntry.diary_text);
    }
    // eslint-disable-next-line
  }, [diaryEntry]);

  const requestEditDiary = e => {
    e.preventDefault();
    editDiary(diaryEntry.id, {
      diary_text: diary_text.value
    });
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.header}>
          {diaryEntry.med_name}
        </Typography>
        <Typography className={classes.subheader}>{entryDate}</Typography>
        <TextField
          id='outlined-full-width'
          label='How are you feeling?'
          style={{ margin: 8 }}
          placeholder='How are you feeling?'
          fullWidth
          multiline
          rows={10}
          rowsMax={10}
          margin='normal'
          variant='outlined'
          InputLabelProps={{
            shrink: true
          }}
          value={diary_text.value}
          onChange={diary_text.updateValue}
        />
      </CardContent>
      <CardActions>
        <Button variant='contained' color='default'>
          Cancel
        </Button>
        <Button
          onClick={requestEditDiary}
          variant='contained'
          color='secondary'
        >
          Save Entry
        </Button>
      </CardActions>
    </Card>
  );
};

export default connect(
  null,
  { editDiary }
)(withStyles(styles)(DiaryEntryDetail));
