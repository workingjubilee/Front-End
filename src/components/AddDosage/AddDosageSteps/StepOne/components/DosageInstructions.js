import React from 'react';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';

const DosageInstructions = ({
  dosageInstruction,
  customInstruction,
  updateDosageInstruction
}) => {
  const handleDosageInstructionChange = value => {
    customInstruction.updateValue({ target: { value: '' } });
    if (dosageInstruction === value) {
      updateDosageInstruction('');
    } else {
      updateDosageInstruction(value);
    }
  };

  return (
    <CardContent>
      How will you take this pill?
      <Button
        style={{
          background: dosageInstruction === 'Before Meal' ? '#2D90F5' : '',
          color: dosageInstruction === 'Before Meal' ? 'white' : ''
        }}
        onClick={() => handleDosageInstructionChange('Before Meal')}
      >
        Before Meal
      </Button>
      <Button
        style={{
          background: dosageInstruction === 'With Meal' ? '#2D90F5' : '',
          color: dosageInstruction === 'With Meal' ? 'white' : ''
        }}
        onClick={() => handleDosageInstructionChange('With Meal')}
      >
        With Meal
      </Button>
      <Button
        style={{
          background: dosageInstruction === 'After Meal' ? '#2D90F5' : '',
          color: dosageInstruction === 'After Meal' ? 'white' : ''
        }}
        onClick={() => handleDosageInstructionChange('After Meal')}
      >
        After Meal
      </Button>
      <Button
        style={{
          background: dosageInstruction === 'Without Meal' ? '#2D90F5' : '',
          color: dosageInstruction === 'Without Meal' ? 'white' : ''
        }}
        onClick={() => handleDosageInstructionChange('Without Meal')}
      >
        Without Meal
      </Button>
      <TextField
        label='custom instruction'
        value={customInstruction.value}
        onClick={() => handleDosageInstructionChange('')}
        onChange={customInstruction.updateValue}
        margin='normal'
      />
    </CardContent>
  );
};

export default DosageInstructions;
