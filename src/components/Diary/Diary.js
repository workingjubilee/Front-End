import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchDiary } from '../../actions';
// import DiaryEntry from '../Diary/DiaryEntry';
import DiaryMed from './DiaryMed';

const Diary = ({ fetchDiary, user_id, diary, meds, fetchingMeds }) => {
  useEffect(() => {
    fetchDiary(user_id);
  }, [user_id, fetchDiary]);

  return (
    <div className='diary'>
      {fetchingMeds === true ? (
        <h2>Loading medications...</h2>
      ) : meds.length > 0 ? (
        <div>
          <h2>Diary:</h2>
          <h2>Meds</h2>
          {meds.map(med => (
            <DiaryMed key={med.id} med_name={med.med_name} />
          ))}
        </div>
      ) : (
        <h2>
          You aren't tracking any medications. You need to track a medication to
          record a diary entry.
        </h2>
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
