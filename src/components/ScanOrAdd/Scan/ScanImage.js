import React, { useState } from 'react';
import ImageCapture from './ImageCapture.js';
import { useToggle } from 'utilities/useToggle';
// import axios from 'axios';
import CloudIcon from '@material-ui/icons/CloudUpload';
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
    <section className='option1-container'>
      <div className='image-container'>
        <h4>Option 1 - Identify by uploading pill image</h4>
        <div className='image-upload'>
          <h5>Pill Image Upload</h5>
          <div className='upload-button'>
            <CloudIcon />
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
                className={classes.button}
                onKeyDown={magicClicker}
              >
                Upload front image of pill
              </Button>
            </label>
            <p>or drag and drop them here</p>
          </div>
          {/* commenting out for now, not sure where this goes in design{state && state.hasVideo && (
            <Button onClick={toggleCamera}>Take Photo</Button>
          )} */}
          <Button onClick={upload} className={classes.button}>
            Identify Pill
          </Button>
        </div>
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
      <section className='directions'>
        <h2>Steps To Identify Pill</h2>
        <h3>OPTION - 1</h3>
        <article>
          <ol>
            <li>
              Upload front image of your pill displaying numbers and/or letters.
            </li>
            <li>
              Upload back image of your pill <span>(optional).</span>
            </li>
            <li>
              Click <strong>"Identify Pill"</strong> to get details about your
              pill.
            </li>
          </ol>
        </article>
      </section>
    </section>
  );
}

const styles = theme => ({
  button: {
    color: 'white',
    backgroundColor: '#969696'
  },
  input: {
    display: 'none'
  }
});

export default withStyles(styles)(ScanImage);
