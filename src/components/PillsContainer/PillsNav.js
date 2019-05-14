import React from 'react';
import { NavLink } from 'react-router-dom';

const PillsNav = props => {
  return (
    <nav>
      <NavLink to='/pills/active' className='tab' activeClassName='active-tab'>
        Active Meds
      </NavLink>
      <NavLink
        to='/pills/inactive'
        className='tab'
        activeClassName='active-tab'
      >
        Inactive Meds
      </NavLink>
    </nav>
  );
};

export default PillsNav;
