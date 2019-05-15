import React, { useEffect } from 'react';
import ScanImage from './ScanImage';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary.js'

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
    <ErrorBoundary>
      <ScanImage state={state} dispatch={dispatch} />
    </ErrorBoundary>
  );
};

export default Scan;