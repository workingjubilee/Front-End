import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Rem = ({ rem, classes }) => {
  const {
    med_name,
    med_dose,
    med_dose_unit,
    med_color,
    med_shape
    //med_dose_freq,
    //med_admin_times
  } = rem;
  return (
    <div className='reminder'>
      <Card className={classes.card}>
        <CardHeader
          title={med_name}
          subheader={`${med_dose} ${med_dose_unit} | ${med_color} | ${med_shape}`}
        />
        <CardActions className={classes.actions} disableActionSpacing>
          <Button className={classes.buttons} variant='outlined'>
            View Pill Details
          </Button>
          <Button className={classes.buttons} variant='outlined'>
            Add Note
          </Button>
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
    width: '446px'
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  buttons: {
    borderRadius: '0px'
  }
});

export default withStyles(styles)(Rem);