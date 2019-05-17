import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const DosageTime = ({ reminderData, setReminderData }) => {
  const [dosageDialogueOppenness, setDosageDialogueOppenness] = useState(false);
  const handleDosageTimeChange = (e, index) => {
    const newData = reminderData;
    newData[index].time = e.target.value;
    setReminderData(newData);
  };

  return (
    <CardContent style={{ display: 'flex' }}>
      <Typography style={{ width: '20%' }} component='p'>
        Dosage Time(s) <br/> of day
      </Typography>

      <Button onClick={() => setDosageDialogueOppenness(true)}>
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
                  {data.value}
                  <TextField
                    id='time'
                    label='Alarm clock'
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
