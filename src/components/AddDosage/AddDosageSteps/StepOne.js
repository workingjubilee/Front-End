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
    datesObj[`${i}`] = false;
  }
  const [dates, setDates] = useState(datesObj);
  console.log(dates);
  const [selectedDays, setSelectedDays] = useState([]);
  const {
    sunday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday
  } = weekdays;
  useEffect(() => {
    const days = [];
    for (let day in weekdays) {
      if (weekdays[day]) {
        days.push(day);
        setSelectedDays(days);
      }
    }
  }, [weekdays]);
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
    console.log(selectedDays);
  };
  const handleDosageInstructionChange = value => {
    props.customInstruction.updateValue({ target: { value: '' } });
    if (props.dosageInstruction === value) {
      props.updateDosageInstruction('');
    } else {
      props.updateDosageInstruction(value);
    }
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
            style={{
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap'
            }}
          >
            <MenuItem>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={sunday}
                    onChange={handleWeekdayChange('sunday')}
                    value='sunday'
                    color='primary'
                  />
                }
                label='sunday'
              />
            </MenuItem>
            <MenuItem>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={monday}
                    onChange={handleWeekdayChange('monday')}
                    value='monday'
                    color='primary'
                  />
                }
                label='monday'
              />
            </MenuItem>
            <MenuItem>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={tuesday}
                    onChange={handleWeekdayChange('tuesday')}
                    value='tuesday'
                    color='primary'
                  />
                }
                label='tuesday'
              />
            </MenuItem>
            <MenuItem>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={wednesday}
                    onChange={handleWeekdayChange('wednesday')}
                    value='wednesday'
                    color='primary'
                  />
                }
                label='wednesday'
              />
            </MenuItem>
            <MenuItem>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={thursday}
                    onChange={handleWeekdayChange('thursday')}
                    value='thursday'
                    color='primary'
                  />
                }
                label='thursday'
              />
            </MenuItem>
            <MenuItem>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={friday}
                    onChange={handleWeekdayChange('friday')}
                    value='friday'
                    color='primary'
                  />
                }
                label='friday'
              />
            </MenuItem>
            <MenuItem>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={saturday}
                    onChange={handleWeekdayChange('saturday')}
                    value='saturday'
                    color='primary'
                  />
                }
                label='saturday'
              />
            </MenuItem>
          </Select>
        ) : null}
        {props.dosageFrequency === 'monthly' ? (
          <div>
            <p>choose a date</p>
          </div>
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
      <CardContent>Dosage Time of Day</CardContent>
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
