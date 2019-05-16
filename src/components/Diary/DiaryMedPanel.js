import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MuiChip from '@material-ui/core/Chip';
import classNames from 'classnames';

import DiaryEntriesPanels from './DiaryEntriesPanels';

const Chip = withStyles({})(props => <MuiChip {...props} />);

Chip.muiName = 'Chip';

const ExpansionPanel = withStyles({
  expanded: {
    '&$expanded': {
      marginBottom: '20px'
    }
  }
})(props => <MuiExpansionPanel {...props} />);

ExpansionPanel.muiName = 'ExpansionPanel';

const ExpansionPanelDetails = withStyles({
  root: {
    padding: '0',
    backgroundColor: 'rgba(0,0,0,.03)'
  }
})(props => <MuiExpansionPanelDetails {...props} />);

ExpansionPanelDetails.muiName = 'ExpansionPanelDetails';

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0,0,0,.03)',
    borderBottom: '1px solid rgba(0,0,0,.125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56
    }
  },
  content: {
    '&$expanded': {
      margin: '12px 0'
    },
    justifyContent: 'space-between'
  },
  expanded: {
    margin: '20px 0 20px 0',
    border: 'none'
  },
  expandIcon: {
    margin: '0px'
  }
})(props => <MuiExpansionPanelSummary {...props} />);

ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';

const styles = {
  root: {
    width: '100%',
    border: 'none'
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    flexBasis: '33.33%',
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: 18,
    color: 'secondary'
  },
  grey: {
    background: 'DarkGrey',
    color: 'white'
  },
  green: {
    background: 'LimeGreen',
    color: 'white'
  }
};

function DiaryMedPanel({ classes, med, changeFocus, diaryFocus, diaryCount }) {
  const [expanded, setExpanded] = React.useState(null);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    changeFocus(med.id);
  };

  React.useEffect(() => {
    if (diaryFocus !== med.id) {
      setExpanded(false);
    }
    // eslint-disable-next-line
  }, [diaryFocus]);

  return (
    <div className={classes.root}>
      <ExpansionPanel
        expanded={expanded === med.id}
        onChange={handleChange(med.id)}
      >
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classNames(classes.heading)}>
            {med.med_name}
          </Typography>
          <Chip
            className={classNames(
              expanded === med.id ? classes.green : classes.grey
            )}
            label={`${diaryCount} Diary ${
              diaryCount === 1 ? 'Entry' : 'Entries'
            }`}
          />
          <Typography className={classNames(classes.secondaryHeading)}>
            View/Add Entries
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <DiaryEntriesPanels diaryFocus={med.id} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default withStyles(styles)(DiaryMedPanel);
