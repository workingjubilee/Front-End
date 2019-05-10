import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

import DiaryEntry from './DiaryEntry';

const DiaryEntries = ({ diary, diaryFocus, meds }) => {
  const filteredDiary = diary.filter(diaryEntry => {
    return diaryEntry.med_id === diaryFocus;
  });

  return (
    <div className='diaryEntries'>
      {meds.length === 0 ? (
        <div />
      ) : !diaryFocus ? (
        <h2>Choose a medication to view diary entries...</h2>
      ) : (
        <div>
          <CardActions className='diaryEntriesHeader'>
            <h2>Entries</h2>
            <Button variant='contained' color='primary'>
              New Entry
            </Button>
          </CardActions>
          {filteredDiary.length === 0 ? (
            <p>
              You have no diary entries for{' '}
              {
                meds.filter(med => {
                  return med.id === diaryFocus;
                })[0].med_name
              }
              .
            </p>
          ) : (
            filteredDiary.map(diaryEntry => (
              <DiaryEntry key={diaryEntry.id} diaryEntry={diaryEntry} />
            ))
          )}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  diary: state.diary,
  meds: state.meds
});

export default connect(
  mapStateToProps,
  null
)(DiaryEntries);
