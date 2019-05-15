import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMed } from '../../actions';
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
import { shapes } from 'data/shapes';
import { colors } from 'data/colors';

class PillInfoModal extends Component {
  state = {
    pill: {
      user_id: localStorage.getItem('userID'),
      med_name: '',
      med_color: '',
      med_shape: '',
      med_strength: '',
      med_strength_unit: 0
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
    const { open, handleClose, handleConfirm } = this.props;
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
            value={this.state.pill.med_name}
            required
            fullWidth
          />
          <InputLabel>color</InputLabel>
          <Select
            value={this.state.pill.med_color}
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
          <InputLabel>shape</InputLabel>
          <Select
            value={this.state.pill.med_shape}
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
            value={this.state.pill.med_strength}
            required
            fullWidth
          />
          <TextField
            margin='normal'
            name='med_strength_unit'
            label='Med Strength Unit'
            onChange={this.changeHandler}
            value={this.state.pill.med_strength_unit}
            required
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button color='primary' onClick={handleClose}>
            Cancel
          </Button>
          <Button
            color='primary'
            onClick={() => handleConfirm(this.state.pill)}
          >
            Confirm Pill
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error
});

export default connect(
  mapStateToProps,
  { addMed }
)(PillInfoModal);
