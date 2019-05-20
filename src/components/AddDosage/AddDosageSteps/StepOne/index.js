import React from 'react';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
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
  setDosageDuration
}) => {
  const handleConfirmDosage = () => {
    if (!capsulesPerDose) {
      alert('please input the amount of capsules per dose');
    } else if (lengthOfDosage) {
      if (dosageFrequency) {
        if (dosageFrequency === 'weekly' && selectedDays < lengthOfDosage) {
          alert('please select a day of the week for each dose');
        } else if (
          dosageFrequency === 'monthly' &&
          selectedDates < lengthOfDosage
        ) {
          alert('please select a day of the month for each dose');
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
    <div style={{ marginBottom: '2.5rem' }}>
      <Typography style={{ fontSize: '2.5rem' }} component='p'>
        Add Dosage
      </Typography>
      <Card style={{ width: '60%' }}>
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
        <CardContent>Text Reminder</CardContent>
        <CardActions style={{ justifyContent: 'center' }}>
          <Button style={{ background: 'black', color: 'white' }}>
            Cancel
          </Button>
          <Button
            style={{ background: '#40AB48', color: 'white' }}
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
