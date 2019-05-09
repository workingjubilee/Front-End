import React, { useState } from 'react';
import { useInput } from '../../utilities/useInput';
import Card from '@material-ui/core/Card';
import StepOne from './AddPillSteps/StepOne';
import StepTwo from './AddPillSteps/StepTwo';
import StepThree from './AddPillSteps/StepThree';
import { makeReminders } from './helper';

const AddPill = () => {
  const name = useInput();
  const imprint = useInput();
  const [color, setColor] = useState(0);
  const [shape, setShape] = useState(0);
  const [capsulesPerDose, setCapsulesPerDose] = useState(0);
  const [lengthOfDosage, setLenghOfDosage] = useState(0);
  const [dosageFrequency, setDosageFrequency] = useState('');
  const [dosageInstruction, setDosageInstruction] = useState('');
  const customInstruction = useInput();
  const updateColor = color => {
    setColor(color);
  };
  const updateShape = shape => {
    setShape(shape);
  };
  const updateCapsulesPerDose = amount => {
    setCapsulesPerDose(amount);
  };
  const updateLengthOfDosage = value => {
    setLenghOfDosage(value);
  };
  const updateDosageFrequency = value => {
    setDosageFrequency(value);
  };
  const updateDosageInstruction = value => {
    setDosageInstruction(value);
  };
  const [step, setStep] = useState(0);
  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  const handleAddPill = () => {
    if (!dosageFrequency) {
      return null;
    }
    const userID = localStorage.getItem('userID');
    const reminderTimes = makeReminders(
      '2019-05-09T14:36:31.364Z',
      '2019-06-09T12:36:31.364Z',
      dosageFrequency,
      8,
      'Wed',
      '08:00:00',
      customInstruction.value || dosageInstruction || null
    );
    const reminders = reminderTimes.map(time => {
      return {
        user_id: userID,
        med_id: 'coming soon',
        rem_type: 'admin',
        rem_notes: null,
        rem_date: time
      };
    });

    const medData = {
      
    }

    console.log(reminders);
    // send user to dashboard
  };
  const steps = [
    <StepOne
      nextStep={nextStep}
      name={name}
      imprint={imprint}
      color={color}
      shape={shape}
      updateColor={updateColor}
      updateShape={updateShape}
    />,
    <StepTwo
      capsulesPerDose={capsulesPerDose}
      updateCapsulesPerDose={updateCapsulesPerDose}
      lengthOfDosage={lengthOfDosage}
      updateLengthOfDosage={updateLengthOfDosage}
      dosageFrequency={dosageFrequency}
      updateDosageFrequency={updateDosageFrequency}
      dosageInstruction={dosageInstruction}
      customInstruction={customInstruction}
      updateDosageInstruction={updateDosageInstruction}
      prevStep={prevStep}
      nextStep={nextStep}
    />,
    <StepThree
      name={name}
      imprint={imprint}
      color={color}
      shape={shape}
      capsulesPerDose={capsulesPerDose}
      lengthOfDosage={lengthOfDosage}
      dosageFrequency={dosageFrequency}
      dosageInstruction={dosageInstruction}
      customInstruction={customInstruction}
      setStep={setStep}
      handleAddPill={handleAddPill}
    />
  ];
  return <Card>{steps[step]}</Card>;
};

const mapStateToProps = state => {
  return {};
};

export default AddPill;
