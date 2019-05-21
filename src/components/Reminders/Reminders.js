import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { filterReminders } from '../../actions';
import Rems from '../Rems/Rems';
import Datetime from 'react-datetime';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

const Reminders = ({ user, classes, filterReminders, rems }) => {
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
  }, [startDate, endDate, filterReminders, rems]);
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
    <section className='reminders'>
      <section className='calendar'>
        <Typography component='h2'>Your schedule for today</Typography>
        <Card className={classes.card}>
          <Datetime
            timeFormat={false}
            defaultValue={new Date()}
            input={false}
            onChange={changeDate}
            className={classes.calendar}
          />
          <article className='attention'>
            <Typography component='h6'>ATTENTION</Typography>
            <Typography component='p'>
              Dial 911 for any medical emergencies
            </Typography>
            <Typography component='p'>
              Remember to log your allergies and reactions to your medications
            </Typography>
            <Typography component='p'>
              Always consult your doctor regarding any unusual side effects from
              taking a medication
            </Typography>
          </article>
        </Card>
      </section>
      {username ? <Rems user_id={userID} /> : null}
    </section>
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
  },
  card: {
    width: '300px',
    margin: '24px auto'
  },
  calendar: {
    width: '260px',
    margin: '0 auto'
  }
});

const StyledReminders = withStyles(styles)(Reminders);

const mapStateToProps = state => ({
  user: state.userReducer.user,
  fetchingUser: state.userReducer.fetchingUser,
  error: state.userReducer.error,
  rems: state.remsReducer.rems
});

export default connect(
  mapStateToProps,
  { filterReminders }
)(StyledReminders);
