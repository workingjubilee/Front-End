import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { FormHelperText } from '@material-ui/core';

const ExpandedSearchResultsModal = () => {
  const [open, setOpen] = useState(false);

  function getModalStyle() {
    return {
      left: '90%',
      width: '90vw',
      height: '50vh',
      backgroundColor: 'white'
    };
  }

  return (
    <div>
      <Button
        onClick={e => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        See More Info
      </Button>
      <Modal
        open={open}
        onClose={e => {
          e.preventDefault();
          setOpen(false);
        }}
      >
        <div style={getModalStyle()}>
          <p>Some text</p>
        </div>
      </Modal>
    </div>
  );
};

export default ExpandedSearchResultsModal;
