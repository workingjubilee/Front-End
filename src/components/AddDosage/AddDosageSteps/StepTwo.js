import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { colors } from '../../data/colors';
import { shapes } from '../../data/shapes';

const StepThree = props => {
  return (
    <Card>
      <Card>
        <CardContent>
          <div style={{ display: 'flex' }}>
            <Typography component='div' variant='title'>
              Pill Name
            </Typography>
            <Typography component='div' variant='headline'>
              {props.name.value}
            </Typography>
          </div>
          <div style={{ display: 'flex' }}>
            <Typography component='div' variant='title'>
              Imprint
            </Typography>
            <Typography component='div' variant='headline'>
              {props.imprint.value}
            </Typography>
          </div>
          <div style={{ display: 'flex' }}>
            <Typography component='div' variant='title'>
              Color
            </Typography>
            <Typography component='div' variant='headline'>
              {colors[props.color].name}
            </Typography>
          </div>
          <div style={{ display: 'flex' }}>
            <Typography component='div' variant='title'>
              Shape
            </Typography>
            <Typography component='div' variant='headline'>
              {shapes[props.shape].name}
            </Typography>
          </div>
        </CardContent>
        <CardActions>
          <Button onClick={() => props.setStep(0)}>Edit</Button>
        </CardActions>
      </Card>
      {!props.capsulesPerDose &&
      !props.lengthOfDosage &&
      !props.dosageFrequency &&
      !props.dosageInstruction ? (
        <Card>
          <Typography>no dosage data</Typography>
          <CardActions>
            <Button onClick={() => props.setStep(1)}>Edit</Button>
          </CardActions>
        </Card>
      ) : (
        <Card>
          <CardContent>
            <div style={{ display: 'flex' }}>
              <Typography component='div' variant='title'>
                Capsules Per Dose
              </Typography>
              <Typography component='div' variant='headline'>
                {props.capsulesPerDose}
              </Typography>
            </div>
            <div style={{ display: 'flex' }}>
              <Typography component='div' variant='title'>
                Length of Dosage
              </Typography>
              <Typography component='div' variant='headline'>
                {props.lengthOfDosage}
              </Typography>
            </div>
            <div style={{ display: 'flex' }}>
              <Typography component='div' variant='title'>
                Dosage Frequency
              </Typography>
              <Typography component='div' variant='headline'>
                {props.dosageFrequency}
              </Typography>
            </div>
            <div style={{ display: 'flex' }}>
              <Typography component='div' variant='title'>
                Dosage Instruction
              </Typography>
              <Typography component='div' variant='headline'>
                {props.dosageInstruction}
              </Typography>
            </div>
          </CardContent>
          <CardActions>
            <Button onClick={() => props.setStep(1)}>Edit</Button>
          </CardActions>
        </Card>
      )}
      <CardActions>
        <Button onClick={() => props.handleAddPill()}>Add Pill</Button>
      </CardActions>
    </Card>
  );
};

export default StepThree;
