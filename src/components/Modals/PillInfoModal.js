import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMed } from '../../actions';
// import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

class PillInfoModal extends Component {
  state = {
    pill: {
      user_id: localStorage.getItem('userID'),
      med_name: '',
      med_color: '',
      med_shape: ''
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
          <TextField
            margin='normal'
            name='med_color'
            label='Pill Color'
            onChange={this.changeHandler}
            value={this.state.pill.med_color}
            required
            fullWidth
          />
          <TextField
            margin='normal'
            name='med_shape'
            label='Pill Shape'
            onChange={this.changeHandler}
            value={this.state.pill.med_shape}
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
