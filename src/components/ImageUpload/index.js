import React from 'react';
import CloudIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';

const ImageUpload = ({ photoSelect, classes, uniqueID }) => {
  // Extremely breakable component, please be careful.
  // A uniqueID must be provided for the querySelector to work.
  // Do not have styling outside this depend on the uniqueID, it can break.

  const magicClicker = event => {
    if (event.which === 32 || event.which === 13) {
      event.preventDefault();
      document.querySelector(`#${uniqueID}`).click();
    }
  }; // Makes accessible "clicking" possible.

  return (
    <div className='upload-button-container'>
      <CloudIcon />
      <label htmlFor={uniqueID}>
        <input
          accept='image/*'
          className={classes.input}
          id={uniqueID}
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

export default ImageUpload;