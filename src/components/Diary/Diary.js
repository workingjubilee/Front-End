import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchDiary } from '../../actions';
// import DiaryEntry from '../Diary/DiaryEntry';
import DiaryMeds from './DiaryMeds';

const Diary = ({ fetchDiary, user_id, diary, meds, fetchingMeds }) => {
  useEffect(() => {
    fetchDiary(user_id);
  }, [user_id, fetchDiary]);

  return (
    <div>
      {fetchingMeds === true ? (
        <h2>Loading medications...</h2>
      ) : meds.length === 0 ? (
        <h2>
          You aren't tracking any medications. You need to track a medication to
          record a diary entry.
        </h2>
      ) : (
        <div className='diary'>
          <div className='diaryTitle'>
            <h1>Diary:</h1>
          </div>
          <div className='diaryBody'>
            <DiaryMeds className='diaryMeds' />
            <h2>Diary Entries</h2>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  meds: state.meds,
  diary: state.diary,
  fetchingDiary: state.fetchingDiary,
  fetchingMeds: state.fetchingMeds,
  error: state.error
});

export default connect(
  mapStateToProps,
  { fetchDiary }
)(Diary);
