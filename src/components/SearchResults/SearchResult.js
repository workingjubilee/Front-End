import React from 'react';
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
    fontSize: '18px',
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
          <ResultInfo result={result} />
          <CircularProgress
            style={{
              marginLeft: '20px',
              width: '100px',
              height: '100px'
            }}
            variant='static'
            value={result.match}
          />
        </CardContent>
        <CardContent className={classes.buttons}>
          <Button className={`${classes.button} ${classes.view}`}>
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
