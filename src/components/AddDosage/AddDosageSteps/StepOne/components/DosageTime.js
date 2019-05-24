import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const DosageTime = ({
  reminderData,
  setReminderData,
  lengthOfDosage,
  dosageFrequency,
  selectedDays,
  selectedDates
}) => {
  const [dosageDialogueOppenness, setDosageDialogueOppenness] = useState(false);
  const handleOpenDialogue = () => {
    if (lengthOfDosage) {
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
        } else {
          setDosageDialogueOppenness(true);
        }
      } else {
        alert('please select a dosage frequency');
      }
    } else {
      alert('please select a length of dosage');
    }
  };
  const handleDosageTimeChange = (e, index) => {
    console.log(e.target.value);
    const newData = reminderData;
    newData[index].time = e.target.value;
    setReminderData(newData);
  };
  const ordinalSuffixer = int => {
    const j = int % 10,
      k = int % 100;
    if (j === 1 && k !== 11) {
      return int + 'st';
    }
    if (j === 2 && k !== 12) {
      return int + 'nd';
    }
    if (j === 3 && k !== 13) {
      return int + 'rd';
    }
    return int + 'th';
  };
  return (
    <CardContent style={{ display: 'flex' }}>
      <Typography style={{ width: '150px', alignSelf: 'center' }} component='p'>
        Dosage Time(s) <br /> of day
      </Typography>

      <Button
        onClick={handleOpenDialogue}
        style={{
          boxShadow: '0px 0px 10px 5px #f3f3f3',
          margin: '0 10px',
          textTransform: 'none'
        }}
      >
        Open to Select Dosage Time of Day
      </Button>
      <Dialog
        disableEscapeKeyDown
        open={dosageDialogueOppenness}
        onClose={() => setDosageDialogueOppenness(false)}
      >
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          {reminderData.length
            ? reminderData.map(data => (
                <div key={reminderData.indexOf(data)}>
                  {reminderData.length > 1 ? (
                    <span>
                      {ordinalSuffixer(reminderData.indexOf(data) + 1)} reminder
                      will occur{' '}
                    </span>
                  ) : null}
                  every{' '}
                  {dosageFrequency === 'daily' ? (
                    <span>day</span>
                  ) : dosageFrequency === 'weekly' ? (
                    <span>{data.value}</span>
                  ) : dosageFrequency === 'monthly' ? (
                    <span>{data.value} of the month</span>
                  ) : null}{' '}
                  at
                  <TextField
                    id='time'
                    type='time'
                    defaultValue={reminderData[reminderData.indexOf(data)].time}
                    onChange={e =>
                      handleDosageTimeChange(e, reminderData.indexOf(data))
                    }
                    InputLabelProps={{
                      shrink: true
                    }}
                    inputProps={{
                      step: 100
                    }}
                  />
                </div>
              ))
            : null}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setDosageDialogueOppenness(false)}
            color='primary'
          >
            Cancel
          </Button>
          <Button
            onClick={() => setDosageDialogueOppenness(false)}
            color='primary'
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </CardContent>
  );
};

export default DosageTime;
