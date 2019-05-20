import React from 'react';
import { connect } from 'react-redux';
import { editUser } from 'actions';
import { useInput } from 'utilities/useInput';

const UserProfile = ({ history, editUser }) => {
  const firstName = useInput();
  const lastName = useInput();
  const phone = useInput();
  const email = useInput();
  const username = useInput();

  const handleUpdate = e => {
    e.preventDefault();
    editUser({
      id: localStorage.getItem('userID'),
      username: username.value,
      first_name: firstName.value,
      last_name: lastName.value,
      phone: phone.value,
      email: email.value
    })
      .then(() => {
        history.push('/reminders');
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <div className='user-profile'>
      <form onSubmit={handleUpdate}>
        <input
          type='text'
          value={firstName.value}
          name='firstName'
          onChange={firstName.updateValue}
          placeholder='first name'
        />
        <input
          type='text'
          value={lastName.value}
          name='lastName'
          onChange={lastName.updateValue}
          placeholder='last name'
        />
        <input
          type='text'
          value={phone.value}
          name='phone'
          onChange={phone.updateValue}
          placeholder='phone'
        />
        <input
          type='text'
          value={email.value}
          name='email'
          onChange={email.updateValue}
          placeholder='email'
        />
        <input
          required
          type='text'
          value={username.value}
          name='username'
          onChange={username.updateValue}
          placeholder='username'
        />

        <button type='submit'>Update Info</button>
      </form>
    </div>
  );
};

export default connect(
  null,
  { editUser }
)(UserProfile);
