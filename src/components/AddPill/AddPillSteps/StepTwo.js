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
      props.updateDosageFrequency('');
    } else {
      props.updateDosageFrequency(value);
    }
  };
  const handleDosageInstructionChange = value => {
    if (props.dosageInstruction === value) {
      props.updateDosageInstruction('');
    } else {
      props.updateDosageInstruction(value);
    }
  };
  const handlePrevStep = () => {
    props.prevStep();
  };
  const handleConfirmDosage = () => {
    props.nextStep();
  };
  const handleSkip = () => {
    props.nextStep();
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
      </Typography>

      <Typography>
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
      </Typography>

      <Typography>Dosage Time of Day</Typography>

      <Typography>End Date</Typography>

      <Typography>Start Date</Typography>

      <Typography>Text Reminder</Typography>

      <Button onClick={handlePrevStep}>Back</Button>

      <Button onClick={handleConfirmDosage}>Confirm Dosage</Button>

      <Button onClick={handleSkip}>Skip</Button>
    </form>
  );
};

export default StepTwo;
