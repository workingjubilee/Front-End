import React from 'react';
// import { connect } from 'react-redux';
import AdditionalSearchInfo from './AdditionalSearchInfo';
import SearchResult from './SearchResult';

import { mobile, tablet } from 'scss/mediaVariables';

const SearchResults = ({
  searchResults,
  handleAddPill,
  handleAddPillReminders
  // setPill,
  // pill
}) => {
  const style = {
    display: 'flex',
    margin: '0 5rem',
    [`${tablet}`]: {
      display: 'none',
      margin: 'none'
    }
  };

  // Okay, these media queries are not working. 'Display: none' is just to prove this point.
  const leftStyle = {
    maxWidth: '90%',
    marginRight: '5rem',
    [`${tablet}`]: {
      display: 'none',
      margin: 'none'
    }
  };

  return (
    <div style={style}>
      <div style={leftStyle}>
        {searchResults &&
          searchResults
            .filter(result => {
              return result && result.strength && result.strength[0] && result;
            })
            .map(result => (
              <SearchResult
                key={result.product_code + result.setid}
                result={result}
                handleAddPill={handleAddPill}
                handleAddPillReminders={handleAddPillReminders}
              />
            ))}
      </div>
      <AdditionalSearchInfo />
    </div>
  );
};

export default SearchResults;
