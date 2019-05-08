import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import { fetchMeds } from '../../actions';
import Med from '../Meds/Med';
import withStyles from '@material-ui/core/styles/withStyles';

class Meds extends Component {
  state = {
    noMeds: false
  };
  componentDidMount() {
    if (this.props.meds.length === 0) {
      this.props.fetchMeds(this.props.user_id);
    }
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.fetchingMeds &&
      !this.props.fetchingMeds &&
      !this.props.error &&
      this.props.meds.length === 0
    ) {
      this.setState({ noMeds: true });
    }
  }

  render() {
    const { fetchingMeds, classes, meds } = this.props;
    if (fetchingMeds) {
      return (
        <div className={classes.loading}>
          <h2>Loading Meds...</h2>;
          <CircularProgress
            className={classes.progress}
            color='primary'
            disableShrink
          />
        </div>
      );
    } else if (this.state.noMeds) {
      return <h1>You do not have any meds saved yet.</h1>;
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
  }
}

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
  },
  loading: {
    margin: '0 auto',
    width: 500
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
