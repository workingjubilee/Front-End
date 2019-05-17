import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useInput } from 'utilities/useInput';
import { valid_shapes as shapes } from 'data/rxdata.json';
import { valid_colors as colors } from 'data/rxdata.json';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dropdown from './Dropdown';

// import AddPillButton from '../Scan/SearchResults/AddPillButton';

const SearchPill = props => {
  const name = useInput();
  const imprint = useInput();
  const [color, setColor] = useState('');
  const [shape, setShape] = useState('');

  // useEffect(() => {}, [color, shape]);
  const handleColorChange = e => {
    setColor(e.target.value);
  };
  const handleShapeChange = e => {
    setShape(e.target.value);
  };
  const handleAddPill = e => {
    e.preventDefault();
  };
  const handleSubmit = e => {
    e.preventDefault();

    props.setSearchResults([
      {
        pillName: name.value,
        imageLink:
          'https://www.drugs.com/images/pills/mmx/t110118f/tizanidine-hydrochloride.jpg'
      }
    ]);
    // Search for pill
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Option 2 - Identify by direct input</h4>
      <TextField
        label='pill name'
        value={name.value}
        onChange={name.updateValue}
        margin='normal'
      />

      <TextField
        label='imprint'
        value={imprint.value}
        onChange={imprint.updateValue}
        margin='normal'
      />

      <Dropdown itemName="color" itemList={colors} item={color} setItem={setColor} />
      <Dropdown itemName="shape" itemList={shapes} item={shape} setItem={setShape} />

      <Button onClick={handleAddPill} variant='contained'>
        Identify Pill
      </Button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    pillOnDeck: state.medsReducer.pillOnDeck
  };
};

export default connect(
  mapStateToProps,
  null
)(SearchPill);
