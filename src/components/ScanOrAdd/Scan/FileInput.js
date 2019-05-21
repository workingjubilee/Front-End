import React from 'react';
import CloudIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';

const FileInput = ({ photoSelect, classes }) => {
  // Extremely breakable component, please be careful.

  const magicClicker = event => {
    if (event.which === 32 || event.which === 13) {
      event.preventDefault();
      document.querySelector('#image-upload-button').click();
    }
  };

  return (
    <div className='upload-button-container'>
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
          /* If you think this span is merely stylistic... */
          component='span'
          /* ...think again. */
          className='upload-button'
          onKeyDown={magicClicker}
        >
          Upload front image of pill
        </Button>
      </label>
      <p>or drag and drop them here</p>
    </div>
  )
};

export default FileInput;