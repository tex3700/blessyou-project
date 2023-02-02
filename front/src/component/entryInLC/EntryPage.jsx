import React from "react";
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

/////////
const EntryPage = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.componentHead}>
        <Container fixed>
          <Typography variant="h3">Вход в личный кабинет пациента</Typography>
        </Container>
      </Box>
      <LogIn />
      <SingIn />
    </>
  );
};

export default EntryPage;
