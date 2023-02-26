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
import { Navigate } from "react-router-dom";

const LogIn = ({ setIsAuth, handleOpen, role }) => {
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
  async function handleForm(event) {
    event.preventDefault();

    if (valid) {
      let logInData = {
        email,
        password,
        role,
      };
      console.log("log in data ", logInData);

      apiRequest("patient-login", "POST", logInData).then((data) => {
        console.log("data ", data);
        if (data.status >= 200 && data.status <= 299) {
          console.log("set", data.status);
          setIsAuth(data.id);
          setValid(false);
          handleFormClear();
        } else {
          console.log("422", data.message);
          handleOpen(data.message);
        }
      });
    }
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
                  required
                  id="outlined-error"
                  className={classes.logInInput}
                  variant="outlined"
                  placeholder="Логин (email)*"
                  type="email"
                  error={!valid && email !== ""}
                  helperText={
                    !valid && email !== "" ? "email введен некорректно" : ""
                  }
                  value={email}
                  onChange={(e) => handleValidation(e)}
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
                  <Button type="submit" className={classes.logInButton}>
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
