import React from 'react';
import PhotoUpload from './PhotoUpload';

// Mount PhotoUpload here?

const Scan = ({ add, setAdd }) => {
  return (
    <div>
      <PhotoUpload />
      { add ? "!" : "" }
    </div>
  );
};

export default Scan;
