import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useInput } from '../../utilities/useInput';
import Card from '@material-ui/core/Card';
import StepOne from './AddDosageSteps/StepOne';
import StepTwo from './AddDosageSteps/StepTwo';
import { makeReminders } from './helper';
import { addRems, editMed } from '../../actions';
import moment from 'moment';

// '/adddosage/:id'
let dateData = moment(Date.now()).format('L');
dateData = dateData.split('');
let date =
  dateData[6] +
  dateData[7] +
  dateData[8] +
  dateData[9] +
  '-' +
  dateData[0] +
  dateData[1] +
  '-' +
  dateData[3] +
  dateData[4];

const AddPill = ({ med, addRems, editMed, history }) => {
  const [capsulesPerDose, setCapsulesPerDose] = useState(0);
  const [lengthOfDosage, setLenghOfDosage] = useState(0);
  const [dosageFrequency, setDosageFrequency] = useState('');
  const [dosageInstruction, setDosageInstruction] = useState('');
  const customInstruction = useInput();
  const [startDate, setStartDate] = useState(date);
  const [dosageDuration, setDosageDuration] = useState(0);
  const [endDate, setEndDate] = useState(date);
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
    setEndDate(
      moment(startDate || date)
        .add(dosageDuration, 'days')
        .format('L')
    );
    console.log(endDate);
  }, [dosageDuration, endDate, startDate]);

  const nextStep = () => {
    setStep(step + 1);
  };
  // const prevStep = () => {
  //   setStep(step - 1);
  // };
  const handleAddPill = async () => {
    if (!dosageFrequency) {
      return null;
    }

    const userID = localStorage.getItem('userID');
    const reminderTimes = makeReminders(
      {
        frequency: dosageFrequency,
        startDate: startDate,
        endDate: endDate,
        doses: 3,
        date: [7, 14, 21],
        weekday: ['Monday,', 'Wednesday,', 'Friday,'],
        time: ['23:15', '12:30', '00:00']
      }
      // customInstruction.value || dosageInstruction || null
    );
    console.log(reminderTimes);
    console.log(reminderTimes.map(time => new Date(time)));
    const reminders = reminderTimes.map(time => {
      return {
        user_id: userID,
        med_id: med.id,
        rem_type: 'admin',
        rem_notes: null,
        rem_date: time
      };
    });

    const medData = {
      ...med,
      med_admin_start_date: startDate,
      med_admin_end_date: endDate,
      med_directions: JSON.stringify(
        customInstruction.value || dosageInstruction || null
      )
    };
    await editMed(medData);
    await addRems(reminders);
    console.log(medData);
    console.log(reminders);
    history.push('/dashboard');
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
      startDate={startDate}
      setStartDate={setStartDate}
      dosageDuration={dosageDuration}
      setDosageDuration={setDosageDuration}
      nextStep={nextStep}
    />,
    <StepTwo
      name={med.med_name}
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

const mapStateToProps = state => {
  return {
    med: state.med
  };
};

export default connect(
  mapStateToProps,
  { addRems, editMed }
)(AddPill);
