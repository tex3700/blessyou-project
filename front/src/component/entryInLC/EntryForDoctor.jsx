import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Paper,
} from "@material-ui/core";
import useStyles from "./styles";
import LogIn from "./LogIn";

import ModalWindow from "../commonComponents/modalWindow/ModalWindow";

/////////передаем роль для сервера
const role = "is_doctor";
/////////
const EntryForDoctor = ({ setIsAuth }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleOpen = (value) => {
    setModalMessage(value);
    setOpen(true);
  };

  const handleClose = () => {
    setModalMessage("");
    setOpen(false);
  };

  return (
    <>
      <Box className={classes.componentHead}>
        <Container fixed>
          <Typography variant="h3">Вход в личный кабинет сотрудника</Typography>
        </Container>
      </Box>
      <LogIn setIsAuth={setIsAuth} handleOpen={handleOpen} role={role} />

      <ModalWindow
        open={open}
        onClose={handleClose}
        modalMessage={modalMessage}
      />
    </>
  );
};

export default EntryForDoctor;
