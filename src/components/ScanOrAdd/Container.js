import React, { useReducer } from 'react';
import Scan from './Scan/Scan.js'; // Prioritizing the Scan component
import scanReducer, { init } from './scanReducer.js';
import Paper from '@material-ui/core/Paper';
import Tabber from './Tabber.js';
import Spinner from 'components/Spinner/Spinner.js'

const SearchPill = React.lazy(() =>
 import('./SearchPill/SearchPill')); // Lazy-loading only imports if it needs to

export default function ScanOrAdd({ location, history }) {
  const [state, dispatch] = useReducer(scanReducer, init(location));

  console.log(state); // purely for debugging

  return (
    <Paper square>
      <Tabber state={state} dispatch={dispatch} />
      <React.Suspense fallback={<Spinner />}>
        { state.tab === 0
          ? <Scan state={state} dispatch={dispatch} />
          : <SearchPill state={state} dispatch={dispatch} />
        }
      </React.Suspense>
    </Paper>
  );
};