import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

import useStyles from "./styles";
import { DialogContent, DialogContentText } from "@material-ui/core";

/////

const ModalWindow = ({ onClose, modalMessage, open }) => {
  const classes = useStyles();
  // const { onClose, modalMessage, open } = props;

  return (
    <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Что-то пошло не так</DialogTitle>
      <DialogContent>
        <DialogContentText>{modalMessage}</DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default ModalWindow;
