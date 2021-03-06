import React from 'react';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const PillsNav = props => {
  return (
    <nav className='pill-navigator'>
      <NavLink
        to='/pills/active'
        className='tab a'
        activeClassName='active-tab'
      >
        <Typography component='h5'>Active Medications</Typography>
      </NavLink>
      <NavLink
        to='/pills/inactive'
        className='tab b'
        activeClassName='active-tab'
      >
        <Typography component='h5'>Inactive Medications</Typography>
      </NavLink>
    </nav>
  );
};

export default PillsNav;
