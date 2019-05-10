import React from 'react';
import { connect } from 'react-redux';
import CardActions from '@material-ui/core/CardActions';

import DiaryEntry from './DiaryEntry';
import DiaryEntryModal from './DiaryEntryModal';

const DiaryEntries = ({ diary, diaryFocus, meds }) => {
  const filteredDiary = diary.filter(diaryEntry => {
    return diaryEntry.med_id === diaryFocus;
  });

  let medName;
  if (diaryFocus) {
    medName = meds.filter(med => {
      return med.id === diaryFocus;
    })[0].med_name;
  }

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
            <DiaryEntryModal
              newEntry={true}
              medName={medName}
              med_id={diaryFocus}
            />
          </CardActions>
          {filteredDiary.length === 0 ? (
            <p>You have no diary entries for {medName}.</p>
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
