import React, { useState } from 'react';
// import { connect } from 'react-redux';
import AdditionalSearchInfo from './AdditionalSearchInfo';
import SearchResult from './SearchResult';

const SearchResults = ({
  searchResults,
  handleAddPill,
  handleAddPillReminders,
  setPill,
  pill
}) => {
  const style = {
    display: 'flex'
  };

  return (
    <div style={style}>
      <button>click ahaha</button>
      <div>
        {searchResults &&
          searchResults.map(result => (
            <SearchResult result={result} setPill={setPill} />
          ))}
      </div>
      <AdditionalSearchInfo />
    </div>
  );
};

export default SearchResults;
