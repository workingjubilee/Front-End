import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import Image from './Image';
import ResultInfo from './ResultInfo';

const styles = {
  card: {
    maxWidth: '40%',
    border: '1px solid black',
    margin: '2rem'
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
    height: '3.5rem',
    fontSize: '.8rem',
    color: 'white'
  },
  view: {
    backgroundColor: '#5AAC49'
  },
  add: {
    backgroundColor: '#2D90F5'
  }
};

const SearchResult = ({ classes, result }) => {
  return (
    <Card className={classes.card}>
      {/* Paper might not be necessary here */}
      <Paper>
        <CardContent className={classes.info}>
          <Image
            imageLink={`https://s3.amazonaws.com/labs12-rxidstore/reference/${
              result.image_id
            }`}
          />
          <ResultInfo result={result} />
        </CardContent>
        <CardContent className={classes.buttons}>
          <Button className={`${classes.button} ${classes.view}`}>
            View Details
          </Button>
          <Button className={`${classes.button} ${classes.add}`}>
            Add to Medication List
          </Button>
          <Button className={`${classes.button} ${classes.add}`}>
            Add and Schedule Dosage
          </Button>
        </CardContent>
      </Paper>
    </Card>
  );

  function addPill(scheduled) {
    if (scheduled) {
      console.log(`Gonna sendto rems table`);
      // Needs to send user to scheduling component, but just pushing to dashboard for now
      // history.push('/addpill');
    }
    console.log(`Gonna send to meds table`);
  }
};

export default withStyles(styles)(SearchResult);
