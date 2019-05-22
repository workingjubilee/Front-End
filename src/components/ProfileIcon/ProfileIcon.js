import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { fetchUser, fetchMeds, fetchRems, filterReminders } from 'actions';
import moment from 'moment';
import { Link } from 'react-router-dom';

class ProfileIcon extends Component {
  componentDidMount() {
    const {
      user,
      fetchUser,
      fetchMeds,
      fetchRems,
      meds,
      rems,
      filterReminders
    } = this.props;
    const userID = user.id ? user.id : localStorage.getItem('userID');

    if (!user.username && userID) {
      fetchUser(userID);
    }
    if (meds.length === 0 && userID) {
      fetchMeds(userID);
    }
    if (rems.length === 0 && userID) {
      fetchRems(userID).then(res => {
        const startDate = moment(new Date())
          .startOf('day')
          ._d.getTime();
        const endDate = moment(new Date())
          .endOf('day')
          ._d.getTime();
        filterReminders(startDate, endDate);
      });
    }
  }

  render() {
    const { classes, user, filteredRems } = this.props;
    const { username, first_name } = user;
    return (
      <Card className={classes.paper}>
        <div className={classes.profileText}>
          <Link className={classes.link} to='/user'>
            <Typography className={classes.text}>
              Hello {first_name ? first_name : username}
            </Typography>
          </Link>
          <Card>
            <Link className={classes.link} to='/reminders'>
              <Typography className={classes.lowerText}>
                {filteredRems.length}{' '}
                {filteredRems.length === 1 ? 'med' : 'meds'} today
              </Typography>
            </Link>
          </Card>
        </div>
        <Link className={classes.link} to='/user'>
          <Avatar className={classes.avatar} alt={user.username} />
        </Link>
      </Card>
    );
  }
}

const styles = theme => ({
  paper: {
    backgroundColor: '#2d90f5',
    boxShadow: 'none',
    display: 'flex',
    alignItems: 'center'
  },
  text: {
    fontSize: '1rem',
    color: 'white'
  },
  profileText: {
    textAlign: 'right',
    paddingRight: '5px'
  },
  lowerText: {
    fontSize: '.8rem',
    color: '#2d90f5',
    padding: '0 5px 0 5px',
    '&:hover': {
      background: 'lightGreen'
    }
  },
  avatar: {
    width: '3rem',
    height: '3rem',
    '@media (max-width: 375px)': {
      display: 'none'
    }
  },
  link: {
    textDecoration: 'none'
  }
});

const mapStateToProps = state => ({
  user: state.userReducer.user,
  meds: state.medsReducer.meds,
  rems: state.remsReducer.rems,
  filteredRems: state.remsReducer.filteredRems
});

const StyledProfileIcon = withStyles(styles)(ProfileIcon);

export default connect(
  mapStateToProps,
  { fetchUser, fetchMeds, fetchRems, filterReminders }
)(StyledProfileIcon);
