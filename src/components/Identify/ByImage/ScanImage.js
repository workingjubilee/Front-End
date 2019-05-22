import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { useToggle } from 'utilities/useToggle';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import parseMedStrengths from 'utilities/parseMedStrengths';
import SpinWhile from 'components/Spinner/SpinWhile';
import ImageUploader from './ImageUpload';

function ScanImage({ setData, classes, hasVideo, ...props }) {
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useToggle(false);

  const upload = async () => {
    if (!photo) {
      console.log('Need a photo!');
      return;
    }
    const photoEndpoint = `${process.env.REACT_APP_BACKEND}/api/upload`;
    const postData = new FormData();
    postData.append('image', photo);

    setLoading();
    try {
      const results = await axios.post(photoEndpoint, postData);
      const parsedResults = parseMedStrengths(results.data);
      setData(parsedResults);
      props.history.push(`${props.match.url}/results`);
    } catch (error) {
      console.error(error);
      setLoading();
    }
  };

  return (
    <section className='option1-container'>
      <div className='image-container'>
        <h4>
          <strong>Option 1 - </strong>Identify by uploading pill image
        </h4>
        <div className='image-upload'>
          <SpinWhile still={loading}>
            <h5>Pill Image Upload</h5>
            <ImageUploader
              photo={photo}
              setPhoto={setPhoto}
              buttonText='front image of pill'
              subText='or drag and drop them here'
            />
            <Button onClick={upload} className='identify-button'>
              Identify Pill
            </Button>
          </SpinWhile>
        </div>
      </div>
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

export default withRouter(ScanImage);
