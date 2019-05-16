import React, { useState } from 'react';
import ImageCapture from './ImageCapture.js';
import { useToggle } from 'utilities/useToggle';
// import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import rekogDummy from 'data/rekogDummy.json';
import parseMedStrengths from 'utilities/parseMedStrengths';

function ScanImage({ state, dispatch, ...props }) {
  const [photo, setPhoto] = useState(null);
  const [camera, toggleCamera] = useToggle(false);
  const photoSelect = event => setPhoto(event.target.files[0]);

  const magicClicker = event => {
    if (event.which === 32 || event.which === 13) {
      event.preventDefault();
      document.querySelector('#image-upload-button').click();
    }
  };

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
    const parsedDummy = parseMedStrengths(rekogDummy);
    dispatch({ type: 'analysisResults', payload: parsedDummy });
  };

  const { classes } = props;

  return (
    <>
      <div>
        <h4>Option 1 - Identify by uploading an image</h4>
        <div>
          <p>Image Upload</p>
          <div>
            <label htmlFor='image-upload-button'>
              <input
                accept='image/*'
                className={classes.input}
                id='image-upload-button'
                onChange={photoSelect}
                type='file'
              />
              <Button
                variant='contained'
                component='span'
                className={classes.button}
                onKeyDown={magicClicker}
              >
                Upload
              </Button>
            </label>
            {state && state.hasVideo && (
              <Button onClick={toggleCamera}>Take Photo</Button>
            )}
          </div>
        </div>

        <Button onClick={upload}>Identify</Button>
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

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
});

export default withStyles(styles)(ScanImage);
