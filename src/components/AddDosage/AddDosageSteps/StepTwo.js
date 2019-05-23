import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PillCard from './PillCard';

const DataDisplay = props => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <Typography component='p'>{props.title}</Typography>
    <Typography style={{ color: '#2D90F5' }} component='p'>
      {props.data}
    </Typography>
  </div>
);

const StepThree = ({
  med,
  medImage,
  capsulesPerDose,
  lengthOfDosage,
  dosageFrequency,
  dosageInstruction,
  customInstruction,
  setStep,
  handleAddPill
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '100%'
      }}
    >
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '60%',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography style={{ justifyContent: 'flex-start' }} component='p'>
          Confirm Dosage Schedule
        </Typography>
        <Card style={{ width: '80%' }}>
          <PillCard med={med} medImage={medImage} />
          <Card style={{ width: '65%', margin: '0 auto', boxShadow: 'none' }}>
            <Typography
              style={{
                height: '50px',
                lineHeight: '50px',
                width: '100%',
                background: '#2D90F5',
                color: 'white',
                borderRadius: '4px',
                textAlign: 'center',
                fontSize: '20px'
              }}
            >
              SCHEDULE
            </Typography>
            <CardContent>
              <DataDisplay
                title='Dosage Quantity'
                data={
                  capsulesPerDose +
                  (capsulesPerDose > 1
                    ? ' capsules'
                    : capsulesPerDose === 0
                    ? ' capsules'
                    : ' capsule')
                }
              />
              <DataDisplay
                title='Length of Dosage'
                data={lengthOfDosage + 'X'}
              />
              <DataDisplay title='Dosage Frequency' data={dosageFrequency} />
              <DataDisplay
                title='Dosage Instruction'
                data={customInstruction.value || dosageInstruction}
              />
            </CardContent>
            <CardActions>
              <Button
                style={{ background: 'black', color: 'white' }}
                onClick={() => setStep(0)}
              >
                Edit Schedule
              </Button>
              <Button
                style={{ background: '#40AB48', color: 'white' }}
                onClick={() => handleAddPill()}
              >
                Save Dosage
              </Button>
            </CardActions>
          </Card>
        </Card>
      </section>
      <section style={{ width: '40%', justifyContent: 'center' }}>
        <Card style={{ width: '80%' }}>more stuff here</Card>
      </section>
    </div>
  );
};

export default StepThree;
