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

const SingIn = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [valid, setValid] = useState(false);

  //очистка формы после всех обработок
  function handleFormClear() {
    setEmail("");
    setPassword("");
    setRepeatPassword("");
    setName("");
    setSurname("");
    setMiddleName("");
  }

  //проверка емейла на правильность
  function handleValidationEmail(event) {
    const regExp = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

    setEmail(event.target.value);
    setValid(regExp.test(event.target.value));
    console.log("valid", valid);
  }
  //проверка ФИО на правильность
  function handleValidationFIO(event) {
    const regExp = /^[[А-Яа-яA-Za-z]+$/i;
    console.log("event", event.target);
    if (event.target.id === "surname" && regExp.test(event.target.value)) {
      setSurname(event.target.value);
    }
    if (event.target.id === "name" && regExp.test(event.target.value)) {
      setName(event.target.value);
    }
    if (event.target.id === "middle-name" && regExp.test(event.target.value)) {
      setMiddleName(event.target.value);
    }
    // setValid(regExp.test(event.target.value));
  }

  //отправка данных для проверки на сервере
  function handleForm(event) {
    event.preventDefault();

    if (valid) {
      let singInData = {
        email,
        password,
        name,
        surname,
        middleName,
      };
      console.log("log in data ", singInData);
      //отправка на проверку входных данных
      //когда появятся эндпоинты на сервере , тогда размоментирую
      // apiRequest("logIn", "POST", singInData);

      handleFormClear();
    }
    setValid(false);
  }
  return (
    <>
      <Box className={classes.logInContainer}>
        <Container fixed>
          <Typography variant="h3" className={classes.logInTitle}>
            Регистрация нового пользователя
          </Typography>

          <form className={classes.logInFrom} onSubmit={handleForm}>
            <Grid container className={classes.logInGridContainer}>
              <Grid item className={classes.logInGridItemInput}>
                <TextField
                  required
                  className={classes.logInInput}
                  variant="outlined"
                  placeholder="Логин (email)*"
                  type="email"
                  value={email}
                  onChange={(e) => handleValidationEmail(e)}
                  InputProps={{
                    classes: { notchedOutline: classes.noBorder },
                  }}
                />
                <TextField
                  required
                  className={classes.logInInput}
                  variant="outlined"
                  id="surname"
                  placeholder="Фамилия*"
                  type="text"
                  onChange={(e) => handleValidationFIO(e)}
                  value={surname}
                  InputProps={{
                    classes: { notchedOutline: classes.noBorder },
                  }}
                />
                <TextField
                  required
                  className={classes.logInInput}
                  variant="outlined"
                  id="password"
                  placeholder="Пароль*"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    classes: { notchedOutline: classes.noBorder },
                  }}
                />
                <TextField
                  required
                  className={classes.logInInput}
                  variant="outlined"
                  id="name"
                  placeholder="Имя*"
                  type="text"
                  onChange={(e) => handleValidationFIO(e)}
                  value={name}
                  InputProps={{
                    classes: { notchedOutline: classes.noBorder },
                  }}
                />
                <TextField
                  className={classes.logInInput}
                  variant="outlined"
                  id="repeat-password"
                  placeholder="Повторите пароль*"
                  type="password"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  InputProps={{
                    classes: { notchedOutline: classes.noBorder },
                  }}
                />
                <TextField
                  required
                  className={classes.logInInput}
                  variant="outlined"
                  id="middle-name"
                  placeholder="Отчество*"
                  type="text"
                  onChange={(e) => handleValidationFIO(e)}
                  value={middleName}
                  InputProps={{
                    classes: { notchedOutline: classes.noBorder },
                  }}
                />
              </Grid>
              <Grid item container className={classes.logInGridItemButton}>
                <Grid item>
                  <Button type="submit" className={classes.logInButton}>
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
