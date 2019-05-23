import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { logIn } from 'actions';
import CircularProgress from '@material-ui/core/CircularProgress';
import Auth from 'Auth';
import withStyles from '@material-ui/core/styles/withStyles';

const Loading = ({ history, logIn, classes }) => {
  // Auth.lock.on('authenticated', function(authResult) {
  //   localStorage.setItem('token', authResult.idToken);
  //   localStorage.setItem('Auth0username', authResult.idTokenPayload.nickname);
  //   logIn()
  //     .then(res => {
  //       if (res.newUser) {
  //         history.push('/user');
  //       } else {
  //         history.push('/reminders');
  //       }
  //     })
  //     .catch(() => {
  //       alert('Log in failed');
  //       history.push('/');
  //     });
  // });
  useEffect(() => {
    Auth.lock.resumeAuth(history.location.hash, function(error, authResult) {
      if (error) {
        alert('Could not parse hash');
      }
    });
  }, [history, logIn]);

  return (
    <div className={classes.loading}>
      <CircularProgress
        className={classes.progress}
        color='primary'
        disableShrink
      />
    </div>
  );
};

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

const StyledLoading = withStyles(styles)(Loading);

export default connect(
  null,
  { logIn }
)(StyledLoading);
