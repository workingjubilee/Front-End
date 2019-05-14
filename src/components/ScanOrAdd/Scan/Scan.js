import React, { useEffect } from 'react';
import ScanImage from './ScanImage';

// Mount ScanImage here?

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
      <ScanImage state={state} dispatch={dispatch} />
    </div>
  );
};

export default Scan;