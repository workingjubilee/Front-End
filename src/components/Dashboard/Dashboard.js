import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions';
import Meds from '../Meds/Meds';
import Datetime from 'react-datetime';
import withStyles from '@material-ui/core/styles/withStyles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const Dashboard = ({ fetchUser, user, classes }) => {
  const { username } = user;
  const [date, setDate] = useState(new Date());
  const userID = localStorage.getItem('userID');
  useEffect(() => {
    if (!user.auth_id) {
      fetchUser(userID);
    }
    console.log(date);
  }, [user, fetchUser, userID, date]);
  const changeDate = newDate => {
    setDate(newDate._d);
  };

  return (
    <div className='DashboardPage'>
      <InputLabel className={classes.label}>Date Picker</InputLabel>
      <br />
      <FormControl>
        <Datetime
          timeFormat={false}
          defaultValue={new Date()}
          input={false}
          onChange={changeDate}
        />
      </FormControl>
      {username ? <Meds user_id={userID} /> : null}
    </div>
  );
};

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

const StyledDashboard = withStyles(styles)(Dashboard);

const mapStateToProps = state => ({
  user: state.user,
  fetchingUser: state.fetchingUser,
  error: state.error
});

export default connect(
  mapStateToProps,
  { fetchUser }
)(StyledDashboard);
