import React from 'react';
import { connect } from 'react-redux';

import DiaryMedsPanel from './DiaryMedsPanel';

function DiaryMedsPanels({ fetchingMeds, meds, changeFocus }) {
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
                key={med.id}
                changeFocus={changeFocus}
                med={med}
              />
            ) : null
          )}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  fetchingMed: state.fetchingMeds,
  meds: state.meds
});

export default connect(
  mapStateToProps,
  null
)(DiaryMedsPanels);
