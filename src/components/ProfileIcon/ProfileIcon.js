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
    this.handleInitialization();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.loggingIn && !this.props.loggingIn && !this.props.error) {
      this.handleInitialization();
    }
  }
  handleInitialization = () => {
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
  };

  render() {
    const { classes, user, filteredRems } = this.props;
    return (
      <Card className={classes.paper}>
        <div className={classes.profileText}>
          {user.id ? (
            <Link className={classes.link} to='/user'>
              <Typography className={classes.text}>
                Hello {user.first_name ? user.first_name : user.username}
              </Typography>
            </Link>
          ) : null}
          <Card className={classes.pills}>
            <Link className={classes.link} to='/reminders'>
              <Typography className={classes.lowerText}>
                {filteredRems.length}{' '}
                {filteredRems.length === 1 ? 'med' : 'meds'} scheduled today
              </Typography>
            </Link>
          </Card>
        </div>
        <Link className={classes.link} to='/user'>
          <Avatar
            className={classes.avatar}
            alt={user.username ? user.username : 'avatar'}
          />
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
    alignItems: 'center',
    marginRight: 22
  },
  text: {
    fontSize: '1rem',
    color: 'white',
    fontWeight: '300'
  },
  profileText: {
    textAlign: 'right',
    paddingRight: '5px'
  },
  lowerText: {
    fontSize: '.8rem',
    color: '#3d98f6',
    padding: '0 5px 0 5px',
    '&:hover': {
      background: 'lightGreen'
    },
    fontWeight: '300'
  },
  avatar: {
    width: '50px',
    height: '50px',
    '@media (max-width: 375px)': {
      display: 'none'
    },
    marginLeft: '8px'
  },
  link: {
    textDecoration: 'none'
  },
  pills: {
    height: '25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const mapStateToProps = state => ({
  user: state.userReducer.user,
  meds: state.medsReducer.meds,
  rems: state.remsReducer.rems,
  filteredRems: state.remsReducer.filteredRems,
  loggingIn: state.userReducer.loggingIn,
  error: state.userReducer.error
});

const StyledProfileIcon = withStyles(styles)(ProfileIcon);

export default connect(
  mapStateToProps,
  { fetchUser, fetchMeds, fetchRems, filterReminders }
)(StyledProfileIcon);
