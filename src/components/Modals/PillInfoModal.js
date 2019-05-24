import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMed } from 'actions';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { valid_shapes as shapes } from 'data/rxdata.json';
import { valid_colors as colors } from 'data/rxdata.json';

class PillInfoModal extends Component {
  state = {
    pill: {
      user_id: localStorage.getItem('userID'),
      med_name: '',
      med_color: '',
      med_shape: '',
      med_strength: '',
      med_strength_unit: ''
    }
  };
  changeHandler = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      pill: {
        ...this.state.pill,
        [e.target.name]: e.target.value
      }
    });
  };
  render() {
    const { open, handleClose, addPill, classes } = this.props;
    const {
      med_name,
      med_color,
      med_shape,
      med_strength,
      med_strength_unit
    } = this.state.pill;
    return (
      <Dialog
        aria-labelledby='add-pill'
        aria-describedby='alert-dialog-description'
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <DialogTitle id='add-pill'>{'Pill Info'}</DialogTitle>
        <DialogContent>
          <TextField
            margin='normal'
            name='med_name'
            label='Pill Name'
            onChange={this.changeHandler}
            value={med_name}
            required
            fullWidth
          />
          <InputLabel>Color</InputLabel>
          <Select
            value={med_color}
            onChange={this.changeHandler}
            name='med_color'
          >
            {colors.map((color, index) => {
              return (
                <MenuItem key={index} value={color}>
                  {color}
                </MenuItem>
              );
            })}
          </Select>
          <InputLabel>Shape</InputLabel>
          <Select
            value={med_shape}
            onChange={this.changeHandler}
            name='med_shape'
          >
            {shapes.map((shape, index) => {
              return (
                <MenuItem key={index} value={shape}>
                  {shape}
                </MenuItem>
              );
            })}
          </Select>
          <TextField
            margin='normal'
            name='med_strength'
            label='Med Strength'
            type='number'
            onChange={this.changeHandler}
            value={med_strength}
            required
            fullWidth
          />
          <InputLabel>Med Strength Unit</InputLabel>
          <Select
            value={med_strength_unit}
            onChange={this.changeHandler}
            name='med_strength_unit'
          >
            <MenuItem value={'IU'}>{'IU'}</MenuItem>
            <MenuItem value={'mcg'}>{'mcg'}</MenuItem>
            <MenuItem value='mg'>{'mg'}</MenuItem>
            <MenuItem value={'g'}>{'g'}</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions className={classes.actions}>
          <Button
            color='secondary'
            variant='contained'
            className={`${classes.addMed} ${classes.button}`}
            onClick={() => addPill(this.state.pill)}
          >
            Add to medication list
          </Button>
          <Button
            color='primary'
            variant='contained'
            className={`${classes.addRem} ${classes.button}`}
            onClick={() => addPill(this.state.pill, 'adddosage')}
          >
            Add and schedule dosage
          </Button>
          <Button
            variant='contained'
            className={`${classes.cancel} ${classes.button}`}
            onClick={handleClose}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

const styles = theme => ({
  actions: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: 480,
    alignSelf: 'center'
  },
  addMed: {
    width: 210
  },
  addRem: {
    width: 230
  },
  cancel: {
    backgroundColor: 'black',
    color: 'white',
    width: 120,
    margin: '46px auto 38px auto'
  },
  button: {
    textTransform: 'none',
    fontWeight: 300,
    fontSize: '1rem'
  }
});

const StyledModal = withStyles(styles)(PillInfoModal);

export default connect(
  null,
  { addMed }
)(StyledModal);
