import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useInput } from 'utilities/useInput';
import { shapes } from 'data/shapes';
import { colors } from 'data/colors';
// import axios from 'axios';
// import Typography from '@material-ui/core/Typography';
// import Modal from '@material-ui/core/Modal';
// import { withStyles } from '@material-ui/core/styles';
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
  const [color, setColor] = useState(0);
  const [shape, setShape] = useState(0);
  useEffect(() => {
    console.log(shapes[shape].name, colors[color].name);
  }, [color, shape]);
  const handleColorChange = e => {
    setColor(e.target.value);
  };
  const handleShapeChange = e => {
    setShape(e.target.value);
  };
  const handleAddPill = e => {
    e.preventDefault()
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
      <div>
        <button
          onClick={e => {
            e.preventDefault();
            props.setStatus('search');
          }}
        >
          search pill
        </button>
        <button
          onClick={e => {
            e.preventDefault();
            props.setStatus('add');
          }}
        >
          add manually
        </button>
      </div>
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
        <Select value={`${colors[color].name}`} onChange={handleColorChange}>
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
        <Select value={`${shapes[shape].name}`} onChange={handleShapeChange}>
          {shapes.map(shape => {
            return (
              <MenuItem key={shape.id} value={shape.id}>
                {shape.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      {props.status === 'search' ? (
        <Button type='submit'>Search</Button>
      ) : (
        <Button onClick={handleAddPill}>Add</Button>
      )}
      {/* <Modal
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        open={open}
        onClose={close}
      >
        <div style={getModalStyle()} className={classes.paper}>
          <Typographjy variant='h6' id='modal-title'>
            Text in a modal
          </Typography>
          <Typography variant='subtitle1' id='simple-modal-description'>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <SimpleModalWrapped />
        </div>
      </Modal> */}
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
