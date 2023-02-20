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
import SingIn from "./SingIn";
import { apiRequest } from "../../api";
import ModalWindow from "../commonComponents/modalWindow/ModalWindow";

/////////

/////////
const EntryPage = ({ setIsAuth }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <>
      <Box className={classes.componentHead}>
        <Container fixed>
          <Typography variant="h3">Вход в личный кабинет пациента</Typography>
        </Container>
      </Box>
      <LogIn setIsAuth={setIsAuth} setOpen={setOpen} />
      <SingIn setIsAuth={setIsAuth} setOpen={setOpen} />
      <ModalWindow open={open} onClose={handleClose} />
    </>
  );
};

export default EntryPage;
