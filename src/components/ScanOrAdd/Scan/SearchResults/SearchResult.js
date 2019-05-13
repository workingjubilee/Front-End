import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Image from './Image';
import ResultInfo from './ResultInfo';
import AddPillButton from './AddPillButton';

const styles = {
  card: {
    border: '10px dotted blue',
    maxWidth: '90vw'
  },
  cardContent: {
    display: 'flex'
  }
};

const SearchResult = ({
  classes,
  pill,
  history,
  setPill,
  setDosageDisplay
}) => {
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Image imageLink={pill.imageLink} />
        <ResultInfo pill={pill} />
        <AddPillButton addPill={addPill} pill={pill} />
      </CardContent>
    </Card>
  );

  function addPill(scheduled) {
    if (scheduled) {
      console.log(`Gonna send ${pill} to rems table`);
      // Needs to send user to scheduling component, but just pushing to dashboard for now
      // history.push('/addpill');
      setPill(pill);
      setDosageDisplay(true);
    }
    console.log(`Gonna send ${pill} to meds table`);
  }
};

export default withStyles(styles)(SearchResult);
