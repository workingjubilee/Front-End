import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchMeds } from '../../actions';
import Med from '../Meds/Med';

const Meds = ({ fetchMeds, user_id, meds }) => {
  useEffect(() => {
    fetchMeds(user_id);
  }, [user_id, fetchMeds]);

  return (
    <div className='meds'>
      {meds.length > 0 ? (
        <div>
          <h2>Meds:</h2>
          {meds.map(med => (
            <Med key={med.id} med={med} />
          ))}
        </div>
      ) : (
        <h2>Loading Meds...</h2>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  meds: state.meds,
  fetchingMeds: state.fetchingMeds,
  error: state.error
});

export default connect(
  mapStateToProps,
  { fetchMeds }
)(Meds);
