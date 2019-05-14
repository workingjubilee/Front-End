import React from 'react';
import { connect } from 'react-redux';
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import withStyles from '@material-ui/core/styles/withStyles';

import DiaryEntry from './DiaryEntry';
import DiaryEntryModal from './DiaryEntryModal';

const ExpansionPanelSummary = withStyles({
  content: {
    justifyContent: 'space-around'
  }
})(props => <MuiExpansionPanelSummary {...props} />);

ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';

const styles = {
  newEntryPanel: {
    border: '1px dashed red'
  }
};

const DiaryEntries = ({ classes, diary, diaryFocus, meds }) => {
  const filteredDiary = diary.filter(diaryEntry => {
    return diaryEntry.med_id === diaryFocus;
  });

  let medName;
  if (diaryFocus) {
    medName = meds.filter(med => {
      return med.id === diaryFocus;
    })[0].med_name;
  }

  return (
    <div className='diaryEntries'>
      <ExpansionPanelSummary className={classes.newEntryPanel}>
        <DiaryEntryModal
          className={classes.newEntryPanel}
          newEntry={true}
          medName={medName}
          med_id={diaryFocus}
        />
      </ExpansionPanelSummary>

      {filteredDiary.length === 0 ? (
        <p>You have no diary entries for {medName}.</p>
      ) : (
        filteredDiary.map(diaryEntry => (
          <DiaryEntry key={diaryEntry.id} diaryEntry={diaryEntry} />
        ))
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  diary: state.diary,
  meds: state.meds
});

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(DiaryEntries));
