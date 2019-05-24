import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PillCard from '../PillCard';
import ScheduleCards from './SheduleCards.js';

const DataDisplay = ({ title, data }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <Typography component='p'>{title}</Typography>
    <Typography style={{ color: '#2D90F5' }} component='p'>
      {data}
    </Typography>
  </div>
);

const StyledHr = () => (
  <hr style={{ margin: '20px 0', border: '1px solid #F0F3F5' }} />
);

const StepTwo = ({
  med,
  medImage,
  capsulesPerDose,
  lengthOfDosage,
  dosageFrequency,
  dosageInstruction,
  customInstruction,
  dosageDuration,
  startDate,
  setStep,
  handleAddPill
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '100%',
        margin: '0 0 75px 0'
      }}
    >
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '60%',
          // justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography
          style={{
            alignSelf: 'flex-start',
            padding: '0 0 0 10%',
            fontSize: '25px',
            margin: '30px 0',
            fontWeight: '900'
          }}
          component='p'
        >
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
              <StyledHr />
              <DataDisplay
                title='Length of Dosage'
                data={lengthOfDosage + 'X'}
              />
              <StyledHr />
              <DataDisplay title='Dosage Frequency' data={dosageFrequency} />
              <StyledHr />
              <DataDisplay
                title='Dosage Instruction'
                data={customInstruction.value || dosageInstruction}
              />
              <StyledHr />
              <DataDisplay
                title='Dosage Duration'
                data={`${dosageDuration} - ${
                  dosageDuration === 1 ? 'week' : 'weeks'
                }`}
              />
              <StyledHr />
              <DataDisplay title='Start Date' data={startDate} />
            </CardContent>
            <CardActions
              style={{
                width: '100%',
                margin: '20px 0 20px 0',
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <Button
                style={{ background: 'black', color: 'white' }}
                onClick={() => setStep(0)}
              >
                Edit Schedule
              </Button>
              <Button
                style={{
                  background: '#40AB48',
                  color: 'white',
                  alignSelf: 'flex-end'
                }}
                onClick={() => handleAddPill()}
              >
                Save Dosage
              </Button>
            </CardActions>
          </Card>
        </Card>
      </section>
      <section style={{ width: '40%', justifyContent: 'center' }}>
        <ScheduleCards />
      </section>
    </div>
  );
};

export default StepTwo;
