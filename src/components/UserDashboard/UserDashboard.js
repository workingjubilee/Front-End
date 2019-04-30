import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../actions';

const UserDashboard = ({ user, getUser }) => {
  useEffect(() => {
    if (!user.username) {
      getUser(localStorage.getItem('userID'));
    }
  });

  const { username, first_name, last_name } = user;
  return (
    <div className='userDashboardPage'>
      {username ? (
        <h2>
          Welcome <em>{username}</em>!
        </h2>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  fetchingUser: state.fetchingUser,
  error: state.error
});

export default connect(
  mapStateToProps,
  { getUser }
)(UserDashboard);
