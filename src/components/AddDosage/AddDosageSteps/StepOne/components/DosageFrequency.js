import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const DosageFrequency = ({
  lengthOfDosage,
  dosageFrequency,
  updateDosageFrequency,
  selectedDays,
  weekdays,
  setWeekdays,
  selectedDates,
  dates,
  setDates
}) => {
  const handleDosageFrequencyChange = value => {
    if (dosageFrequency === value) {
      updateDosageFrequency('');
    } else {
      updateDosageFrequency(value);
    }
  };
  const handleWeekdayChange = weekday => e => {
    if (
      Object.values(weekdays).filter(value => value).length < lengthOfDosage
    ) {
      setWeekdays({ ...weekdays, [weekday]: e.target.checked });
    } else {
      setWeekdays({ ...weekdays, [weekday]: false });
    }
    console.log(weekdays);
    console.log(selectedDays);
  };
  const handleDateChange = date => e => {
    if (Object.values(dates).filter(value => value).length < lengthOfDosage) {
      console.log(date);
      setDates({ ...dates, [date]: e.target.checked });
    } else {
      setDates({ ...dates, [date]: false });
    }
    console.log(dates);
    console.log(selectedDates);
  };
  return (
    <CardContent style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Typography style={{ width: '150px', alignSelf: 'center' }} component='p'>
        Dosage Frequency
      </Typography>
      <Button
        style={{
          background: dosageFrequency === 'daily' ? '#2D90F5' : '',
          color: dosageFrequency === 'daily' ? 'white' : '',
          boxShadow: '0px 0px 10px 5px #f3f3f3',
          margin: '0 10px',
          textTransform: 'none'
        }}
        onClick={() => handleDosageFrequencyChange('daily')}
      >
        Daily
      </Button>
      <Button
        style={{
          background: dosageFrequency === 'weekly' ? '#2D90F5' : '',
          color: dosageFrequency === 'weekly' ? 'white' : '',
          boxShadow: '0px 0px 10px 5px #f3f3f3',
          margin: '0 10px',
          textTransform: 'none'
        }}
        onClick={() => handleDosageFrequencyChange('weekly')}
      >
        Weekly
      </Button>
      <Button
        style={{
          background: dosageFrequency === 'monthly' ? '#2D90F5' : '',
          color: dosageFrequency === 'monthly' ? 'white' : '',
          boxShadow: '0px 0px 10px 5px #f3f3f3',
          margin: '0 10px',
          textTransform: 'none'
        }}
        onClick={() => handleDosageFrequencyChange('monthly')}
      >
        Monthly
      </Button>
      {dosageFrequency === 'weekly' ? (
        <div style={{ display: 'flex' }}>
          <Typography style={{ alignSelf: 'center' }} component='p'>
            Select Weekdays
          </Typography>
          <Select
            multiple
            value={selectedDays}
            style={{
              height: '36px',
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap'
            }}
            renderValue={selected => (
              <div>
                {selected.map(value => (
                  <Chip style={{ height: '25px' }} key={value} label={value} />
                ))}
              </div>
            )}
          >
            {Object.entries(weekdays).map(day => (
              <MenuItem key={day[0]}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={day[1]}
                      onChange={handleWeekdayChange(day[0])}
                      value={day[0]}
                      color='primary'
                    />
                  }
                  label={day[0]}
                />
              </MenuItem>
            ))}
          </Select>
        </div>
      ) : null}
      {dosageFrequency === 'monthly' ? (
        <div style={{ display: 'flex' }}>
          <Typography style={{ alignSelf: 'center' }} component='p'>
            Select Dates
          </Typography>

          <Select
            multiple
            value={selectedDates}
            style={{
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
              height: '36px'
            }}
            renderValue={selected => (
              <div>
                {selected.map(value => (
                  <Chip style={{ height: '25px' }} key={value} label={value} />
                ))}
              </div>
            )}
          >
            {Object.entries(dates).map(date => (
              <MenuItem key={date[0]}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={date[1]}
                      onChange={handleDateChange(date[0])}
                      value={date[0]}
                      color='primary'
                    />
                  }
                  label={date[0]}
                />
              </MenuItem>
            ))}
          </Select>
        </div>
      ) : null}
    </CardContent>
  );
};

export default DosageFrequency;
