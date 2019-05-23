import React from 'react';
import { NavLink } from 'react-router-dom';
import ArrowIcon from '@material-ui/icons/CompareArrows';
import DiaryIcon from '@material-ui/icons/QuestionAnswer';
import ScanIcon from '@material-ui/icons/CenterFocusStrong';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';

const Tabs = props => {
  return (
    <nav className={props.classes}>
      <NavLink to='/identify' className='tab edge' activeClassName='active-tab'>
        <ScanIcon className='scanner icon' />
        <Typography component='h5'>Scan / Add Pill</Typography>
      </NavLink>
      <NavLink to='/pills' className='tab' activeClassName='active-tab'>
        <SvgIcon className='icon'>
          <path d='M4.22,11.29L11.29,4.22C13.64,1.88 17.43,1.88 19.78,4.22C22.12,6.56 22.12,10.36 19.78,12.71L12.71,19.78C10.36,22.12 6.56,22.12 4.22,19.78C1.88,17.43 1.88,13.64 4.22,11.29M5.64,12.71C4.59,13.75 4.24,15.24 4.6,16.57L10.59,10.59L14.83,14.83L18.36,11.29C19.93,9.73 19.93,7.2 18.36,5.64C16.8,4.07 14.27,4.07 12.71,5.64L5.64,12.71Z' />
        </SvgIcon>
        <Typography component='h5'>List of Medications</Typography>
      </NavLink>
      <NavLink to='/reminders' className='tab' activeClassName='active-tab'>
        <ArrowIcon className='arrow icon' />
        <Typography component='h5'>Scheduled Pills</Typography>
      </NavLink>
      <NavLink to='/diary' className='tab' activeClassName='active-tab'>
        <DiaryIcon className='diary-icon' />
        <Typography component='h5'>Medication Diary</Typography>
      </NavLink>
    </nav>
  );
};

export default Tabs;
