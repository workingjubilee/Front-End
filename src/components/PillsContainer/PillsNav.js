import React from 'react';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const PillsNav = props => {
  return (
    <nav className='pill-navigator'>
      <NavLink to='/pills/active' className='tab' activeClassName='active-tab'>
        <Typography component='h5'>Active Meds</Typography>
      </NavLink>
      <NavLink
        to='/pills/inactive'
        className='tab'
        activeClassName='active-tab'
      >
        <Typography component='h5'>Inactive Meds</Typography>
      </NavLink>
    </nav>
  );
};

export default PillsNav;
