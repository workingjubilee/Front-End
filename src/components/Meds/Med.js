import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Button from '@material-ui/core/Button';

const Med = ({ med, classes }) => {
  return (
    <div className='med'>
      <Card className={classes.card}>
        <CardHeader
          title={med.med_name}
          subheader={`${med.med_dose} ${med.med_dose_unit} | ${
            med.med_color
          } | ${med.med_shape}`}
        >
          <Typography>{med.med_dose_freq}</Typography>
          <Typography>{med.med_admin_times}</Typography>
        </CardHeader>
        {/* <CardContent>
          <Typography component='h3'>${price} a week</Typography>
          <Typography component='h4'>{category}</Typography>
          <Typography component='p'>{description}</Typography>
        </CardContent> */}
        <CardActions className={classes.actions} disableActionSpacing>
          <Button>View Pill Details</Button>
          <Button>Discontinue Pill</Button>
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
