import React, { useState } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
// import CircularProgress from '@material-ui/core/CircularProgress';
// import Image from './Image';
import ResultInfo from './ResultInfo';
import ViewDetails from './ViewDetails';

const styles = {
  card: {
    border: '1px solid gray',
    margin: '2%',
    width: '100%'
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
    height: '2rem',
    fontSize: '0.7rem',
    color: 'white',
    textTransform: 'Capitalize',
    boxShadow: '.2rem .2rem .1rem grey'
  },
  view: {
    backgroundColor: '#5AAC49'
  },
  add: {
    backgroundColor: '#2D90F5'
  },
  genericImage: {
    width: '100px',
    height: '100px'
  }
};

const SearchResult = ({
  classes,
  result,
  handleAddPill,
  handleAddPillReminders
}) => {
  const correctCasing = string => {
    const lowerCasedString = string.toLowerCase();
    return lowerCasedString[0].toUpperCase() + lowerCasedString.slice(1);
  };
  const formattedPill = {
    user_id: localStorage.getItem('userID'),
    med_name:
      result &&
      result.strength &&
      result.strength[0] &&
      result.strength[0][0] &&
      result.strength[0][0],
    med_color: correctCasing(result.color_text),
    med_shape: correctCasing(result.shape_text),
    med_strength:
      result &&
      result.strength &&
      result.strength[0] &&
      result.strength[0][1] &&
      parseInt(result.strength[0][1]),
    med_strength_unit:
      result &&
      result.strength &&
      result.strength[0] &&
      result.strength[0][2] &&
      result.strength[0][2]
  };

  const [open, setOpen] = useState(false);

  // function selectPill(e) {
  //   e.preventDefault();
  //   setPill({
  //     user_id: localStorage.getItem('userID'),
  //     med_name: thisPill.strength[0] && result.med_strength[0][0],
  //     med_color: result.color_text,
  //     med_shape: result.shape_text,
  //     med_strength: result.strength[0] && result.strength[0][1],
  //     med_strength: result.strength[0] && result.strength[0][2]
  //   });
  // }

  // useEffect(() => {
  //   console.log('RESULT: ', result.strength[0]);
  //   setThisPill(result.strength[0]);
  //   console.log('THIS PILL: ', thisPill);
  // }, [result, setThisPill, thisPill]);

  console.log(result);
  return (
    <Card className={classes.card}>
      {/* Paper might not be necessary here */}
      <Paper>
        <CardContent className={classes.info}>
          <img
            className={classes.genericImage}
            src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEtm2tJxpsgbyWcy36iZ6tPxSyg-wLQNBLOzRqbiNCaq1iAy5O`}
            alt='A drug'
          />
          <ResultInfo result={result} />
          {/* <CircularProgress
            style={{
              marginLeft: '2rem',
              width: '3rem',
              height: '3rem'
            }}
            variant='static'
            value={90}
          /> */}
        </CardContent>
        <CardContent className={classes.buttons}>
          <Button
            onClick={e => {
              e.preventDefault();
              console.log(open);
              setOpen(!open);
              console.log(open);
            }}
            className={`${classes.button} ${classes.view}`}
          >
            View Details
          </Button>
          <Button
            onClick={e => {
              e.preventDefault();
              handleAddPill(formattedPill);
            }}
            className={`${classes.button} ${classes.add}`}
          >
            Add to Med List
          </Button>
          <Button
            onClick={e => {
              e.preventDefault();
              handleAddPillReminders(formattedPill);
            }}
            className={`${classes.button} ${classes.add}`}
          >
            Add with Reminder
          </Button>
          <ViewDetails open={open} setOpen={setOpen} result={result} />
        </CardContent>
      </Paper>
    </Card>
  );
};

export default withStyles(styles)(SearchResult);
