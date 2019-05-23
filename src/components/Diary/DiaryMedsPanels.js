import React from 'react';
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import MuiSelect from '@material-ui/core/Select';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';

import DiaryMedPanel from './DiaryMedPanel';
import { editUser } from '../../actions/index';

const Select = withStyles({
  root: {
    marginTop: '.25em'
  }
})(props => <MuiSelect {...props} />);

Select.muiName = 'Select';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    minWidth: 120,
    marginLeft: '10px',
    justifyContent: 'center'
  }
};

function DiaryMedsPanels({
  classes,
  editUser,
  user_id,
  sort_diary_meds,
  fetchingMeds,
  meds,
  diary
}) {
  const [diaryFocus, setDiaryFocus] = React.useState(null);

  const sortedMeds =
    // reverse alphabetical (Z-A)
    sort_diary_meds === 'revAlpha'
      ? meds.sort(function(a, b) {
          if (a.med_name.toUpperCase() > b.med_name.toUpperCase()) {
            return -1;
          } else if (a.med_name.toUpperCase() < b.med_name.toUpperCase()) {
            return 1;
          } else {
            return 0;
          }
        })
      : // chronological (oldest first)
      sort_diary_meds === 'chron'
      ? meds.sort(function(a, b) {
          return b.med_add_date - a.med_add_date;
        })
      : // reverse chronological (oldest first)
      sort_diary_meds === 'revChron'
      ? meds.sort(function(a, b) {
          return a.med_add_date - b.med_add_date;
        })
      : // alphabetical (A-Z)
        meds.sort(function(a, b) {
          if (a.med_name.toUpperCase() < b.med_name.toUpperCase()) {
            return -1;
          } else if (a.med_name.toUpperCase() > b.med_name.toUpperCase()) {
            return 1;
          } else {
            return 0;
          }
        });

  const requestEditUser = e => {
    e.preventDefault();
    editUser({
      id: user_id,
      sort_diary_meds: e.target.value
    });
  };

  const changeFocus = med_id => {
    setDiaryFocus(med_id);
  };

  return (
    <div className='diaryMeds'>
      {fetchingMeds === true ? (
        <h2>Loading medications...</h2>
      ) : meds.length === 0 ? (
        <>
          <h2 className='diary-h2'>
            Use diaries to record the effects of the medications you're
            tracking.
          </h2>
          <Link className='diary-link' to='/identify'>
            <h2 className='diary-link'>Start tracking medications here.</h2>
          </Link>
        </>
      ) : (
        <div className='diaryMeds'>
          <div className='sortSelect'>
            <h2>Sort by:</h2>
            <FormControl className={classes.formControl}>
              <Select
                value={sort_diary_meds}
                onChange={requestEditUser}
                name='sort_diary_meds'
              >
                <MenuItem value={'alpha'}>A-Z</MenuItem>
                <MenuItem value={'revAlpha'}>Z-A</MenuItem>
                <MenuItem value={'chron'}>Newest First</MenuItem>
                <MenuItem value={'revChron'}>Oldest First</MenuItem>
              </Select>
            </FormControl>
          </div>
          {sortedMeds.map(med => (
            <DiaryMedPanel
              diaryCount={
                diary.filter(diaryEntry => {
                  return diaryEntry.med_id === med.id;
                }).length
              }
              key={med.id}
              med={med}
              changeFocus={changeFocus}
              diaryFocus={diaryFocus}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  user_id: state.userReducer.user.id,
  fetchingMed: state.medsReducer.fetchingMeds,
  meds: state.medsReducer.meds,
  diary: state.diaryReducer.diary,
  sort_diary_meds: state.userReducer.user.sort_diary_meds
});

export default connect(
  mapStateToProps,
  { editUser }
)(withStyles(styles)(DiaryMedsPanels));
