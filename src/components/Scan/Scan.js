import React from 'react';
import PhotoUpload from './PhotoUpload';

// Mount PhotoUpload here?

const Scan = ({ add, setAdd }) => {
  return (
    <div>
      <PhotoUpload />
      { add ? "!" : "" }
      <button onClick={() => setAdd(true)}>Test Me!</button>
    </div>
  );
};

export default Scan;
