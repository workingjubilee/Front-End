import React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

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
  alignLeft: {
    textAlign: 'left'
  },
  lowerText: {
    fontSize: '.8rem',
    color: '#2d90f5'
  },
  avatar: {
    width: '6rem',
    height: '6rem'
  }
});

const Profile = ({ classes, user }) => {
  const { username } = user;
  return (
    <Card className={classes.paper}>
      <div className={classes.alignLeft}>
        <Typography className={classes.text}>Hello {username} </Typography>
        <Card>
          <Typography className={classes.lowerText}> pills today</Typography>
        </Card>
      </div>
      <Avatar alt={user.username} />
    </Card>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

const StyledProfileIcon = withStyles(styles)(Profile);

export default connect(
  mapStateToProps,
  {}
)(StyledProfileIcon);
