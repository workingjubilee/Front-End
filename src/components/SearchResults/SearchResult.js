import React, { useState, useEffect } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
// import Image from './Image';
import ResultInfo from './ResultInfo';

const styles = {
  card: {
    maxWidth: '80%',
    border: '1px solid gray',
    margin: '1rem'
  },
  info: {
    display: 'flex'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  button: {
    width: '30%',
    height: '3rem',
    fontSize: '.6rem',
    color: 'white'
  },
  view: {
    backgroundColor: '#5AAC49'
  },
  add: {
    backgroundColor: '#2D90F5'
  }
};

const SearchResult = ({ classes, result, setPill }) => {
  // const pillTemplate = {
  //   med_name: '',
  //   med_color: '',
  //   med_shape: '',
  //   med_strength: 0,
  //   med_strength_unit: '',
  //   med_dose: 0,
  //   med_dose_unit: ''
  // };

  const [thisPill, setThisPill] = useState([]);

  function selectPill(e) {
    e.preventDefault();
    setPill({
      user_id: localStorage.getItem('userID'),
      med_name: thisPill.strength[0] && result.med_strength[0][0],
      med_color: result.color_text,
      med_shape: result.shape_text,
      med_strength: result.strength[0] && result.strength[0][1],
      med_strength: result.strength[0] && result.strength[0][2]
    });
  }

  useEffect(() => {
    console.log('RESULT: ', result.strength[0]);
    setThisPill(result.strength[0]);
    console.log('THIS PILL: ', thisPill);
  }, [result, setThisPill, thisPill]);

  return (
    <Card className={classes.card}>
      {/* Paper might not be necessary here */}
      <Paper>
        <CardContent className={classes.info}>
          <ResultInfo result={result} />
          <CircularProgress
            style={{
              marginLeft: '2rem',
              width: '3rem',
              height: '3rem'
            }}
            variant='static'
            value={90}
          />
        </CardContent>
        <CardContent className={classes.buttons}>
          <Button
            onClick={e => selectPill(e)}
            className={`${classes.button} ${classes.view}`}
          >
            View Details
          </Button>
          <Button className={`${classes.button} ${classes.add}`}>
            Add to Med List
          </Button>
          <Button className={`${classes.button} ${classes.add}`}>
            Add with Reminder
          </Button>
        </CardContent>
      </Paper>
    </Card>
  );

  // function addPill(scheduled) {
  //   if (scheduled) {
  //     console.log(`Gonna sendto rems table`);
  //     // Needs to send user to scheduling component, but just pushing to dashboard for now
  //     // history.push('/addpill');
  //   }
  //   console.log(`Gonna send to meds table`);
  // }
};

export default withStyles(styles)(SearchResult);
