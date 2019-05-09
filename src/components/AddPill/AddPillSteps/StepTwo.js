import React from 'react';
import Button from '@material-ui/core/Button';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const StepTwo = props => {
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
      props.updateDosageFrequency(0);
    } else {
      props.updateDosageFrequency(value);
    }
  };
  const handleDosageInstructionChange = value => {
    if (props.dosageInstruction === value) {
      props.updateDosageInstruction(0);
    } else {
      props.updateDosageInstruction(value);
    }
  };

  return (
    <form>
      <Typography component='p' variant='title' style={{ display: 'flex' }}>
        Dosage Quantity
        <Card style={{ display: 'flex' }}>
          <Typography component='p' variant='headline'>
            number of capsules per dose
          </Typography>

          <Button onClick={handleDecrementCapsulesPerDose}>
            <RemoveIcon />
          </Button>

          <Typography component='p' variant='display1'>
            {props.capsulesPerDose}
          </Typography>

          <Button onClick={handleIncrementCapsulesPerDose}>
            <AddIcon />
          </Button>
        </Card>
      </Typography>

      <Typography>
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
      </Typography>

      <Typography>
        Dosage Frequency
        <Button
          style={{
            background: props.dosageFrequency === 1 ? '#2D90F5' : '',
            color: props.dosageFrequency === 1 ? 'white' : ''
          }}
          onClick={() => handleDosageFrequencyChange(1)}
        >
          Daily
        </Button>
        <Button
          style={{
            background: props.dosageFrequency === 2 ? '#2D90F5' : '',
            color: props.dosageFrequency === 2 ? 'white' : ''
          }}
          onClick={() => handleDosageFrequencyChange(2)}
        >
          Weekly
        </Button>
        <Button
          style={{
            background: props.dosageFrequency === 3 ? '#2D90F5' : '',
            color: props.dosageFrequency === 3 ? 'white' : ''
          }}
          onClick={() => handleDosageFrequencyChange(3)}
        >
          Monthly
        </Button>
      </Typography>

      <Typography>
        How will you take this pill?
        <Button
          style={{
            background: props.dosageInstruction === 1 ? '#2D90F5' : '',
            color: props.dosageInstruction === 1 ? 'white' : ''
          }}
          onClick={() => handleDosageInstructionChange(1)}
        >
          Before Meal
        </Button>
        <Button
          style={{
            background: props.dosageInstruction === 2 ? '#2D90F5' : '',
            color: props.dosageInstruction === 2 ? 'white' : ''
          }}
          onClick={() => handleDosageInstructionChange(2)}
        >
          With Meal
        </Button>
        <Button
          style={{
            background: props.dosageInstruction === 3 ? '#2D90F5' : '',
            color: props.dosageInstruction === 3 ? 'white' : ''
          }}
          onClick={() => handleDosageInstructionChange(3)}
        >
          After Meal
        </Button>
        <Button
          style={{
            background: props.dosageInstruction === 4 ? '#2D90F5' : '',
            color: props.dosageInstruction === 4 ? 'white' : ''
          }}
          onClick={() => handleDosageInstructionChange(4)}
        >
          Without Meal
        </Button>
        <TextField
          label='custom instruction'
          value={props.customInstruction.value}
          onChange={props.customInstruction.updateValue}
          margin='normal'
        />
      </Typography>

      <Typography>Dosage Time of Day</Typography>

      <Typography>Dosage Duration</Typography>

      <Typography>Start Date</Typography>

      <Typography>Text Reminder</Typography>

      <Button>Confirm Dosage</Button>

      <Button>Skip</Button>
    </form>
  );
};

export default StepTwo;
