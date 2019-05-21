import React, { useState } from 'react';
// import ImageCapture from './ImageCapture.js';
// import { useToggle } from 'utilities/useToggle';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import parseMedStrengths from 'utilities/parseMedStrengths';
import FileInput from './FileInput';

function ScanImage({ setData, classes, ...props }) {
  const [photo, setPhoto] = useState(null);
  // const [camera, toggleCamera] = useToggle(false);
  const photoSelect = event => setPhoto(event.target.files[0]);

  const upload = async () => {
    if (!photo) {
      console.log('Need a photo!');
      return;
    }
    const photoEndpoint = `${process.env.REACT_APP_BACKEND}/api/upload`;
    const imgData = new FormData();
    imgData.append('image', photo, photo.filename);

    console.log('start');
    try {
      const results = await axios.post(photoEndpoint, imgData);
      const parsedResults = parseMedStrengths(results.data);
      setData(parsedResults);
      // return dispatch({ type: 'analysisResults', payload: parsedResults });
    } catch (error) {
      console.error(error);
    }
    console.log('end');
  };

  return (
    <section className='option1-container'>
      <div className='image-container'>
        <h4>Option 1 - Identify by uploading pill image</h4>
        <div className='image-upload'>
          <h5>Pill Image Upload</h5>
          <FileInput classes={classes} photoSelect={photoSelect} />
          {/*state && state.hasVideo && (
            <Button style={{ display: 'none' }} onClick={toggleCamera}>
              Take Photo
            </Button>
          )*/}
          <Button onClick={upload} className='identify-button'>
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
      {/*camera ? (
        <ImageCapture setPhoto={setPhoto} />
      ) : null*/}
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
  input: {
    display: 'none'
  }
});

export default withStyles(styles)(ScanImage);
