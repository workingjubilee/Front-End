import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
  card: {
    boxShadow: 'none'
  }
};

const AdditionalSearchInfo = ({ classes }) => {
  return (
    <Card className={classes.card}>
      <Typography variant='h5'>Can't find what you're looking for?</Typography>
    </Card>
  );
};

export default withStyles(styles)(AdditionalSearchInfo);
