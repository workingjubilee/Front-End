import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';

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
    <CardContent style={{ display: 'flex' }}>
      <Typography style={{ width: '150px', alignSelf: 'center' }} component='p'>
        Dosage Frequency
      </Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Button
          style={{
            background: dosageFrequency === 'daily' ? '#2D90F5' : '',
            color: dosageFrequency === 'daily' ? 'white' : '',
            boxShadow: '0px 0px 10px 5px #f3f3f3',
            margin: '0 10px 10px 10px',
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
            margin: '0 10px 10px 10px',
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
            margin: '0 10px 10px 10px',
            textTransform: 'none'
          }}
          onClick={() => handleDosageFrequencyChange('monthly')}
        >
          Monthly
        </Button>
        <FormControl variant='outlined'>
          {dosageFrequency === 'weekly' ? (
            <div style={{ display: 'flex' }}>
              <Typography
                style={{ alignSelf: 'center', margin: '0 0 0 10px' }}
                component='p'
              >
                Select Weekdays
              </Typography>
              <Select
                multiple
                value={selectedDays}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flexWrap: 'wrap',
                  height: '36px',
                  overflow: 'hidden',
                  margin: '0 0 0 10px'
                }}
                input={<OutlinedInput style={{ padding: '0' }} />}
                renderValue={selected => (
                  <div style={{ padding: '0' }}>
                    {selected.map(value => (
                      <Chip
                        style={{ height: '25px', margin: '-22.5px 0 0 0' }}
                        key={value}
                        label={value}
                      />
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
          ) : dosageFrequency === 'monthly' ? (
            <div style={{ display: 'flex' }}>
              <Typography
                style={{ alignSelf: 'center', margin: '0 0 0 10px' }}
                component='p'
              >
                Select Dates
              </Typography>

              <Select
                multiple
                value={selectedDates}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flexWrap: 'wrap',
                  height: '36px',
                  overflow: 'hidden',
                  margin: '0 0 0 10px'
                }}
                input={<OutlinedInput style={{ padding: '0' }} />}
                renderValue={selected => (
                  <div style={{ padding: '0' }}>
                    {selected.map(value => (
                      <Chip
                        style={{ height: '25px', margin: '-22.5px 0 0 0' }}
                        key={value}
                        label={value}
                      />
                    ))}
                  </div>
                )}
              >
                {Object.entries(dates).map(date => (
                  <MenuItem key={date[0]}>
                    <FormControlLabel
                      variant='outlined'
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
        </FormControl>
      </div>
    </CardContent>
  );
};

export default DosageFrequency;
