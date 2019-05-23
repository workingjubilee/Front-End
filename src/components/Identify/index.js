import React, { useState, Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { addMed, setImage } from 'actions';

import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import Spinner from 'components/Spinner/Spinner.js';

const IdentifyOptions = lazy(() => import('./Options'));
const SearchResults = lazy(() => import('./Results'));

function Identify({ match, location, history, addMed, setImage, ...props }) {
  const [data, setData] = useState();

  const addPill = (pillInfo, destination = 'pills') => {
    console.log(destination);
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
    <ErrorBoundary>
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
            <SearchResults
              searchResults={data}
              addPill={addPill}
              setImage={setImage}
              history={history}
            />
          )}
        />
      </Suspense>
    </ErrorBoundary>
  );
}

export default connect(
  null,
  { addMed, setImage }
)(Identify);
