import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Paper,
  TextField,
  Link,
} from "@material-ui/core";
import useStyles from "./styles";

const SingIn = () => {
  const classes = useStyles();

  // function handleValidation(event) {
  //   const regExp = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

  //   setEmail(event.target.value);
  //   setValid(regExp.test(event.target.value));
  // }
  return (
    <>
      <Box className={classes.logInContainer}>
        <Container fixed>
          <Typography variant="h3" className={classes.logInTitle}>
            Регистрация нового пользователя
          </Typography>

          <form className={classes.logInFrom}>
            <Grid container className={classes.logInGridContainer}>
              <Grid item className={classes.logInGridItemInput}>
                <TextField
                  disableUnderline
                  className={classes.logInInput}
                  variant="outlined"
                  id="email"
                  placeholder="Логин (email)*"
                  type="email"
                  InputProps={{
                    classes: { notchedOutline: classes.noBorder },
                  }}
                />
                <TextField
                  disableUnderline
                  className={classes.logInInput}
                  variant="outlined"
                  id="surname"
                  placeholder="Фамилия*"
                  type="text"
                  InputProps={{
                    classes: { notchedOutline: classes.noBorder },
                  }}
                />
                <TextField
                  disableUnderline
                  className={classes.logInInput}
                  variant="outlined"
                  id="password"
                  placeholder="Пароль*"
                  type="password"
                  InputProps={{
                    classes: { notchedOutline: classes.noBorder },
                  }}
                />
                <TextField
                  disableUnderline
                  className={classes.logInInput}
                  variant="outlined"
                  id="name"
                  placeholder="Имя*"
                  type="text"
                  InputProps={{
                    classes: { notchedOutline: classes.noBorder },
                  }}
                />
                <TextField
                  disableUnderline
                  className={classes.logInInput}
                  variant="outlined"
                  id="repeat-password"
                  placeholder="Повторите пароль*"
                  type="password"
                  InputProps={{
                    classes: { notchedOutline: classes.noBorder },
                  }}
                />
                <TextField
                  className={classes.logInInput}
                  variant="outlined"
                  id="middle-name"
                  placeholder="Отчество*"
                  type="text"
                  InputProps={{
                    classes: { notchedOutline: classes.noBorder },
                  }}
                />
              </Grid>
              <Grid item container className={classes.logInGridItemButton}>
                <Grid item>
                  <Button className={classes.logInButton}>
                    ЗАРЕГИСТРИРОВАТЬСЯ
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default SingIn;
