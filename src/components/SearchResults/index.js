import React, { useState } from 'react';
// import { connect } from 'react-redux';
import AdditionalSearchInfo from './AdditionalSearchInfo';
import SearchResult from './SearchResult';

const SearchResults = ({ searchResults }) => {
  const style = {
    display: 'flex'
  };

  const pillTemplate = {
    user_id: localStorage.getItem('userID'),
    med_name: '',
    med_color: '',
    med_shape: '',
    med_strength: 0,
    med_strength_unit: '',
    med_dose: 0,
    med_dose_unit: ''
  };

  const [pill, setPill] = useState(pillTemplate);

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
