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
const usersArray = [
  { id: 1, name: "Dima", email: "test@mail.ru", password: "12345" },
  { id: 2, name: "Vova", email: "mail@mail.ru", password: "56789" },
];

/////////

/////////
const EntryPage = ({ setIsAuth }) => {
  const classes = useStyles();
  const onSubmit = (email, password) => {
    const user = usersArray.find((item) => item.email === email);
    if (password === user.password) {
      return setIsAuth(true);
    }
    return setIsAuth(false);
  };
  return (
    <>
      <Box className={classes.componentHead}>
        <Container fixed>
          <Typography variant="h3">Вход в личный кабинет пациента</Typography>
        </Container>
      </Box>
      <LogIn onSubmit={onSubmit} />
      <SingIn />
    </>
  );
};

export default EntryPage;
