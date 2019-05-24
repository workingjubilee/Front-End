import React from 'react';
import Button from '@material-ui/core/Button';
// import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import CapsulesPerDose from './components/CapsulesPerDose';
import LengthOfDosage from './components/LengthOfDosage';
import DosageFrequency from './components/DosageFrequency';
import DosageInstructions from './components/DosageInstructions';
import DosageTime from './components/DosageTime';
import StartDate from './components/StartDate';
import DosageDuration from './components/DosageDuration';
import PillCard from '../PillCard';

const StepOne = ({
  capsulesPerDose,
  updateCapsulesPerDose,
  lengthOfDosage,
  updateLengthOfDosage,
  dosageFrequency,
  updateDosageFrequency,
  weekdays,
  selectedDays,
  setWeekdays,
  dates,
  selectedDates,
  setDates,
  reminderData,
  setReminderData,
  customInstruction,
  dosageInstruction,
  updateDosageInstruction,
  setStartDate,
  nextStep,
  startDate,
  dosageDuration,
  setDosageDuration,
  med,
  medImage
}) => {
  const handleConfirmDosage = () => {
    if (!capsulesPerDose) {
      alert('please input the amount of capsules per dose');
    } else if (lengthOfDosage) {
      if (dosageFrequency) {
        if (
          dosageFrequency === 'weekly' &&
          selectedDays.length < lengthOfDosage
        ) {
          alert('please select a day of the week for each dose');
        } else if (
          dosageFrequency === 'monthly' &&
          selectedDates.length < lengthOfDosage
        ) {
          alert('please select a day of the month for each dose');
        } else if (!dosageDuration) {
          alert(
            'please define how long the dosage will last with dosage duration'
          );
        } else {
          nextStep();
        }
      } else {
        alert('please select a dosage frequency');
      }
    } else {
      alert('please select a length of dosage');
    }
  };
  return (
    <div style={{ margin: '0 0 25px 50px' }}>
      <Typography
        style={{ fontSize: '25px', margin: '30px 0', fontWeight: '900' }}
        component='p'
      >
        Add Dosage
      </Typography>
      <Card style={{ width: '60%' }}>
        <PillCard med={med} medImage={medImage} />
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
          lengthOfDosage={lengthOfDosage}
          dosageFrequency={dosageFrequency}
          selectedDays={selectedDays}
          selectedDates={selectedDates}
        />
        <StartDate startDate={startDate} setStartDate={setStartDate} />
        <DosageDuration
          dosageDuration={dosageDuration}
          setDosageDuration={setDosageDuration}
        />
        {/* <CardContent>Text Reminder</CardContent> */}
        <CardActions
          style={{
            width: '40%',
            justifyContent: 'space-between',
            margin: '0 auto'
          }}
        >
          <Button
            style={{
              background: 'black',
              color: 'white',
              boxShadow: '0px 0px 10px 5px #f3f3f3',
              margin: '0 10px 10px 10px',
              textTransform: 'none'
            }}
          >
            Cancel
          </Button>
          <Button
            style={{
              background: '#40AB48',
              color: 'white',
              boxShadow: '0px 0px 10px 5px #f3f3f3',
              margin: '0 10px 10px 10px',
              textTransform: 'none'
            }}
            onClick={handleConfirmDosage}
          >
            Confirm Dosage
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default StepOne;
