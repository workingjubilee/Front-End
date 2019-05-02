import React from 'react';
import { useEffect } from 'react';

const StepTwo = props => {
  useEffect(() => {
    setTimeout(props.nextStep, 1000);
  });
  return (
    <div>
      <p>loading..</p>
    </div>
  );
};

export default StepTwo;
