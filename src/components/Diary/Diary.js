import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchDiary } from '../../actions';
// import DiaryEntry from '../Diary/DiaryEntry';
import DiaryMeds from './DiaryMeds';

const Diary = ({ fetchDiary, user_id }) => {
  useEffect(() => {
    fetchDiary(user_id);
  }, [user_id, fetchDiary]);

  return (
    <div className='diary'>
      <div className='diaryTitle'>
        <h1>Diary:</h1>
      </div>
      <div className='diaryBody'>
        <DiaryMeds className='diaryMeds' />
        <h2>Diary Entries</h2>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  fetchingDiary: state.fetchingDiary,
  error: state.error
});

export default connect(
  mapStateToProps,
  { fetchDiary }
)(Diary);
