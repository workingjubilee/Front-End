import React from 'react';
// import { connect } from 'react-redux';
import AdditionalSearchInfo from './AdditionalSearchInfo';
import SearchResult from './SearchResult';

const SearchResults = ({ searchResults }) => {
  const style = {};

  return (
    <div style={style}>
      <div>
        {searchResults &&
          searchResults.map(result => <SearchResult result={result} />)}
      </div>
      <AdditionalSearchInfo />
    </div>
  );
};

export default SearchResults;
