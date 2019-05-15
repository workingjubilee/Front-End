import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import { colors } from '../../data/colors';
// import { shapes } from '../../data/shapes';

const StepThree = props => {
  return (
    <Card>
      <Card>
        <CardContent>
          <div style={{ display: 'flex' }}>
            <Typography component='div'>
              Pill Name
            </Typography>
            <Typography component='div'>
              {props.name}
            </Typography>
          </div>
          {/* <div style={{ display: 'flex' }}>
            <Typography component='div'>
              Imprint
            </Typography>
            <Typography component='div'>
              {props.imprint.value}
            </Typography>
          </div>
          <div style={{ display: 'flex' }}>
            <Typography component='div'>
              Color
            </Typography>
            <Typography component='div'>
              {colors[props.color].name}
            </Typography>
          </div>
          <div style={{ display: 'flex' }}>
            <Typography component='div'>
              Shape
            </Typography>
            <Typography component='div'>
              {shapes[props.shape].name}
            </Typography>
          </div> */}
        </CardContent>
      </Card>
      {/* {!props.capsulesPerDose &&
      !props.lengthOfDosage &&
      !props.dosageFrequency &&
      !props.dosageInstruction ? (
        <Card>
          <Typography>no dosage data</Typography>
          <CardActions>
            <Button onClick={() => props.setStep(1)}>Edit</Button>
          </CardActions>
        </Card>
      ) : ( */}
      <Card>
        <CardContent>
          <div style={{ display: 'flex' }}>
            <Typography component='div'>
              Capsules Per Dose
            </Typography>
            <Typography component='div'>
              {props.capsulesPerDose}
            </Typography>
          </div>
          <div style={{ display: 'flex' }}>
            <Typography component='div'>
              Length of Dosage
            </Typography>
            <Typography component='div'>
              {props.lengthOfDosage}
            </Typography>
          </div>
          <div style={{ display: 'flex' }}>
            <Typography component='div'>
              Dosage Frequency
            </Typography>
            <Typography component='div'>
              {props.dosageFrequency}
            </Typography>
          </div>
          <div style={{ display: 'flex' }}>
            <Typography component='div'>
              Dosage Instruction
            </Typography>
            <Typography component='div'>
              {props.dosageInstruction}
            </Typography>
          </div>
        </CardContent>
        <CardActions>
          <Button onClick={() => props.setStep(0)}>Edit</Button>
        </CardActions>
      </Card>
      <CardActions>
        <Button onClick={() => props.handleAddPill()}>Add Pill</Button>
      </CardActions>
    </Card>
  );
};

export default StepThree;
