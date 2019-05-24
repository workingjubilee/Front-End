import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const LengthOfDosage = ({ lengthOfDosage, updateLengthOfDosage }) => {
  const handleLengthOfDosageChange = value => {
    if (lengthOfDosage === value) {
      updateLengthOfDosage(0);
    } else {
      updateLengthOfDosage(value);
    }
  };

  return (
    <CardContent style={{ display: 'flex' }}>
      <Typography style={{ width: '150px', alignSelf: 'center' }} component='p'>
        Length of Dosage
      </Typography>
      <Button
        style={{
          background: lengthOfDosage === 1 ? '#2D90F5' : '',
          color: lengthOfDosage === 1 ? 'white' : '',
          boxShadow: '0px 0px 10px 5px #f3f3f3',
          margin: '0 10px',
          textTransform: 'none'
        }}
        onClick={() => handleLengthOfDosageChange(1)}
      >
        1x - Once
      </Button>
      <Button
        style={{
          background: lengthOfDosage === 2 ? '#2D90F5' : '',
          color: lengthOfDosage === 2 ? 'white' : '',
          boxShadow: '0px 0px 10px 5px #f3f3f3',
          margin: '0 10px',
          textTransform: 'none'
        }}
        onClick={() => handleLengthOfDosageChange(2)}
      >
        2x - Twice
      </Button>
      <Button
        style={{
          background: lengthOfDosage === 3 ? '#2D90F5' : '',
          color: lengthOfDosage === 3 ? 'white' : '',
          boxShadow: '0px 0px 10px 5px #f3f3f3',
          margin: '0 10px',
          textTransform: 'none'
        }}
        onClick={() => handleLengthOfDosageChange(3)}
      >
        3x - Thrice
      </Button>
    </CardContent>
  );
};

export default LengthOfDosage;
