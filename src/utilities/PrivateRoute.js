import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        loggedIn ? <Component {...props} /> : <Redirect to='/landing' />
      }
    />
  );
};

const mapStateToProps = state => ({
  loggedIn: state.userReducer.loggedIn
});

export default connect(
  mapStateToProps,
  {}
)(PrivateRoute);
