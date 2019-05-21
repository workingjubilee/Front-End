import React from 'react';
// import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  card: {
    width: '95%',
    height: '100%',
    minHeight: '60vh',
    display: 'flex',
    border: '1px solid gray',
    padding: '2rem'
  },
  no: {
    backgroundColor: '#5AAC49'
  },
  yes: {
    backgroundColor: '#3490F5'
  },
  button: {
    width: '30%',
    height: '2rem',
    fontSize: '0.7rem',
    color: 'white',
    textTransform: 'Capitalize',
    boxShadow: '.2rem .2rem .1rem grey',
    background: '#2D90F5'
  },
  static: {
    backgroundColor: '#F0F3F5',
    fontWeight: 'bold',
    fontSize: '16px',
    width: '9rem',
    height: '1.5rem',
    padding: '5px'
  },
  dynamic: {
    backgroundColor: 'white',
    height: '1.5rem',
    fontSize: '16px',
    border: '3px solid #F0F3F5',
    width: '100%',
    padding: '5px'
  },
  genericImage: {
    width: '225px',
    height: '225px'
  },
  row: {
    display: 'flex'
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    // Height should be a percentage of the container
    height: '50vh',
    justifyContent: 'space-between'
  }
});

const ViewDetails = ({
  classes,
  pill,
  handleAddPill,
  handleAddPillReminders
}) => {
  const correctCasing = string => {
    const lowerCasedString = string.toLowerCase();
    return lowerCasedString[0].toUpperCase() + lowerCasedString.slice(1);
  };

  const formattedPill = {
    user_id: localStorage.getItem('userID'),
    med_name: correctCasing(
      pill &&
        pill.strength &&
        pill.strength[0] &&
        pill.strength[0][0] &&
        pill.strength[0][0]
    ),
    med_color: correctCasing(pill.color_text),
    med_shape: correctCasing(pill.shape_text),
    med_strength:
      pill &&
      pill.strength &&
      pill.strength[0] &&
      pill.strength[0][1] &&
      parseInt(pill.strength[0][1]),
    med_strength_unit:
      pill &&
      pill.strength &&
      pill.strength[0] &&
      pill.strength[0][2] &&
      pill.strength[0][2]
  };
  console.log('Wow im here!!', pill);
  return (
    <div className={classes.card}>
      <div className={classes.left}>
        <img
          className={classes.genericImage}
          src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEtm2tJxpsgbyWcy36iZ6tPxSyg-wLQNBLOzRqbiNCaq1iAy5O`}
          alt='A drug'
        />
      </div>
      <div className={classes.right}>
        <div className={classes.row}>
          <Typography className={classes.static}>Pill Name:</Typography>
          <Typography className={classes.dynamic}>
            {correctCasing(pill.strength[0] && pill.strength[0][0])}
          </Typography>
        </div>
        <div className={classes.row}>
          <Typography className={classes.static}>Imprint:</Typography>
          <Typography className={classes.dynamic}>{pill.imprint}</Typography>
        </div>
        <div className={classes.row}>
          <Typography className={classes.static}>Color:</Typography>
          <Typography className={classes.dynamic}>{pill.color_text}</Typography>
        </div>
        <div className={classes.row}>
          <Typography className={classes.static}>Strength:</Typography>
          <Typography className={classes.dynamic}>
            {pill.strength[0] && pill.strength[0][1]}
            {pill.strength[0] && pill.strength[0][2]}
          </Typography>
        </div>{' '}
        <div className={classes.row}>
          <Typography className={classes.static}>DEA Schedule:</Typography>
          <Typography className={classes.dynamic}>
            {pill.DEA_schedule}
          </Typography>
        </div>
        <div className={classes.row}>
          <Typography className={classes.static}>Drug Code:</Typography>
          <Typography className={classes.dynamic}>
            {pill.product_code}
          </Typography>
        </div>
        <div className={classes.row}>
          <Typography className={classes.static}>Label Author:</Typography>
          <Typography className={classes.dynamic}>{pill.author}</Typography>
        </div>
        <div className={classes.buttons}>
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
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(ViewDetails);
