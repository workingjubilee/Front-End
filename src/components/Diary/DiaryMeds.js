import React from 'react';
import { connect } from 'react-redux';

import DiaryMed from './DiaryMed';

const DiaryMeds = ({ fetchingMeds, meds }) => {
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
        <div>
          <h2>Meds</h2>
          {meds.map(med => (
            <DiaryMed key={med.id} med_name={med.med_name} />
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  fetchingMed: state.fetchingMeds,
  meds: state.meds
});

export default connect(
  mapStateToProps,
  null
)(DiaryMeds);
