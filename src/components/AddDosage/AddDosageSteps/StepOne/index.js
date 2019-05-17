import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CapsulesPerDose from './components/CapsulesPerDose';
import LengthOfDosage from './components/LengthOfDosage';
import DosageFrequency from './components/DosageFrequency';
import DosageInstructions from './components/DosageInstructions';
import DosageTime from './components/DosageTime';
import StartDate from './components/StartDate';
import DosageDuration from './components/DosageDuration';

const StepOne = ({
  capsulesPerDose,
  updateCapsulesPerDose,
  lengthOfDosage,
  updateLengthOfDosage,
  dosageFrequency,
  updateDosageFrequency,
  reminderData,
  setReminderData,
  customInstruction,
  dosageInstruction,
  updateDosageInstruction,
  setStartDate,
  nextStep,
  startDate,
  dosageDuration,
  setDosageDuration
}) => {
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
  const handleConfirmDosage = () => {
    nextStep();
  };
  return (
    <form>
      <Typography component='p'>Add Dosage</Typography>
      <CapsulesPerDose
        updateCapsulesPerDose={updateCapsulesPerDose}
        capsulesPerDose={capsulesPerDose}
      />
      <LengthOfDosage
        lengthOfDosage={lengthOfDosage}
        updateLengthOfDosage={updateLengthOfDosage}
      />
      <DosageFrequency
        lengthOfDosage={lengthOfDosage}
        dosageFrequency={dosageFrequency}
        updateDosageFrequency={updateDosageFrequency}
        selectedDays={selectedDays}
        weekdays={weekdays}
        setWeekdays={setWeekdays}
        selectedDates={selectedDates}
        dates={dates}
        setDates={setDates}
      />
      <DosageInstructions
        dosageInstruction={dosageInstruction}
        customInstruction={customInstruction}
        updateDosageInstruction={updateDosageInstruction}
      />
      <DosageTime
        reminderData={reminderData}
        setReminderData={setReminderData}
      />
      <StartDate startDate={startDate} setStartDate={setStartDate} />
      <DosageDuration
        dosageDuration={dosageDuration}
        setDosageDuration={setDosageDuration}
      />
      <CardContent>Text Reminder</CardContent>
      <Button style={{ background: 'black', color: 'white' }}>Cancel</Button>
      <Button
        style={{ background: '#40AB48', color: 'white' }}
        onClick={handleConfirmDosage}
      >
        Confirm Dosage
      </Button>
    </form>
  );
};

export default StepOne;
