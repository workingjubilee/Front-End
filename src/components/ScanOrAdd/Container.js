import React, { useReducer } from 'react';
import Scan from './Scan/Scan.js'; // Prioritizing the Scan component
import scanReducer, { init } from './scanReducer.js';
import Paper from '@material-ui/core/Paper';
import SearchPill from './SearchPill/SearchPill';

export default function ScanOrAdd({ location, history }) {
  const [state, dispatch] = useReducer(scanReducer, init(location));

  console.log(state); // purely for debugging

  return (
    <Paper square>
      <Scan state={state} dispatch={dispatch} />
      <SearchPill state={state} dispatch={dispatch} />
      <p>Add Manually</p>
    </Paper>
  );
}
