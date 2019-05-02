import React, { useState } from 'react';
import { useInput } from '../../utilities/useInput';
import StepOne from './SearchPillSteps/StepOne';
import StepTwo from './SearchPillSteps/StepTwo';
import StepThree from './SearchPillSteps/StepThree';

const AddPill = () => {
  const name = useInput;
  const [step, setStep] = useState(0);
  const nextStep = () => {
    setStep(step + 1);
  };
  const steps = [
    <StepOne nextStep={nextStep} name={name} />,
    <StepTwo nextStep={nextStep} />,
    <StepThree />
  ];
  return <div>{steps[step]}</div>;
};

export default AddPill;
