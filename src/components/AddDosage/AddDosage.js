import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useInput } from '../../utilities/useInput';
import Card from '@material-ui/core/Card';
import StepOne from './AddDosageSteps/StepOne';
import StepTwo from './AddDosageSteps/StepTwo';
import { makeReminders } from './helper';
import { addRems } from '../../actions';

// '/adddosage/:id'

const AddPill = props => {
  const [capsulesPerDose, setCapsulesPerDose] = useState(0);
  const [lengthOfDosage, setLenghOfDosage] = useState(0);
  const [dosageFrequency, setDosageFrequency] = useState('');
  const [dosageInstruction, setDosageInstruction] = useState('');
  const customInstruction = useInput();
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
  useEffect(() => {
    console.log('name: ', props.name);
    console.log(step);
  }, [step, props.name]);

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
      'Wednesday,',
      '08:00:00',
      customInstruction.value || dosageInstruction || null
    );
    const reminders = reminderTimes.map(time => {
      return {
        user_id: userID,
        med_id: 1,
        rem_type: 'admin',
        rem_notes: null,
        rem_date: time
      };
    });

    // const medData = {
    //   // data collected from here that will be used to update the med table row
    // };
    props.addRems(reminders);
    console.log(reminders);
    // send user to dashboard
  };
  const steps = [
    <StepOne
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
    <StepTwo
      name={props.name}
      // imprint={props.imprint}
      // color={props.color}
      // shape={props.shape}
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

// const mapStateToProps = state => {
//   return {};
// };

export default connect(
  null,
  { addRems }
)(AddPill);
