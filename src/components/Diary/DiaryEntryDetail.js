import React, { useEffect, useState } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import MuiCard from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import MuiCardContent from '@material-ui/core/CardContent';
import MuiButton from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import { connect } from 'react-redux';

import { useInput } from '../../utilities/useInput';

import { addDiary, editDiary, deleteDiary } from '../../actions';
import DiaryEmojiGrid from './DiaryEmojiGrid';

const Card = withStyles({
  root: {
    boxShadow: 'none'
  }
})(props => <MuiCard {...props} />);

Card.muiName = 'Card';

const CardContent = withStyles({
  root: {
    padding: '0px'
  }
})(props => <MuiCardContent {...props} />);

CardContent.muiName = 'CardContent';

const CancelButton = withStyles({
  root: {
    textTransform: 'capitalize'
  }
})(props => <MuiButton {...props} />);

CancelButton.muiName = 'Button';

const DeleteButton = withStyles({
  root: {
    textTransform: 'capitalize',
    background: '#D00A1B',
    color: 'white'
  }
})(props => <MuiButton {...props} />);

DeleteButton.muiName = 'Button';

const SaveButton = withStyles({
  root: {
    textTransform: 'capitalize',
    background: '#40AB48',
    color: 'white'
  }
})(props => <MuiButton {...props} />);

SaveButton.muiName = 'Button';

const styles = {
  card: {
    margin: 10,
    padding: '0 10 0 10',
    maxWidth: '500px',
    minWidth: '350px'
  },
  header: {
    fontSize: 25
  },
  subheader: {
    fontSize: 18,
    paddingBottom: '5px'
  },
  textBox: {
    paddingBottom: '5px'
  }
};

const DiaryEntryDetail = ({
  classes,
  diaryEntry,
  addDiary,
  editDiary,
  deleteDiary,
  handleClose,
  medName,
  user_id,
  med_id,
  dateTime
}) => {
  const diary_text = useInput('');
  const [diaryEmoji, setDiaryEmoji] = useState('0');
  const [entryDate, setEntryDate] = useState();
  const [newEntry, setNewEntry] = useState(true);

  useEffect(() => {
    if (diaryEntry) {
      setEntryDate(diaryEntry.diary_date);
      setDiaryEmoji(diaryEntry.diary_emoji);
      diary_text.setValue(diaryEntry.diary_text);
      setNewEntry(false);
    } else {
      setEntryDate(dateTime);
    }
    // eslint-disable-next-line
  }, [diaryEntry]);

  const updateDiaryEmoji = emojiValue => {
    setDiaryEmoji(emojiValue);
  };

  const requestAddDiary = e => {
    e.preventDefault();
    addDiary({
      user_id: user_id,
      med_id: med_id,
      diary_date: entryDate,
      diary_emoji: diaryEmoji,
      diary_text: diary_text.value
    });
    handleClose();
  };

  const requestEditDiary = e => {
    e.preventDefault();
    editDiary(diaryEntry.id, {
      diary_text: diary_text.value,
      diary_emoji: diaryEmoji
    });
    handleClose();
  };

  const requestDeleteDiary = e => {
    e.preventDefault();
    deleteDiary(diaryEntry.id);
    handleClose();
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.header}>
          {newEntry ? medName : diaryEntry.med_name}
        </Typography>
        <Typography className={classes.subheader}>
          {moment(parseInt(entryDate)).format('ddd M/D/YY h:mma')}
        </Typography>
        <TextField
          className={classes.textBox}
          id='outlined-full-width'
          style={{ margin: 0 }}
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
        <DiaryEmojiGrid
          diaryEmoji={diaryEmoji}
          updateDiaryEmoji={updateDiaryEmoji}
        />
      </CardContent>
      <CardActions className='diaryEntryButtons'>
        <CancelButton onClick={handleClose} variant='contained' color='default'>
          Cancel
        </CancelButton>
        {newEntry ? (
          <div />
        ) : (
          <DeleteButton
            tabIndex='-1'
            onClick={requestDeleteDiary}
            variant='contained'
            color='secondary'
          >
            Delete Entry
          </DeleteButton>
        )}
        <SaveButton
          onClick={newEntry ? requestAddDiary : requestEditDiary}
          variant='contained'
          color='secondary'
        >
          Save Entry
        </SaveButton>
      </CardActions>
    </Card>
  );
};

const mapStateToProps = state => ({
  user_id: state.userReducer.user.id,
  meds: state.medsReducer.meds
});

export default connect(
  mapStateToProps,
  { addDiary, editDiary, deleteDiary }
)(withStyles(styles)(DiaryEntryDetail));
