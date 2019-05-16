import React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import withStyles from '@material-ui/core/styles/withStyles';
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
    width: '3rem',
    height: '3rem'
  }
});

const ProfileIcon = ({ classes, user, filteredRems }) => {
  const { username } = user;
  return (
    <Card className={classes.paper}>
      <div className={classes.alignLeft}>
        <Typography className={classes.text}>Hello {username} </Typography>
        <Card>
          <Typography className={classes.lowerText}>
            {filteredRems.length} pills today
          </Typography>
        </Card>
      </div>
      <Avatar className={classes.avatar} alt={user.username} />
    </Card>
  );
};

const mapStateToProps = state => ({
  user: state.userReducer.user,
  filteredRems: state.medsReducer.filteredRems
});

const StyledProfileIcon = withStyles(styles)(ProfileIcon);

export default connect(
  mapStateToProps,
  null
)(StyledProfileIcon);
