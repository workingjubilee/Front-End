import React from 'react';
import { connect } from 'react-redux';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import withStyles from '@material-ui/core/styles/withStyles';

import DiaryEntryPanel from './DiaryEntryPanel';
import DiaryEntryModal from './DiaryEntryModal';

const ExpansionPanelSummary = withStyles({
  root: {
    padding: '0px'
  },
  content: {
    justifyContent: 'space-around',
    margin: '6px 0 6px 0'
  }
})(props => <MuiExpansionPanelSummary {...props} />);

ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';

const styles = {
  newEntryPanel: {
    display: 'flex',
    alignItems: 'center'
  },
  bigplus: {
    fontSize: 40,
    margin: '0px'
  },
  viewAllPanel: {
    display: 'flex',
    justifyContent: 'center',
    background: 'white'
  }
};

const DiaryEntriesPanels = ({ classes, diary, diaryFocus, meds }) => {
  const filteredSortedDiary = diary
    .filter(diaryEntry => {
      return diaryEntry.med_id === diaryFocus;
    })
    .sort(function(a, b) {
      return b.diary_date - a.diary_date;
    });

  let medName;
  if (diaryFocus) {
    medName = meds.filter(med => {
      return med.id === diaryFocus;
    })[0].med_name;
  }

  return (
    <div className='diaryEntries'>
      <ExpansionPanelSummary>
        <div className={classes.newEntryPanel}>
          <p className={classes.bigplus}>+</p>
          <DiaryEntryModal
            newEntry={true}
            medName={medName}
            med_id={diaryFocus}
          />
        </div>
      </ExpansionPanelSummary>
      {filteredSortedDiary.length === 0 ? (
        <p>You have no diary entries for {medName}.</p>
      ) : (
        filteredSortedDiary.map((diaryEntry, index) =>
          index <= 3 ? (
            <DiaryEntryPanel key={diaryEntry.id} diaryEntry={diaryEntry} />
          ) : null
        )
      )}
      <div className={classes.viewAllPanel}>
        <p>View all button here</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  diary: state.diaryReducer.diary,
  meds: state.medsReducer.meds
});

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(DiaryEntriesPanels));
