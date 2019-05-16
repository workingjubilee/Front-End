import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchUser, filterReminders } from '../../actions';
import Meds from '../Meds/Meds';
import Datetime from 'react-datetime';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import moment from 'moment';

const Dashboard = ({ fetchUser, user, classes, filterReminders, rems }) => {
  const { username } = user;
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState(
    moment(date)
      .startOf('day')
      ._d.getTime()
  );
  const [endDate, setEndDate] = useState(
    moment(date)
      .endOf('day')
      ._d.getTime()
  );
  const userID = user.id ? user.id : localStorage.getItem('userID');
  useEffect(() => {
    if (rems.length > 0) {
      filterReminders(startDate, endDate);
    }
  }, [
    user,
    fetchUser,
    userID,
    date,
    startDate,
    endDate,
    filterReminders,
    rems
  ]);
  const changeDate = newDate => {
    setDate(newDate._d);
    setStartDate(
      moment(newDate._d)
        .startOf('day')
        ._d.getTime()
    );
    setEndDate(
      moment(newDate._d)
        .endOf('day')
        ._d.getTime()
    );
  };

  return (
    <div className='DashboardPage'>
      <InputLabel className={classes.label}>Date Picker</InputLabel>
      <br />
      <FormControl>
        <Card>
          <Datetime
            timeFormat={false}
            defaultValue={new Date()}
            input={false}
            onChange={changeDate}
          />
        </Card>
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
  user: state.userReducer.user,
  fetchingUser: state.userReducer.fetchingUser,
  error: state.userReducer.error,
  rems: state.remsReducer.rems
});

export default connect(
  mapStateToProps,
  { fetchUser, filterReminders }
)(StyledDashboard);
