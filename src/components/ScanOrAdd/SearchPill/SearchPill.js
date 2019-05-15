import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useInput } from 'utilities/useInput';
import { shapes } from 'data/shapes';
import { colors } from 'data/colors';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

// import AddPillButton from '../Scan/SearchResults/AddPillButton';

const SearchPill = props => {
  const name = useInput();
  const imprint = useInput();
  const [color, setColor] = useState('');
  const [shape, setShape] = useState('');
  console.log(name.value, imprint.value, color, shape);
  useEffect(() => {}, [color, shape]);
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

      <FormControl>
        <InputLabel>color</InputLabel>
        <Select value={color} onChange={handleColorChange}>
          {colors.map(color => {
            return (
              <MenuItem key={color.id} value={color.name}>
                {color.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>shape</InputLabel>
        <Select value={shape} onChange={handleShapeChange}>
          {shapes.map(shape => {
            return (
              <MenuItem key={shape.id} value={shape.name}>
                {shape.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
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
