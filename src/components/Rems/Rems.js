import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import { fetchRems } from '../../actions';
import Rem from './Rem';
import withStyles from '@material-ui/core/styles/withStyles';

class Rems extends Component {
  state = {
    noRems: false
  };

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
    const { fetchingRems, classes, rems, filteredRems } = this.props;
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
    } else if (rems.length > 0 && filteredRems.length === 0) {
      return <h1>You do not have any reminders saved for this date.</h1>;
    } else {
      return (
        <Card className={classes.card}>
          <h2>Your scheduled medications for today</h2>
          <div className={classes.rems}>
            {filteredRems.map(rem => (
              <Rem key={rem.id} rem={rem} />
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
  rems: state.remsReducer.rems,
  filteredRems: state.remsReducer.filteredRems,
  fetchingRems: state.remsReducer.fetchingRems,
  error: state.remsReducer.error
});

const StyledRems = withStyles(styles)(Rems);

export default connect(
  mapStateToProps,
  { fetchRems }
)(StyledRems);
