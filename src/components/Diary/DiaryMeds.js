import React from 'react';
import { connect } from 'react-redux';

import DiaryMed from './DiaryMed';

const DiaryMeds = ({ meds }) => {
  return (
    <div>
      <h2>Meds</h2>
      {meds.map(med => (
        <DiaryMed key={med.id} med_name={med.med_name} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  meds: state.meds
});

export default connect(
  mapStateToProps,
  null
)(DiaryMeds);
