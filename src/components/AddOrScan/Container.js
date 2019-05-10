import React, { useState } from 'react';
import SearchPill from '../SearchPill/SearchPill';
import Scan from '../Scan/Scan.js';
import SearchResults from '../Scan/SearchResults/';
import AddDosage from '../AddDosage/AddDosage';

const AddOrScan = ({ location, history }) => {
  const [add, setAdd] = useState(location.pathname === '/add' ? true : false);

  const [dosageDisplay, setDosageDisplay] = useState(false);

  const [searchResults, setSearchResults] = useState([]);

  const [pill, setPill] = useState(null);

  console.log(location);

  console.log('in the container!');

  if (dosageDisplay) {
    return (
      <AddDosage
      name={pill.pillName}
      // imprint={}
      // color={}
      // shape={}
      />
    );
  }

  if (searchResults.length > 0) {
    return (
      <SearchResults
        setPill={setPill}
        searchResults={searchResults}
        setDosageDisplay={setDosageDisplay}
      />
    );
  }

  return (
    <section>
      {add === false ? (
        <Scan add={add} setAdd={setAdd} />
      ) : (
        <SearchPill
          history={history}
          setSearchResults={setSearchResults}
          setDosageDisplay={setDosageDisplay}
        />
      )}
      {add ? '*' : ''}
    </section>
  );
};

export default AddOrScan;
