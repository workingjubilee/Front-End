import React, { useEffect, useState } from 'react';
import SearchResult from './SearchResult';

const SearchResults = () => {
  useEffect(() => {
    console.log('step 3');
    // populate fields with data we get back from ds
  });

  const [pills, setPills] = useState([
    {
      imageLink: 'https://www.drugs.com/images/pills/nlm/000090094.jpg',
      pillName: 'Xanax'
    },
    {
      imageLink: 'https://www.drugs.com/images/pills/nlm/000090094.jpg',
      pillName: 'Xanax'
    }
  ]);

  return (
    <div>
      {pills.map(pill => {
        return <SearchResult pill={pill} />;
      })}
    </div>
  );
};

export default SearchResults;
