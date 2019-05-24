import React from 'react';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

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
    <CardContent style={{ display: 'flex' }}>
      <Typography
        style={{ width: '150px !imporant', alignSelf: 'center' }}
        component='p'
      >
        How will you take this pill?
      </Typography>
      <CardContent style={{ flexWrap: 'wrap', paddingBottom: '0' }}>
        <Button
          style={{
            background: dosageInstruction === 'Before Meal' ? '#2D90F5' : '',
            color: dosageInstruction === 'Before Meal' ? 'white' : '',
            boxShadow: '0px 0px 10px 5px #f3f3f3',
            margin: '0 10px',
            textTransform: 'none'
          }}
          onClick={() => handleDosageInstructionChange('Before Meal')}
        >
          Before Meal
        </Button>
        <Button
          style={{
            background: dosageInstruction === 'With Meal' ? '#2D90F5' : '',
            color: dosageInstruction === 'With Meal' ? 'white' : '',
            boxShadow: '0px 0px 10px 5px #f3f3f3',
            margin: '0 10px',
            textTransform: 'none'
          }}
          onClick={() => handleDosageInstructionChange('With Meal')}
        >
          With Meal
        </Button>
        <Button
          style={{
            background: dosageInstruction === 'After Meal' ? '#2D90F5' : '',
            color: dosageInstruction === 'After Meal' ? 'white' : '',
            boxShadow: '0px 0px 10px 5px #f3f3f3',
            margin: '0 10px',
            textTransform: 'none'
          }}
          onClick={() => handleDosageInstructionChange('After Meal')}
        >
          After Meal
        </Button>
        <Button
          style={{
            background: dosageInstruction === 'Without Meal' ? '#2D90F5' : '',
            color: dosageInstruction === 'Without Meal' ? 'white' : '',
            boxShadow: '0px 0px 10px 5px #f3f3f3',
            margin: '0 10px',
            textTransform: 'none'
          }}
          onClick={() => handleDosageInstructionChange('Without Meal')}
        >
          Without Meal
        </Button>
        <TextField
          style={{
            boxShadow: '0px 0px 10px 5px #f3f3f3',
            margin: '20px 10px'
          }}
          label='custom instruction'
          value={customInstruction.value}
          onClick={() => handleDosageInstructionChange('')}
          onChange={customInstruction.updateValue}
          margin='normal'
          variant='outlined'
        />
      </CardContent>
    </CardContent>
  );
};

export default DosageInstructions;
