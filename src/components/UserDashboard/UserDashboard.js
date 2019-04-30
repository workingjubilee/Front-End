import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../actions';

class UserDashboard extends Component {
  componentDidMount() {
    this.props.getUser(localStorage.getItem('userID'));
  }

  render() {
    const {username, first_name, last_name} = this.props.user;
    return (
      <div className="userDashboardPage">
        {username ? (
          <h2>
            Welcome <em>{username}</em>!
          </h2>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  fetchingUser: state.fetchingUser,
  error: state.error
});

export default connect(
  mapStateToProps,
  {getUser}
)(UserDashboard);
