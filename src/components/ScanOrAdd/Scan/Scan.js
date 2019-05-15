import React, { useEffect } from 'react';
import ScanImage from './ScanImage';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary.js'

export default function Scan({state, dispatch}) {
  useEffect(() => {
    const checkVideo = async () => {
      let devices;
      try {
        devices = await navigator.mediaDevices.enumerateDevices();
        dispatch({
          type: "hasVideo",
          payload: devices.filter(device => device.kind === "videoinput")
            ? true
            : false
        })
      } catch(error) {
        console.error(error);
      }
    };
    checkVideo();
  }, [dispatch]);

  return (
    <ErrorBoundary>
      <ScanImage state={state} dispatch={dispatch} />
    </ErrorBoundary>
  );
};