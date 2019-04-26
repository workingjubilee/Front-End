import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../actions';

// Required for DS Server connection. Remove when axios call is removed.
import axios from 'axios';

class UserDashboard extends Component {
  componentDidMount() {
    this.props.getUser(localStorage.getItem('userID'));

    // Demonstrates connection to DS server with a minimum of clutter. Remove once connection is established in action creators.
    axios
      .get(
        `https://rxid-ds.us-east-2.elasticbeanstalk.com//identify/param1=Red`
      )
      .then(res => {
        console.log('Connection to DS enpoint:', res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { username, first_name, last_name } = this.props.user;
    return (
      <div className='userDashboardPage'>
        {username ? (
          <h2>
            Welcome <em>{username}</em>!
          </h2>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  fetchingUser: state.fetchingUser,
  error: state.error
});

export default connect(
  mapStateToProps,
  { getUser }
)(UserDashboard);
