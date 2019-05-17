import React from 'react';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const StartDate = ({ startDate, setStartDate }) => {
  const formatMomentDate = dateData => {
    dateData = dateData.split('');
    let date =
      dateData[6] +
      dateData[7] +
      dateData[8] +
      dateData[9] +
      '-' +
      dateData[0] +
      dateData[1] +
      '-' +
      dateData[3] +
      dateData[4];

    return date;
  };

  const todaysDate = formatMomentDate(moment(Date.now()).format('L'));

  const handleStartDateChange = e => {
    setStartDate(e.target.value);
  };

  return (
    <CardContent style={{ display: 'flex' }}>
      <Typography style={{ width: '20%' }} component='p'>
        Start Date
      </Typography>
      <Button
        style={{
          background: startDate === todaysDate ? '#2D90F5' : '',
          color: startDate === todaysDate ? 'white' : ''
        }}
        onClick={() => setStartDate(todaysDate)}
      >
        today
      </Button>
      <Button
        style={{
          background:
            startDate ===
            formatMomentDate(
              moment(todaysDate)
                .add(1, 'days')
                .format('L')
            )
              ? '#2D90F5'
              : '',
          color:
            startDate ===
            formatMomentDate(
              moment(todaysDate)
                .add(1, 'days')
                .format('L')
            )
              ? 'white'
              : ''
        }}
        onClick={() =>
          setStartDate(
            formatMomentDate(
              moment(todaysDate)
                .add(1, 'days')
                .format('L')
            )
          )
        }
      >
        tomorrow
      </Button>
      <TextField
        style={{
          height: '36px'
        }}
        id='date'
        label='Birthday'
        type='date'
        value={startDate}
        onChange={handleStartDateChange}
        InputLabelProps={{
          shrink: true
        }}
      />
    </CardContent>
  );
};

export default StartDate;
