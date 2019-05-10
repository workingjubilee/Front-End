import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import { fetchRems } from '../../actions';
import Med from '../Meds/Med';
import withStyles from '@material-ui/core/styles/withStyles';

class Meds extends Component {
  state = {
    noRems: false
  };
  componentDidMount() {
    if (this.props.rems.length === 0) {
      this.props.fetchRems(this.props.user_id);
    }
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.fetchingRems &&
      !this.props.fetchingRems &&
      this.props.error
    ) {
      if (
        this.props.error ===
        'Request failed with status code 404. User with specified ID does not have any reminders.'
      ) {
        this.setState({ noRems: true });
      }
    }
  }

  render() {
    const { fetchingRems, classes, rems } = this.props;
    if (fetchingRems) {
      return (
        <div className={classes.loading}>
          <h2>Loading Meds...</h2>
          <CircularProgress
            className={classes.progress}
            color='primary'
            disableShrink
          />
        </div>
      );
    } else if (this.state.noRems) {
      return <h1>You do not have any reminders saved yet.</h1>;
    } else {
      return (
        <Card className={classes.card}>
          <h2>Your scheduled medications for today</h2>
          <div className={classes.rems}>
            {rems.map(med => (
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
  rems: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  loading: {
    margin: '0 auto',
    width: 500
  }
});

const mapStateToProps = state => ({
  rems: state.rems,
  fetchingRems: state.fetchingRems,
  error: state.error
});

const StyledMeds = withStyles(styles)(Meds);

export default connect(
  mapStateToProps,
  { fetchRems }
)(StyledMeds);
