import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import moment from 'moment';

import DiaryEntryModal from './DiaryEntryModal';

const ExpansionPanelSummary = withStyles({
  root: {
    padding: '0px 20px 0px 20px',
    backgroundColor: 'rgba(0,0,0,.03)',
    borderBottom: '1px solid rgba(0,0,0,.125)',
    marginTop: 3,
    minHeight: 56
  },
  content: {
    '&> :last-child': {
      padding: '0px'
    },
    justifyContent: 'space-between'
  }
})(props => <MuiExpansionPanelSummary {...props} />);

ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';

const styles = {
  root: {
    width: '100%'
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center'
  },
  secondaryHeading: {
    fontSize: 18,
    color: 'secondary'
  }
};

function DiaryEntryPanel({ classes, diaryEntry }) {
  return (
    <div className={classes.root}>
      <ExpansionPanelSummary>
        <Typography className={classNames(classes.heading)}>
          {moment(parseInt(diaryEntry.diary_date)).format('ddd M/D/YY h:mma')}
        </Typography>
        <DiaryEntryModal
          className={classNames(classes.secondaryHeading)}
          diaryEntry={diaryEntry}
          newEntry={false}
        />
      </ExpansionPanelSummary>
    </div>
  );
}

export default withStyles(styles)(DiaryEntryPanel);
