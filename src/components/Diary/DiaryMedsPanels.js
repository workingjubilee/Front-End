import React from 'react';
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import withStyles from '@material-ui/core/styles/withStyles';

import DiaryMedsPanel from './DiaryMedsPanel';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    minWidth: 120,
    marginLeft: '10px',
    justifyContent: 'center'
  },
  selectEmpty: {}
};

function DiaryMedsPanels({ classes, fetchingMeds, meds, diary }) {
  const [diaryFocus, setDiaryFocus] = React.useState(null);
  const [sort, setSort] = React.useState('alpha');

  // React.useEffect(() => {
  //   if (diaryFocus !== med.id) {
  //     setExpanded(false);
  //   }
  //   // eslint-disable-next-line
  // }, [diaryFocus]);

  const changeSort = e => {
    setSort(e.target.value);
  };

  const changeFocus = med_id => {
    setDiaryFocus(med_id);
  };

  return (
    <div className='diaryMeds'>
      {fetchingMeds === true ? (
        <h2>Loading medications...</h2>
      ) : meds.length === 0 ? (
        <h2>
          You aren't tracking any medications. You need to track a medication to
          record a diary entry.
        </h2>
      ) : (
        <div className='diaryMeds'>
          <div className='sortSelect'>
            <h2>Sort by:</h2>
            <FormControl className={classes.formControl}>
              <Select value={sort} onChange={changeSort} name='sort'>
                <MenuItem value={'alpha'}>A-Z</MenuItem>
                <MenuItem value={'revAlpha'}>Z-A</MenuItem>
                <MenuItem value={'chron'}>Newest First</MenuItem>
                <MenuItem value={'revChron'}>Oldest First</MenuItem>
              </Select>
            </FormControl>
          </div>
          {meds.map((med, index) =>
            index <= 3 ? (
              <DiaryMedsPanel
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
            ) : null
          )}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  fetchingMed: state.medsReducer.fetchingMeds,
  meds: state.medsReducer.meds,
  diary: state.diaryReducer.diary
});

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(DiaryMedsPanels));
