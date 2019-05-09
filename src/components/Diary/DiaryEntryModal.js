import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const emails = ['username@gmail.com', 'user02@gmail.com'];

const styles = {
  card: {
    margin: 10,
    padding: '0 10 0 10',
    display: 'flex',
    justifyContent: 'space-between'
  },
  date: {
    fontSize: 25
  }
};

function SimpleDialog({ onClose, selectedValue, ...other }) {
  function handleClose() {
    onClose(selectedValue);
  }

  function handleListItemClick(value) {
    onClose(value);
  }

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby='simple-dialog-title'
      {...other}
    >
      <DialogTitle id='simple-dialog-title'>Set backup account</DialogTitle>
      <div>
        <List>
          {emails.map(email => (
            <ListItem
              button
              onClick={() => handleListItemClick(email)}
              key={email}
            >
              <ListItemText primary={email} />
            </ListItem>
          ))}
          <ListItem button onClick={() => handleListItemClick('addAccount')}>
            <ListItemText primary='add account' />
          </ListItem>
        </List>
      </div>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func,
  selectedValue: PropTypes.string
};

function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  function handleClickOpen() {
    setOpen(true);
  }

  const handleClose = value => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Typography variant='subtitle1'>Selected: {selectedValue}</Typography>
      <br />
      <Button variant='outlined' color='primary' onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}

export default withStyles(styles)(SimpleDialogDemo);
