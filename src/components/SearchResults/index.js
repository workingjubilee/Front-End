import React from 'react';
// import { connect } from 'react-redux';
import AdditionalSearchInfo from './AdditionalSearchInfo';
import SearchResult from './SearchResult';

const SearchResults = ({
  searchResults,
  handleAddPill,
  handleAddPillReminders
  // setPill,
  // pill
}) => {
  const style = {
    display: 'flex',
    maxWidth: '99%'
  };

  return (
    <div style={style}>
      <div>
        {searchResults &&
          searchResults
            .filter(result => {
              return result && result.strength && result.strength[0] && result;
            })
            .map(result => (
              <SearchResult
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
