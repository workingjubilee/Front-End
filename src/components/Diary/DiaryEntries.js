import React from 'react';
import { connect } from 'react-redux';

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
      ) : filteredDiary.length === 0 ? (
        <div>
          <h2>Entries</h2>
          <p>You have no diary entries for this medication.</p>
        </div>
      ) : (
        <div>
          <h2>Entries</h2>
          {filteredDiary.map(diaryEntry => (
            <DiaryEntry key={diaryEntry.id} diaryEntry={diaryEntry} />
          ))}
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
