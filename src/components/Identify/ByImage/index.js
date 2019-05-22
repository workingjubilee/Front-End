import React from 'react';
// import { useToggle } from 'utilities/useToggle';
import ScanImage from './ScanImage';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary.js';

export default function ByImage(props) {
  // const [hasVideo, setHasVideo] = useToggle();
  // Scan Detection
  // useEffect(() => {
  //   const checkVideo = async () => {
  //     let devices;
  //     if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
  //       try {
  //         devices = await navigator.mediaDevices.enumerateDevices();
  //         devices.filter(device => device.kind === 'videoinput');
  //         if (hasVideo === null && devices.length >) {
  //           setHasVideo(true);
  //         }
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     }
  //   };
  //   checkVideo();
  // }, []);

  // console.log(hasVideo);

  return (
    <ErrorBoundary>
      <ScanImage {...props} />
    </ErrorBoundary>
  );
}
