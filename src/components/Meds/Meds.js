import React, { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import { connect } from 'react-redux';
import { fetchMeds } from '../../actions';
import Med from '../Meds/Med';
import { withStyles } from '@material-ui/core/styles';

const Meds = ({ fetchMeds, user_id, meds, fetchingMeds, classes }) => {
  useEffect(() => {
    fetchMeds(user_id);
  }, [user_id, fetchMeds]);

  if (fetchingMeds) {
    return <h2>Loading Meds...</h2>;
  } else {
    return (
      <Card className={classes.card}>
        <h2>Your scheduled medications for today</h2>
        <div className={classes.meds}>
          {meds.map(med => (
            <Med key={med.id} med={med} />
          ))}
        </div>
      </Card>
    );
  }
};

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2
  },
  card: {
    maxWidth: 1100,
    margin: '0 auto'
  },
  meds: {
    display: 'flex',
    flexWrap: 'wrap'
  }
});

const mapStateToProps = state => ({
  meds: state.meds,
  fetchingMeds: state.fetchingMeds,
  error: state.error
});

const StyledMeds = withStyles(styles)(Meds);

export default connect(
  mapStateToProps,
  { fetchMeds }
)(StyledMeds);
