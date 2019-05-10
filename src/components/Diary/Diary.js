import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { useInput } from '../../utilities/useInput';
import { fetchDiary } from '../../actions';
import DiaryEntries from '../Diary/DiaryEntries';
import DiaryMeds from './DiaryMeds';

const Diary = ({ fetchDiary, user_id, meds }) => {
  useEffect(() => {
    fetchDiary(user_id);
  }, [user_id, fetchDiary]);

  const diaryFocus = useInput(null);

  const changeFocus = id => {
    diaryFocus.setValue(id);
  };

  return (
    <div className='diary'>
      <div className='diaryTitle'>
        <h1>Diary</h1>
      </div>
      <div className='diaryBody'>
        <DiaryMeds changeFocus={changeFocus} diaryFocus={diaryFocus.value} />
        <DiaryEntries diaryFocus={diaryFocus.value} />
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
