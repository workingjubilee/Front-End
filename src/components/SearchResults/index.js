import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import SearchResult from './SearchResult';

const SearchResults = ({ history, searchResults }) => {
  useEffect(() => {
    console.log('step 3');
    // populate fields with data we get back from ds
    // err ^^^ maybe not
  });

  return (
    <div>
      {searchResults.map(result => {
        return <SearchResult history={history} result={result} />;
      })}
    </div>
  );
};

const mapStateToProps = state => ({
  searchResults: state.searchResults
});

export default connect(
  mapStateToProps,
  null
)(SearchResults);
