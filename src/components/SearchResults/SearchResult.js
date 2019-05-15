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
    border: '1px solid black'
  },
  info: {
    display: 'flex'
  },
  buttons: {
    display: 'flex'
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
          <Button>View Details</Button>
          <Button>Add to Medication List</Button>
          <Button>Add and Schedule Dosage</Button>
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
