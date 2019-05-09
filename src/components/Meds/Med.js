import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Med = ({ med, classes }) => {
  const {
    med_name,
    med_dose,
    med_dose_unit,
    med_color,
    med_shape,
    med_dose_freq,
    med_admin_times
  } = med;
  return (
    <div className='med'>
      <Card className={classes.card}>
        <CardHeader
          title={med_name}
          subheader={`${med_dose} ${med_dose_unit} | ${med_color} | ${med_shape}`}
        />
        <CardActions className={classes.actions} disableActionSpacing>
          <Button>View Pill Details</Button>
          <Button>Add Note</Button>
        </CardActions>
      </Card>
    </div>
  );
};

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit
  },
  progress: {
    margin: theme.spacing.unit * 2
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  },
  card: {
    width: 500,
    margin: '20px 20px'
  },
  actions: {
    display: 'flex'
  }
});

export default withStyles(styles)(Med);
