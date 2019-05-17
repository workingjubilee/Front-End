import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const LengthOfDosage = ({ lengthOfDosage, updateLengthOfDosage }) => {
  const handleLengthOfDosageChange = value => {
    if (lengthOfDosage === value) {
      updateLengthOfDosage(0);
    } else {
      updateLengthOfDosage(value);
    }
  };

  return (
    <CardContent>
      Length of Dosage
      <Button
        style={{
          background: lengthOfDosage === 1 ? '#2D90F5' : '',
          color: lengthOfDosage === 1 ? 'white' : ''
        }}
        onClick={() => handleLengthOfDosageChange(1)}
      >
        1x - Once
      </Button>
      <Button
        style={{
          background: lengthOfDosage === 2 ? '#2D90F5' : '',
          color: lengthOfDosage === 2 ? 'white' : ''
        }}
        onClick={() => handleLengthOfDosageChange(2)}
      >
        2x - Twice
      </Button>
      <Button
        style={{
          background: lengthOfDosage === 3 ? '#2D90F5' : '',
          color: lengthOfDosage === 3 ? 'white' : ''
        }}
        onClick={() => handleLengthOfDosageChange(3)}
      >
        3x - Thrice
      </Button>
    </CardContent>
  );
};

export default LengthOfDosage;
