import React, { useState } from 'react';
import { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import ExpandedSearch from '../SearchResultsModal/ExpandedSearchResultsModal';

const StepTwo = props => {
  useEffect(() => {
    // send request to ds with data from step 1
    setTimeout(props.nextStep, 1000);
  });
  return (
    <div>
      <p>loading..</p>
    </div>
  );
};

export default StepTwo;
