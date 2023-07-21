import React, { FC } from "react";
import styles from "./DialogBox.module.scss";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

interface DialogBoxProps {
  isOpen: boolean;
  onClose: () => void;
}

const DialogBox: FC<DialogBoxProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    // <div className={styles.dialogOverlay}>
    //   <div className={styles.dialogContent}>
    //     <h2>Dialog Box</h2>
    //     <p>This is a simple dialog box.</p>
    //     <button onClick={onClose}>Close</button>
    //   </div>
    // </div>

<Dialog onClose={onClose} open={isOpen}>
<DialogTitle id="alert-dialog-title">
          {"Add New Task"}

        </DialogTitle>
        <DialogActions>

        <TextField id="standard-basic" label="Task Name" variant="standard" />

          <Button onClick={onClose}>Disagree</Button>
          <Button onClick={onClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
</Dialog>

  );
};

export default DialogBox;
