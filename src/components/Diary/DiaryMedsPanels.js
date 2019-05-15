import React from 'react';
import { connect } from 'react-redux';

import DiaryMedsPanel from './DiaryMedsPanel';

function DiaryMedsPanels({ fetchingMeds, meds, diary }) {
  const [diaryFocus, setDiaryFocus] = React.useState(null);

  const changeFocus = med_id => {
    setDiaryFocus(med_id);
  };

  return (
    <div className='diaryMeds'>
      {fetchingMeds === true ? (
        <h2>Loading medications...</h2>
      ) : meds.length === 0 ? (
        <h2>
          You aren't tracking any medications. You need to track a medication to
          record a diary entry.
        </h2>
      ) : (
        <div className='diaryMeds'>
          <h2>Sort-by pull-down here</h2>
          {meds.map((med, index) =>
            index <= 3 ? (
              <DiaryMedsPanel
                diaryCount={
                  diary.filter(diaryEntry => {
                    return diaryEntry.med_id === med.id;
                  }).length
                }
                key={med.id}
                med={med}
                changeFocus={changeFocus}
                diaryFocus={diaryFocus}
              />
            ) : null
          )}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  fetchingMed: state.meds.fetchingMeds,
  meds: state.meds.meds,
  diary: state.diary.diary
});

export default connect(
  mapStateToProps,
  null
)(DiaryMedsPanels);
