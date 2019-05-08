import React from 'react';
import { connect } from 'react-redux';

import DiaryEntry from './DiaryEntry';

const DiaryEntries = ({ diary, diaryFocus }) => {
  const filteredDiary = diary.filter(diaryEntry => {
    return diaryEntry.med_id === diaryFocus;
  });

  return (
    <div className='diaryEntries'>
      {!diaryFocus ? (
        <h2>Choose a medication to view diary entries...</h2>
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
  diary: state.diary
});

export default connect(
  mapStateToProps,
  null
)(DiaryEntries);
