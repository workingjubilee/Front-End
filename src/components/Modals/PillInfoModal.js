import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMed } from 'actions';
// import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { shapes } from 'data';
import { colors } from 'data';

class PillInfoModal extends Component {
  state = {
    pill: {
      user_id: localStorage.getItem('userID'),
      med_name: '',
      med_color: '',
      med_shape: '',
      med_strength: 0,
      med_strength_unit: '',
      med_dose: 0,
      med_dose_unit: ''
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
    const {
      open,
      handleClose,
      handleAddPill,
      handleAddPillReminders
    } = this.props;
    const {
      med_name,
      med_color,
      med_shape,
      med_strength,
      med_strength_unit,
      med_dose,
      med_dose_unit
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
            {colors.map(color => {
              return (
                <MenuItem key={color.id} value={color.name}>
                  {color.name}
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
            {shapes.map(shape => {
              return (
                <MenuItem key={shape.id} value={shape.name}>
                  {shape.name}
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
          <TextField
            margin='normal'
            name='med_dose'
            label='Med Dosage'
            type='number'
            onChange={this.changeHandler}
            value={med_dose}
            required
            fullWidth
          />
          <InputLabel>Med Dose Unit</InputLabel>
          <Select
            value={med_dose_unit}
            onChange={this.changeHandler}
            name='med_dose_unit'
          >
            <MenuItem value={'IU'}>{'IU'}</MenuItem>
            <MenuItem value={'mcg'}>{'mcg'}</MenuItem>
            <MenuItem value='mg'>{'mg'}</MenuItem>
            <MenuItem value={'g'}>{'g'}</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button color='primary' onClick={handleClose}>
            Cancel
          </Button>
          <Button
            color='primary'
            onClick={() => handleAddPill(this.state.pill)}
          >
            Add Pill
          </Button>
          <Button
            color='primary'
            onClick={() => handleAddPillReminders(this.state.pill)}
          >
            Add Pill With Reminders
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

const mapStateToProps = state => ({
  error: state.medsReducer.error
});

export default connect(
  mapStateToProps,
  { addMed }
)(PillInfoModal);
