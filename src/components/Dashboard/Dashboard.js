import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../../actions';
import Meds from '../Meds/Meds';

const Dashboard = ({ fetchUser, user }) => {
  const { username, premium, email, phone, first_name, last_name } = user;
  const userID = localStorage.getItem('userID');
  useEffect(() => {
    if (!user.auth_id) {
      fetchUser(userID);
    }
  }, [user, fetchUser, userID]);

  return (
    <div className='DashboardPage'>
      <h2>User Dashboard</h2>
      {username ? (
        <div className='user'>
          <h2>
            Welcome <em>{username}</em> !
          </h2>
          <h2>Account Information:</h2>
          <p>Username: {username}</p>
          <p>Account type: {premium ? 'premium' : 'trial'}</p>
          <p>Email address: {email}</p>
          <p>Phone number: {phone}</p>
          <p>First Name: {first_name}</p>
          <p>Last Name: {last_name}</p>
          <Meds user_id={userID} />
        </div>
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
  { fetchUser }
)(Dashboard);
