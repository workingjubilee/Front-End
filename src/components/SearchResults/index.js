import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AdditionalSearchInfo from './';
import SearchResult from './SearchResult';

const SearchResults = ({ history, searchResults }) => {
  useEffect(() => {
    console.log('step 3');
    // populate fields with data we get back from ds
    // err ^^^ maybe not
  });

  const style = {};

  return (
    <div style={style}>
      <div>
        {searchResults.map(result => {
          return <SearchResult history={history} result={result} />;
        })}
      </div>
      <AdditionalSearchInfo />
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
