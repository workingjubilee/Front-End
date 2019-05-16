import React, { useState } from 'react';
import ImageCapture from './ImageCapture.js';
import { useToggle } from 'utilities/useToggle';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { uploadImage } from 'actions';
import rekogDummy from 'data/rekogDummy.json';
import parseMedStrengths from 'utilities/parseMedStrengths';

function ScanImage({ state, dispatch, uploadImage, history }) {
  const [photo, setPhoto] = useState(null);
  const [camera, toggleCamera] = useToggle(false);
  const photoSelect = event => setPhoto(event.target.files[0]);

  const upload = async () => {
    // if (!photo) {
    //   console.log('Need a photo!');
    //   return;
    // }
    // const photoEndpoint = `${process.env.REACT_APP_BACKEND}/api/upload`;
    // const imgData = new FormData();
    // imgData.append('image', photo, photo.filename);

    // uploadImage(imgData)
    //   .then(() => {
    //     history.push('/searchresults');
    //   })
    //   .catch(err => {
    //     console.error(err);
    //     alert(`Image upload failed. ${err}.`);
    //   });
    // Not sure if you still need this so I'll leave it
    // console.log('start');
    // const result = await axios
    //   .post(photoEndpoint, imgData)
    //   .catch(err => console.error(err));
    // console.log('end');
    dispatch({ type: 'analysisResults', payload: parseMedStrengths(rekogDummy) });
  };

  return (
    <>
      <div>
        <label htmlFor='upload-image-button'>
          <input
            type='file'
            accept='image/*'
            onChange={photoSelect}
            style={{ display: 'none' }}
            id='upload-image-button'
          />
          <Button component='span'>Choose Image</Button>
        </label>
        <Button onClick={upload}>Scan!</Button>
        <Button onClick={toggleCamera}>Take Photo</Button>
      </div>
      <div>
        {photo && (
          <img
            src={URL.createObjectURL(photo)}
            alt='upload preview'
            style={{ maxWidth: '400px' }}
          />
        )}
      </div>
      {camera ? (
        <ImageCapture setPhoto={setPhoto} state={state} dispatch={dispatch} />
      ) : null}
    </>
  );
}

export default ScanImage;
