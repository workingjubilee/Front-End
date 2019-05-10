import React, { useState } from 'react';
import SearchPill from '../SearchPill/SearchPill';
import Scan from '../Scan/Scan.js';
import SearchResults from '../Scan/SearchResults/';

const AddOrScan = ({ location, history }) => {
  const [add, setAdd] = useState(location.pathname === '/add' ? true : false);

  const [searchResults, setSearchResults] = useState([]);

  console.log(location);

  console.log('in the container!');

  if (searchResults.length > 0) {
    return <SearchResults searchResults={searchResults} />;
  }

  return (
    <section>
      {add === false ? (
        <Scan add={add} setAdd={setAdd} />
      ) : (
        <SearchPill history={history} setSearchResults={setSearchResults} />
      )}
      {add ? '*' : ''}
    </section>
  );
};

export default AddOrScan;
