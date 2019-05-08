import React from 'react';
import { connect } from 'react-redux';
import { shapes } from '../../data/shapes';
import { colors } from '../../data/colors';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const StepOne = props => {
  const handleColorChange = e => {
    props.updateColor(e.target.value);
    console.log(e.target);
  };
  const handleShapeChange = e => {
    props.updateShape(e.target.value);
    console.log(e.target);
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.nextStep();
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label='pill name'
        value={props.name.value}
        onChange={props.name.updateValue}
        margin='normal'
      />

      <TextField
        label='imprint'
        value={props.imprint.value}
        onChange={props.imprint.updateValue}
        margin='normal'
      />

      <FormControl>
        <InputLabel>color</InputLabel>
        <Select value={colors[props.color]} onChange={handleColorChange}>
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
        <Select value={shapes[props.shape]} onChange={handleShapeChange}>
          {shapes.map(shape => {
            return (
              <MenuItem key={shape.id} value={shape.id}>
                {shape.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <Button type='submit'>next</Button>
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
)(StepOne);
