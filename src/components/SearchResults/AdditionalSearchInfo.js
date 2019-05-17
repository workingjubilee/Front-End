import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import { tablet } from 'scss/mediaVariables';

const styles = {
  card: {
    boxShadow: 'none',
    textAlign: 'center',
    [`${tablet}`]: {
      display: 'none'
    }
  },
  header: {
    margin: '5%'
  }
};

const AdditionalSearchInfo = ({ classes }) => {
  return (
    <Card className={classes.card}>
      <Typography className={classes.header} variant='h5'>
        Can't find what you're looking for?
      </Typography>
      <p>
        You can search to identify your pill by providing either the pill name,
        imprint, or uploading an image
      </p>
      <Typography className={classes.header} variant='h5'>
        Steps to Identify a Pill
      </Typography>
      <Card>
        <ol className={'steps'}>
          <li>1. Enter the pill name (optional)</li>
          <li>2. Upload image of the pill (optional)</li>
          <li>
            3. Enter the imprint (code, numbers and/or letters on the pill)
          </li>
          <li>4. Select the color of the pill</li>
          <li>5. Select the shape of the pill</li>
          <li>6. Click the 'Identify' Button</li>
          <li>7. Find your medication or make a new search</li>
        </ol>
      </Card>
    </Card>
  );
};

export default withStyles(styles)(AdditionalSearchInfo);
