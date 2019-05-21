import React from 'react';
import { connect } from 'react-redux';
import MuiButton from '@material-ui/core/Button';
import MuiTextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/core/styles/withStyles';

import { editUser } from 'actions';
import { useInput } from 'utilities/useInput';

const DeleteButton = withStyles({
  root: {
    textTransform: 'capitalize',
    background: '#D00A1B',
    color: 'white'
  }
})(props => <MuiButton {...props} />);

DeleteButton.muiName = 'Button';

const SaveButton = withStyles({
  root: {
    textTransform: 'capitalize',
    background: '#40AB48',
    color: 'white'
  }
})(props => <MuiButton {...props} />);

SaveButton.muiName = 'Button';

const TextField = withStyles({
  root: {
    width: '350px'
  }
})(props => <MuiTextField {...props} />);

TextField.muiName = 'TextField';

const DisabledTextField = withStyles({
  root: {
    width: '350px',
    background: '#E6E7E8'
  }
})(props => <MuiTextField {...props} />);

DisabledTextField.muiName = 'TextField';

const UserProfile = ({ history, editUser, username, first_name }) => {
  const firstName = useInput();
  const lastName = useInput();
  const phone = useInput();

  React.useEffect(() => {
    if (first_name) {
      firstName.setValue(first_name);
    }
    // eslint-disable-next-line
  }, []);

  // const handleUpdate = e => {
  //   e.preventDefault();
  //   editUser({
  //     id: localStorage.getItem('userID'),
  //     first_name: firstName.value,
  //     last_name: lastName.value,
  //     phone: phone.value
  //   })
  //     .then(() => {
  //       history.push('/reminders');
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  // };

  return (
    <div className='user-profile'>
      <div className='user-profile-banner'>My Profile</div>
      <div className='user-profile-content'>
        <div className='user-image-upload'>User Image Upload</div>
        <div className='user-profile-inputs'>
          <p className='user-profile-input-label'>Username</p>
          <DisabledTextField
            disabled
            id='outlined-bare'
            defaultValue={username}
            margin='normal'
            variant='outlined'
          />
          <TextField
            id='outlined-name'
            label='Name'
            value={username.value}
            margin='normal'
            variant='outlined'
          />
          <TextField
            id='outlined-name'
            label='Name'
            value={lastName.value}
            onChange={lastName.updateValue}
            margin='normal'
            variant='outlined'
          />
          <TextField
            id='outlined-name'
            label='Name'
            value={phone.value}
            onChange={phone.updateValue}
            margin='normal'
            variant='outlined'
          />
        </div>
      </div>
      <div className='user-profile-buttons'>
        <DeleteButton variant='contained'>Delete Account</DeleteButton>
        <SaveButton variant='contained'>Save Profile</SaveButton>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  username: 'MSTP Placeholder',
  first_name: state.userReducer.user.first_name
});

export default connect(
  mapStateToProps,
  { editUser }
)(UserProfile);
