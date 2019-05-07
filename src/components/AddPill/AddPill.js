import React, { useState } from 'react';
import { useInput } from '../../utilities/useInput';
import StepOne from './AddPillSteps/StepOne';

const AddPill = () => {
  const name = useInput();
  const imprint = useInput();
  const [shape, setShape] = useState(0);
  const [color, setColor] = useState(0);
  const updateShape = shape => {
    setShape(shape);
  };
  const updateColor = color => {
    setColor(color);
  };
  const [step, setStep] = useState(0);
  const nextStep = () => {
    setStep(step + 1);
  };
  const steps = [
    <StepOne
      nextStep={nextStep}
      name={name}
      imprint={imprint}
      updateShape={updateShape}
      updateColor={updateColor}
      color={color}
      shape={shape}
    />
  ];
  return <div>{steps[step]}</div>;
};

export default AddPill;
