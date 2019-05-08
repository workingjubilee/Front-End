import React from 'react';
import Fab from '@material-ui/core/Fab';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const StepTwo = props => {
  const incrementCapsulesPerDose = () => {
    props.updateCapsulesPerDose(props.capsulesPerDose + 1);
  };
  const decrementCapsulesPerDose = () => {
    props.updateCapsulesPerDose(props.capsulesPerDose - 1);
  };
  return (
    <form>
      <Card>
        <Fab onClick={decrementCapsulesPerDose}>
          <RemoveIcon />
        </Fab>

        <Typography component='h2' variant='display4' gutterBottom>
          {props.capsulesPerDose}
        </Typography>

        <Fab onClick={incrementCapsulesPerDose}>
          <AddIcon />
        </Fab>
      </Card>
    </form>
  );
};

export default StepTwo;
