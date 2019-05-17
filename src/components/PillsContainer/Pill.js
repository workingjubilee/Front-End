import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Pill = ({ med, classes, openDialog }) => {
  const {
    med_name,
    med_strength,
    med_strength_unit,
    med_color,
    med_shape,
    med_active,
    id
    //med_dose_freq,
    //med_admin_times
  } = med;

  return (
    <div className='med'>
      <Card className={classes.card}>
        <CardHeader
          title={med_name}
          subheader={`${med_strength} ${med_strength_unit} | ${med_color} | ${med_shape}`}
        />
        <CardActions className={classes.actions} disableActionSpacing>
          <Button variant='outlined' className={classes.buttons}>
            View Pill Details
          </Button>
          {!med_active ? (
            <Button
              variant='outlined'
              className={classes.buttons}
              onClick={() => openDialog('reactivate', id, med)}
            >
              Re-activate Pill
            </Button>
          ) : null}
          {med_active ? (
            <Button
              variant='outlined'
              className={classes.buttons}
              onClick={() => openDialog('discontinue', id, med)}
            >
              Discontinue Pill
            </Button>
          ) : (
            <Button
              variant='outlined'
              className={classes.buttons}
              onClick={() => openDialog('delete', id)}
            >
              Delete Pill
            </Button>
          )}
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
    width: '446px',
    margin: '20px 0px'
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  buttons: {
    borderRadius: '0px'
  }
});

export default withStyles(styles)(Pill);
