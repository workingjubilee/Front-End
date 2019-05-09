import React, { useState } from 'react';
import ImageCapture from './ImageCapture.js';
import axios from 'axios';

const PhotoUpload = props => {
  const [photo, setPhoto] = useState(null);

  const [displayCamera, toggleDisplayCamera] = useState(false);

  const photoSelect = event => {
    setPhoto(event.target.files[0]);
  };

  const toggleCamera = () => {
    toggleDisplayCamera(!displayCamera);
  };

  const photoUpload = () => {
    const photoEndpoint = `${process.env.REACT_APP_BACKEND}/api/upload`;
    const imgData = new FormData();
    imgData.append('image', photo);
    // const axiosConfig = {
    //   headers: {
    //     'Content-Type': 'multipart/form-data'
    //   }
    // };
    axios.post(photoEndpoint, imgData)
      .then(data => console.log(data))
      .catch(error => console.log(error));
  };

  return (
    <>
      <input
        type='file'
        accepts='image/*'
        onChange={photoSelect}
      />
      <button onClick={photoUpload}>Upload Picture?</button>
      <button onClick={toggleCamera}>take photo</button>
      {displayCamera ? <ImageCapture /> : null}
    </>
  );
};

export default PhotoUpload;
