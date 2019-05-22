import React, { useState } from 'react';
// import { connect } from 'react-redux';
import AdditionalSearchInfo from './AdditionalSearchInfo';
import SearchResult from './SearchResult';
import ViewDetails from './ViewDetails';
import withStyles from '@material-ui/core/styles/withStyles';

import { tablet } from 'scss/mediaVariables';

const SearchResults = ({
  searchResults,
  handleAddPill,
  handleAddPillReminders,
  history,
  classes
}) => {
  const [pill, setPill] = useState(null);

  // Okay, these media queries are not working. 'Display: none' is just to prove this point.

  if (pill) {
    return (
      <ViewDetails
        pill={pill}
        handleAddPill={handleAddPill}
        handleAddPillReminders={handleAddPillReminders}
      />
    );
  } else {
    return (
      <div className={classes.mainStyle}>
        <div className={classes.leftStyle}>
          {searchResults &&
            searchResults
              .filter(result => {
                return (
                  result && result.strength && result.strength[0] && result
                );
              })
              .map(result => (
                <SearchResult
                  key={result.product_code + result.setid}
                  result={result}
                  handleAddPill={handleAddPill}
                  handleAddPillReminders={handleAddPillReminders}
                  setPill={setPill}
                  history={history}
                />
              ))}
        </div>
        <AdditionalSearchInfo />
      </div>
    );
  }
};

const styles = theme => ({
  mainStyle: {
    display: 'flex',
    // margin: '0 5rem',
    [`${tablet}`]: {
      display: 'none',
      margin: 'none'
    }
  },
  leftStyle: {
    maxWidth: '90%',
    marginRight: '5rem',
    [`${tablet}`]: {
      display: 'none',
      margin: 'none'
    }
  }
});

export default withStyles(styles)(SearchResults);
