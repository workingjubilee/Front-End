import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getUser } from '../../actions';
import Meds from '../Meds/Meds';

const Dashboard = ({ getUser, user }) => {
  const { username, premium, email, phone, first_name, last_name } = user;
  useEffect(() => {
    if (!user.username) {
      getUser(localStorage.getItem('userID'));
    }
  }, [user, getUser]);

  return (
    <div className='DashboardPage'>
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
          <Meds user_id={user.id} />
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
  { getUser }
)(Dashboard);
