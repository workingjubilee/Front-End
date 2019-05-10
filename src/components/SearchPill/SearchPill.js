import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useInput } from '../../utilities/useInput';
import { shapes } from '../data/shapes';
import { colors } from '../data/colors';
// import axios from 'axios';
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
  const [color, setColor] = useState(null);
  const [shape, setShape] = useState(null);
  const handleColorChange = e => {
    setColor(e.target.value);
  };
  const handleShapeChange = e => {
    setShape(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();

    // axios
    //   .post(`${process.env.REACT_APP_DS}`, {
    //     name,
    //     imprint,
    //     color,
    //     shape
    //   })
    //   .then(res => {
    //     console.log(res);
    //     props.setSearchResult(res.data);
    //   })
    //   .catch(err => console.error(err));
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
        <Select value={colors[color]} onChange={handleColorChange}>
          {colors.map(color => {
            return (
              <MenuItem key={color.id} value={color.id}>
                {color.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>shape</InputLabel>
        <Select value={shapes[shape]} onChange={handleShapeChange}>
          {shapes.map(shape => {
            return (
              <MenuItem key={shape.id} value={shape.id}>
                {shape.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <Button type='submit'>Search</Button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    pillOnDeck: state.pillOnDeck
  };
};

export default connect(
  mapStateToProps,
  null
)(SearchPill);
