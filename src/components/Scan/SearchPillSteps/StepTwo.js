import React, { useState } from 'react';
import { useEffect } from 'react';

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
