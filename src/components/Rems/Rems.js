import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import { fetchRems } from '../../actions';
import Rem from './Rem';
import withStyles from '@material-ui/core/styles/withStyles';

class Rems extends Component {
  render() {
    const { fetchingRems, classes, rems, filteredRems, history } = this.props;
    if (fetchingRems) {
      return (
        <div className={classes.loading}>
          <CircularProgress
            className={classes.progress}
            color='primary'
            disableShrink
          />
        </div>
      );
    } else if (!fetchingRems && rems.length === 0) {
      return (
        <div className='no-reminders'>
          <h2>You do not have any reminders saved yet.</h2>
          <span
            onClick={() => {
              history.push('/identify');
            }}
          >
            <h2>Start tracking medications and reminders here.</h2>
          </span>
        </div>
      );
    } else if (rems.length > 0 && filteredRems.length === 0) {
      return <h1>You do not have any reminders saved for this date.</h1>;
    } else {
      return (
        <section className='reminders-container'>
          <h2>Your scheduled medications for today</h2>
          <div className='rems-list'>
            {filteredRems.map(rem => (
              <Rem key={rem.id} rem={rem} />
            ))}
          </div>
        </section>
      );
    }
  }
}

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2
  },
  loading: {
    margin: '0 auto',
    width: 500,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
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
