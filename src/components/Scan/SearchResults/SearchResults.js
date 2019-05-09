import React, { useEffect } from 'react';
import SearchResult from './SearchResult';

const SearchResults = ({ classes }) => {
  useEffect(() => {
    console.log('step 3');
    // populate fields with data we get back from ds
  });
  return (
    <div>
      <SearchResult classes={classes} />
      <SearchResult classes={classes} />
      <SearchResult classes={classes} />
    </div>
  );
};

export default SearchResults;
