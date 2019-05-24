import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';

const CapsulesPerDose = ({ updateCapsulesPerDose, capsulesPerDose }) => {
  const handleIncrementCapsulesPerDose = () => {
    updateCapsulesPerDose(capsulesPerDose + 1);
  };
  const handleDecrementCapsulesPerDose = () => {
    if (capsulesPerDose > 0) {
      updateCapsulesPerDose(capsulesPerDose - 1);
    }
  };

  return (
    <CardContent style={{ display: 'flex' }}>
      <Typography style={{ width: '150px', alignSelf: 'center' }} component='p'>
        Dosage Quantity
      </Typography>
      <Card
        style={{
          display: 'flex',
          height: '40px',
          paddingLeft: '20px',
          boxShadow: '0px 0px 10px 5px #f3f3f3',
          margin: '0 10px',
          textTransform: 'none'
        }}
      >
        <Typography style={{ lineHeight: '40px' }} component='p'>
          Number of Capsules per dose
        </Typography>

        <Button onClick={handleDecrementCapsulesPerDose}>
          <RemoveIcon style={{ color: '#2D90F5' }} />
        </Button>

        <Typography style={{ lineHeight: '40px' }} component='p'>
          {capsulesPerDose}
        </Typography>

        <Button onClick={handleIncrementCapsulesPerDose}>
          <AddIcon style={{ color: '#2D90F5' }} />
        </Button>
      </Card>
    </CardContent>
  );
};

export default CapsulesPerDose;
