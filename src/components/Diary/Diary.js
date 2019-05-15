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
        <div>
          <h1>Diary</h1>
        </div>
      </div>
      <div className='diaryBody'>
        <DiaryMedsPanels />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  user_id: state.user.id,
  meds: state.meds,
  fetchingDiary: state.fetchingDiary,
  error: state.error
});

export default connect(
  mapStateToProps,
  { fetchDiary }
)(Diary);
