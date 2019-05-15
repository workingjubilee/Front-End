import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchDiary } from '../../actions';

import DiaryMedsPanels from './DiaryMedsPanels';

const Diary = ({ fetchDiary, user_id }) => {
  useEffect(() => {
    fetchDiary(user_id);
  }, [user_id, fetchDiary]);

  return (
    <div className='diary'>
      <div className='diaryTitle'>
        <h1>Diary</h1>
      </div>
      <div className='diaryBody'>
        <DiaryMedsPanels />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  user_id: state.userReducer.user.id,
  meds: state.medsReducer.meds,
  fetchingDiary: state.diaryReducer.fetchingDiary,
  error: state.diaryReducer.error
});

export default connect(
  mapStateToProps,
  { fetchDiary }
)(Diary);
