import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const [textFieldValue, setTextFieldValue] = useState("");

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleOk() {
    setOpen(false);
    setTextFieldValue(choosenValue );
  }

  let choosenValue = "";

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Pick one
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Hi</DialogTitle>
        <DialogContent>
          <DialogContentText>
            What's your favorite animal?
          </DialogContentText>
          <TextField  onChange={(e) => { choosenValue = e.target.value; }}
            autoFocus
            margin="dense"
            id="name"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No Thanks
          </Button>
          <Button onClick={handleOk} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
      <p>You chose: {textFieldValue}</p>
    </div>
  );
}

export default FormDialog;
