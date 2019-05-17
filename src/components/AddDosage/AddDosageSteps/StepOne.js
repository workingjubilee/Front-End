import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
// import FormLabel from '@material-ui/core/FormLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
// import FormControl from '@material-ui/core/FormControl';
import DialogActions from '@material-ui/core/DialogActions';
// import InputLabel from '@material-ui/core/InputLabel';

const formatMomentDate = dateData => {
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

  return date;
};

const todaysDate = formatMomentDate(moment(Date.now()).format('L'));

const StepOne = props => {
  const handleIncrementCapsulesPerDose = () => {
    props.updateCapsulesPerDose(props.capsulesPerDose + 1);
  };
  const handleDecrementCapsulesPerDose = () => {
    if (props.capsulesPerDose > 0) {
      props.updateCapsulesPerDose(props.capsulesPerDose - 1);
    }
  };
  const handleLengthOfDosageChange = value => {
    if (props.lengthOfDosage === value) {
      props.updateLengthOfDosage(0);
    } else {
      props.updateLengthOfDosage(value);
    }
  };
  const handleDosageFrequencyChange = value => {
    if (props.dosageFrequency === value) {
      props.updateDosageFrequency('');
    } else {
      props.updateDosageFrequency(value);
    }
  };
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
  // const [reminderData, setReminderData] = useState([]);
  const [dosageDialogueOppenness, setDosageDialogueOppenness] = useState(false);
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
    for (let i = 0; i < props.lengthOfDosage; i++) {}
    setSelectedDays(days);
    setSelectedDates(newDates);
  }, [weekdays, dates, props.lengthOfDosage]);
  useEffect(() => {
    const newReminderData = [];
    if (props.dosageFrequency === 'weekly') {
      for (let i = 0; i < props.lengthOfDosage; i++) {
        newReminderData.push({
          value: selectedDays[i],
          time: '12:00'
        });
      }
    } else if (props.dosageFrequency === 'monthly') {
      for (let i = 0; i < props.lengthOfDosage; i++) {
        newReminderData.push({
          value: selectedDates[i],
          time: '12:00'
        });
      }
    } else if (props.dosageFrequency === 'daily') {
      for (let i = 0; i < props.lengthOfDosage; i++) {
        newReminderData.push({
          value: null,
          time: '12:00'
        });
      }
    }
    console.log(newReminderData);
    console.log('its working');
    props.setReminderData(newReminderData);
  }, [selectedDays, selectedDates, props.dosageFrequency]);
  // useEffect(null, [reminderData]);
  const handleWeekdayChange = weekday => e => {
    if (
      Object.values(weekdays).filter(value => value).length <
      props.lengthOfDosage
    ) {
      setWeekdays({ ...weekdays, [weekday]: e.target.checked });
      // console.log(Object.values(weekdays).filter(value => value));
    } else {
      setWeekdays({ ...weekdays, [weekday]: false });
    }
    console.log(weekdays);
    console.log(selectedDays);
  };
  const handleDateChange = date => e => {
    if (
      Object.values(dates).filter(value => value).length < props.lengthOfDosage
    ) {
      console.log(date);
      setDates({ ...dates, [date]: e.target.checked });
      // console.log(Object.values(weekdays).filter(value => value));
    } else {
      setDates({ ...dates, [date]: false });
    }
    console.log(dates);
    console.log(selectedDates);
  };
  const handleDosageInstructionChange = value => {
    props.customInstruction.updateValue({ target: { value: '' } });
    if (props.dosageInstruction === value) {
      props.updateDosageInstruction('');
    } else {
      props.updateDosageInstruction(value);
    }
  };

  const handleDosageTimeChange = (e, index) => {
    const newData = props.reminderData;
    newData[index].time = e.target.value;
    // = {
    //   value: reminderData[index].value,
    //   time: e.target.value
    // };
    props.setReminderData(newData);
  };

  const handleStartDateChange = e => {
    props.setStartDate(e.target.value);
  };
  const handleConfirmDosage = () => {
    props.nextStep();
  };
  return (
    <form>
      <Typography component='p'>Add Dosage</Typography>
      <CardContent style={{ display: 'flex' }}>
        <Typography component='p'>Dosage Quantity</Typography>
        <Card style={{ display: 'flex' }}>
          <Typography component='p'>Number of Capsules per dose</Typography>

          <Button onClick={handleDecrementCapsulesPerDose}>
            <RemoveIcon />
          </Button>

          <Typography component='p'>{props.capsulesPerDose}</Typography>

          <Button onClick={handleIncrementCapsulesPerDose}>
            <AddIcon />
          </Button>
        </Card>
      </CardContent>
      <CardContent>
        Length of Dosage
        <Button
          style={{
            background: props.lengthOfDosage === 1 ? '#2D90F5' : '',
            color: props.lengthOfDosage === 1 ? 'white' : ''
          }}
          onClick={() => handleLengthOfDosageChange(1)}
        >
          1x - Once
        </Button>
        <Button
          style={{
            background: props.lengthOfDosage === 2 ? '#2D90F5' : '',
            color: props.lengthOfDosage === 2 ? 'white' : ''
          }}
          onClick={() => handleLengthOfDosageChange(2)}
        >
          2x - Twice
        </Button>
        <Button
          style={{
            background: props.lengthOfDosage === 3 ? '#2D90F5' : '',
            color: props.lengthOfDosage === 3 ? 'white' : ''
          }}
          onClick={() => handleLengthOfDosageChange(3)}
        >
          3x - Thrice
        </Button>
      </CardContent>
      <CardContent style={{ display: 'flex', flexWrap: 'wrap' }}>
        Dosage Frequency
        <Button
          style={{
            background: props.dosageFrequency === 'daily' ? '#2D90F5' : '',
            color: props.dosageFrequency === 'daily' ? 'white' : ''
          }}
          onClick={() => handleDosageFrequencyChange('daily')}
        >
          Daily
        </Button>
        <Button
          style={{
            background: props.dosageFrequency === 'weekly' ? '#2D90F5' : '',
            color: props.dosageFrequency === 'weekly' ? 'white' : ''
          }}
          onClick={() => handleDosageFrequencyChange('weekly')}
        >
          Weekly
        </Button>
        <Button
          style={{
            background: props.dosageFrequency === 'monthly' ? '#2D90F5' : '',
            color: props.dosageFrequency === 'monthly' ? 'white' : ''
          }}
          onClick={() => handleDosageFrequencyChange('monthly')}
        >
          Monthly
        </Button>
        {props.dosageFrequency === 'weekly' ? (
          <Select
            multiple
            value={selectedDays}
            // input={<Input />}
            style={{
              height: '36px',
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap'
            }}
            renderValue={selected => (
              <div
              // className={classes.chips}
              >
                {selected.map(value => (
                  <Chip
                    key={value}
                    label={value}
                    // className={classes.chip}
                  />
                ))}
              </div>
            )}
          >
            {Object.entries(weekdays).map(day => (
              <MenuItem key={day[0]}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={day[1]}
                      onChange={handleWeekdayChange(day[0])}
                      value={day[0]}
                      color='primary'
                    />
                  }
                  label={day[0]}
                />
              </MenuItem>
            ))}
          </Select>
        ) : null}
        {props.dosageFrequency === 'monthly' ? (
          <Select
            multiple
            value={selectedDates}
            style={{
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
              height: '36px'
            }}
            renderValue={selected => (
              <div
              // className={classes.chips}
              >
                {selected.map(value => (
                  <Chip
                    key={value}
                    label={value}
                    // className={classes.chip}
                  />
                ))}
              </div>
            )}
          >
            {Object.entries(dates).map(date => (
              <MenuItem key={date[0]}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={date[1]}
                      onChange={handleDateChange(date[0])}
                      value={date[0]}
                      color='primary'
                    />
                  }
                  label={date[0]}
                />
              </MenuItem>
            ))}
          </Select>
        ) : null}
      </CardContent>
      <CardContent>
        How will you take this pill?
        <Button
          style={{
            background:
              props.dosageInstruction === 'Before Meal' ? '#2D90F5' : '',
            color: props.dosageInstruction === 'Before Meal' ? 'white' : ''
          }}
          onClick={() => handleDosageInstructionChange('Before Meal')}
        >
          Before Meal
        </Button>
        <Button
          style={{
            background:
              props.dosageInstruction === 'With Meal' ? '#2D90F5' : '',
            color: props.dosageInstruction === 'With Meal' ? 'white' : ''
          }}
          onClick={() => handleDosageInstructionChange('With Meal')}
        >
          With Meal
        </Button>
        <Button
          style={{
            background:
              props.dosageInstruction === 'After Meal' ? '#2D90F5' : '',
            color: props.dosageInstruction === 'After Meal' ? 'white' : ''
          }}
          onClick={() => handleDosageInstructionChange('After Meal')}
        >
          After Meal
        </Button>
        <Button
          style={{
            background:
              props.dosageInstruction === 'Without Meal' ? '#2D90F5' : '',
            color: props.dosageInstruction === 'Without Meal' ? 'white' : ''
          }}
          onClick={() => handleDosageInstructionChange('Without Meal')}
        >
          Without Meal
        </Button>
        <TextField
          label='custom instruction'
          value={props.customInstruction.value}
          onClick={() => handleDosageInstructionChange('')}
          onChange={props.customInstruction.updateValue}
          margin='normal'
        />
      </CardContent>

      <CardContent>
        <Button onClick={() => setDosageDialogueOppenness(true)}>
          Open to Select Dosage Time of Day
        </Button>
        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          open={dosageDialogueOppenness}
          onClose={() => setDosageDialogueOppenness(false)}
        >
          <DialogTitle>Fill the form</DialogTitle>
          <DialogContent>
            {props.reminderData.length
              ? props.reminderData.map(data => (
                  <div key={props.reminderData.indexOf(data)}>
                    {data.value}
                    <TextField
                      id='time'
                      label='Alarm clock'
                      type='time'
                      defaultValue={
                        props.reminderData[props.reminderData.indexOf(data)]
                          .time
                      }
                      onChange={e =>
                        handleDosageTimeChange(
                          e,
                          props.reminderData.indexOf(data)
                        )
                      }
                      // e => {
                      // const newData = reminderData;
                      // newData[reminderData.indexOf(data)] = {
                      //   value: reminderData[reminderData.indexOf(data)].value,
                      //   time: e.target.value
                      // };
                      // setReminderData(newData);
                      // console.log(reminderData);
                      // }
                      // }
                      InputLabelProps={{
                        shrink: true
                      }}
                      inputProps={{
                        step: 300 // 5 min
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

      <CardContent>
        Start Date
        <Button
          style={{
            background: props.startDate === todaysDate ? '#2D90F5' : '',
            color: props.startDate === todaysDate ? 'white' : ''
          }}
          onClick={() => props.setStartDate(todaysDate)}
        >
          today
        </Button>
        <Button
          style={{
            background:
              props.startDate ===
              formatMomentDate(
                moment(todaysDate)
                  .add(1, 'days')
                  .format('L')
              )
                ? '#2D90F5'
                : '',
            color:
              props.startDate ===
              formatMomentDate(
                moment(todaysDate)
                  .add(1, 'days')
                  .format('L')
              )
                ? 'white'
                : ''
          }}
          onClick={() =>
            props.setStartDate(
              formatMomentDate(
                moment(todaysDate)
                  .add(1, 'days')
                  .format('L')
              )
            )
          }
        >
          tomorrow
        </Button>
        <TextField
          id='date'
          label='Birthday'
          type='date'
          value={props.startDate}
          onChange={handleStartDateChange}
          // className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
        />
      </CardContent>
      <CardContent style={{ display: 'flex' }}>
        <Typography component='p'>Dosage Duration</Typography>
        <Card style={{ display: 'flex' }}>
          <Typography component='p'>Number of days</Typography>

          <Button
            onClick={
              props.dosageDuration > 0
                ? () => props.setDosageDuration(props.dosageDuration - 1)
                : null
            }
          >
            <RemoveIcon />
          </Button>

          <Typography component='p'>{props.dosageDuration}</Typography>

          <Button
            onClick={() => props.setDosageDuration(props.dosageDuration + 1)}
          >
            <AddIcon />
          </Button>
        </Card>
      </CardContent>
      <CardContent>Text Reminder</CardContent>
      {/* <Button onClick={handlePrevStep}>Back</Button> */}
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
