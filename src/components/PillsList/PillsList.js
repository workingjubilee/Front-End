import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions';
import Meds from '../Meds/Meds';
import withStyles from '@material-ui/core/styles/withStyles';

const PillsList = ({ fetchUser, user }) => {
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

// Not being used for now
const styles = theme => ({
  label: {
    color: 'rgba(0, 0, 0, 0.26)',
    cursor: 'pointer',
    display: 'inline-flex',
    fontSize: '14px',
    transition: '0.3s ease all',
    lineHeight: '1.428571429',
    fontWeight: '400',
    paddingLeft: '0'
  }
});

const StyledPillsList = withStyles(styles)(PillsList);

const mapStateToProps = state => ({
  user: state.user,
  fetchingUser: state.fetchingUser,
  error: state.error
});

export default connect(
  mapStateToProps,
  { fetchUser }
)(StyledPillsList);
