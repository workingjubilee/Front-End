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
import Input from '@material-ui/core/Input';
// import Card from '@material-ui/core/Card';
// import NativeSelect from '@material-ui/core/NativeSelect';

const StepOne = props => {
  const handleShapeChange = e => {
    props.updateShape(e.target.options[e.target.selectedIndex].id);
    console.log(shapes[e.target.options[e.target.selectedIndex].id]);
  };
  const handleColorChange = e => {
    // props.updateColor(e.target.options[e.target.selectedIndex].id);
    // console.log(colors[e.target.options[e.target.selectedIndex].id]);
    console.log(e)
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

      {/* <TextField
        select
        label='pill color'
        onChange={handleColorChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>color</InputAdornment>
          )
        }}
      >
        {colors.map(color => (
          <MenuItem key={color.id} value={color.name}>
            {color.name}
          </MenuItem>
        ))}
      </TextField> */}

      {/* <TextField
        select
        label='pill shape'
        onChange={handleShapeChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>shape</InputAdornment>
          )
        }}
      >
        {shapes.map(shape => (
          <MenuItem key={shape.id} value={shape.name}>
            {shape.name}
          </MenuItem>
        ))}
      </TextField> */}

      <FormControl>
        <InputLabel htmlFor='age-simple'>Age</InputLabel>
        <Select
          // native
          // value={this.state.age}
          // onChange={handleColorChange}
          inputProps={{
            name: 'age',
            id: 'age-simple'
          }}
        >
        {colors.map(color => {
          return <MenuItem>{color.name}</MenuItem>
        })}
          {/* <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>

      <button value='next' type='submit' onClick={handleSubmit}>
        next
      </button>
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
