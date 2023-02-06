import React, { useState } from "react";
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
import { apiRequest } from "../../api";

const LogIn = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);

  //очистка формы после всех обработок
  function handleFormClear() {
    setEmail("");
    setPassword("");
  }

  //проверка емейла на правильность
  function handleValidation(event) {
    const regExp = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

    setEmail(event.target.value);
    setValid(regExp.test(event.target.value));
  }

  //отправка данных для проверки на сервере
  function handleForm(event) {
    event.preventDefault();

    if (valid) {
      let logInData = {
        email,
        password,
      };
      console.log("log in data ", logInData);
      //отправка на проверку входных данных
      //когда появятся эндпоинты на сервере , тогда размоментирую
      // apiRequest("logIn", "POST", logInData);

      handleFormClear();
    }
    setValid(false);
  }
  return (
    <>
      <Box className={classes.logInContainer}>
        <Container fixed>
          <Typography variant="h3" className={classes.logInTitle}>
            Авторизация
          </Typography>

          <form className={classes.logInFrom} onSubmit={handleForm}>
            <Grid container className={classes.logInGridContainer}>
              <Grid item className={classes.logInGridItemInput}>
                <TextField
                  disableUnderline
                  required
                  id="outlined-error"
                  className={classes.logInInput}
                  variant="outlined"
                  placeholder="Логин (email)*"
                  type="email"
                  value={email}
                  onChange={(e) => handleValidation(e)}
                  // helperText={!valid ? "Incorrect entry." : ""}
                  InputProps={{
                    classes: { notchedOutline: classes.noBorder },
                  }}
                />
                <TextField
                  required
                  className={classes.logInInput}
                  variant="outlined"
                  id="pass"
                  placeholder="Пароль*"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    classes: { notchedOutline: classes.noBorder },
                  }}
                />
              </Grid>
              <Grid item container className={classes.logInGridItemButton}>
                <Grid item>
                  <Button
                    type="submit"
                    className={classes.logInButton}
                    // onClick={handleFormClear}
                  >
                    ВОЙТИ В ЛИЧНЫЙ КАБИНЕТ
                  </Button>
                </Grid>
                <Grid item className={classes.logInGridItemButtonTypography}>
                  <Typography>
                    Забыли пароль? Пройдите по <Link>ссылке</Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default LogIn;
