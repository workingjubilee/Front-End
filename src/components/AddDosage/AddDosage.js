import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useInput } from '../../utilities/useInput';
import Card from '@material-ui/core/Card';
import StepOne from './AddDosageSteps/StepOne';
import StepTwo from './AddDosageSteps/StepTwo';
import { makeReminders } from './helper';
import { addRems, editMed } from '../../actions';
import moment from 'moment';

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
  const [reminderData, setReminderData] = useState([]);
  const [startDate, setStartDate] = useState(date);
  const [dosageDuration, setDosageDuration] = useState(0);
  const [endDate, setEndDate] = useState(date);
  const [weekdays, setWeekdays] = useState({
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false
  });
  const datesObj = {};
  for (let i = 1; i < 32; i++) {
    let date = i.toString();
    date = date.split('');
    if (date[date.length - 2] === '1') {
      date.push('th');
    } else if (date[date.length - 1] === '1') {
      date.push('st');
    } else if (date[date.length - 1] === '2') {
      date.push('nd');
    } else if (date[date.length - 1] === '3') {
      date.push('rd');
    } else {
      date.push('th');
    }
    date = date.join('');
    datesObj[`${date}`] = false;
  }
  const [dates, setDates] = useState(datesObj);
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedDates, setSelectedDates] = useState([]);
  useEffect(() => {
    const days = [];
    const newDates = [];
    for (let day in weekdays) {
      if (weekdays[day]) {
        days.push(day);
      }
    }
    for (let date in dates) {
      if (dates[date]) {
        newDates.push(date);
      }
    }
    for (let i = 0; i < lengthOfDosage; i++) {}
    setSelectedDays(days);
    setSelectedDates(newDates);
  }, [weekdays, dates, lengthOfDosage]);
  useEffect(() => {
    const newReminderData = [];
    if (dosageFrequency === 'weekly') {
      for (let i = 0; i < lengthOfDosage; i++) {
        newReminderData.push({
          value: selectedDays[i],
          time: '12:00'
        });
      }
    } else if (dosageFrequency === 'monthly') {
      for (let i = 0; i < lengthOfDosage; i++) {
        newReminderData.push({
          value: selectedDates[i],
          time: '12:00'
        });
      }
    } else if (dosageFrequency === 'daily') {
      for (let i = 0; i < lengthOfDosage; i++) {
        newReminderData.push({
          value: null,
          time: '12:00'
        });
      }
    }
    console.log(newReminderData);
    console.log('its working');
    setReminderData(newReminderData);
  }, [
    selectedDays,
    selectedDates,
    dosageFrequency,
    lengthOfDosage,
    setReminderData
  ]);

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
    // if (!dosageFrequency) {
    //   return null;
    // }

    const userID = localStorage.getItem('userID');
    const reminderTimes = makeReminders(
      // console.log(
      {
        frequency: dosageFrequency,
        startDate: startDate,
        endDate: endDate,
        doses: lengthOfDosage,
        data: reminderData
      }
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
      weekdays={weekdays}
      selectedDays={selectedDays}
      setWeekdays={setWeekdays}
      dates={dates}
      selectedDates={selectedDates}
      setDates={setDates}
      reminderData={reminderData}
      setReminderData={setReminderData}
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
    med: state.medsReducer.med
  };
};

export default connect(
  mapStateToProps,
  { addRems, editMed }
)(AddPill);
