import React, { useState, Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { addMed } from 'actions';

import Spinner from 'components/Spinner/Spinner.js';

const IdentifyOptions = lazy(() => import('./Options'));
const SearchResults = lazy(() => import('./Results'));

function Identify({ match, location, history, addMed, ...props }) {
  const [data, setData] = useState();

  const addPill = (pillInfo, destination='pills') => {
    addMed({
      ...pillInfo,
      med_add_date: new Date().getTime()
    })
      .then(() => {
        history.push(`/${destination}`);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Suspense fallback={<Spinner />}>
      <Route
        exact
        path={`${match.url}`}
        render={props => (
          <IdentifyOptions {...props} addPill={addPill} setData={setData} />
        )}
      />
      <Route
        path={`${match.url}/results`}
        render={props => (
          <SearchResults searchResults={data} addPill={addPill} />
        )}
      />
    </Suspense>
  );
}

export default connect(
  null,
  { addMed }
)(Identify);
