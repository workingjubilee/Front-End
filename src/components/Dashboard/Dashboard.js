import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../../actions';
import Meds from '../Meds/Meds';

const Dashboard = ({ fetchUser, user }) => {
  const { username } = user;
  const userID = localStorage.getItem('userID');
  useEffect(() => {
    if (!user.auth_id) {
      fetchUser(userID);
    }
  }, [user, fetchUser, userID]);

  return (
    <div className='DashboardPage'>
      {username ? <Meds user_id={userID} /> : null}
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
