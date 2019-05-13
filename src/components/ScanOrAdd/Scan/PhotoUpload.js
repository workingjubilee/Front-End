import React, { useState } from 'react';
import ImageCapture from './ImageCapture.js';
import axios from 'axios';
import Button from '@material-ui/core/Button';

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

    axios.post(photoEndpoint, imgData)
      .then(data => console.log(data))
      .catch(error => console.log(error));
  };

  return (
    <>
      <label htmlFor="upload-image-button">
        <input
          type='file'
          accept='image/*'
          onChange={photoSelect}
          style={{ display: 'none' }}
          id="upload-image-button"
          multiple
        />
        <Button component="span">
          Upload Picture?
        </Button>
      </label>
      <Button onClick={toggleCamera}>take photo</Button>
      {displayCamera ? <ImageCapture /> : null}
    </>
  );
};

export default PhotoUpload;
