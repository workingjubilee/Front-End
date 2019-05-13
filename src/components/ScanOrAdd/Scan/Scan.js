import React, { useEffect } from 'react';
import PhotoUpload from './PhotoUpload';

// Mount PhotoUpload here?

// if enumerateDevices, then

const Scan = ({state, dispatch}) => {

  useEffect(() => {
    const checkVideo = async () => {
      let devices = await navigator.mediaDevices.enumerateDevices();
      dispatch({
        type: "hasVideo",
        payload: devices.filter(device => device.kind === "videoinput")
          ? true
          : false
      })
    };
    checkVideo();
  }, [dispatch]);

  return (
    <div>
      <PhotoUpload />
    </div>
  );
};

export default Scan;