import React, { useState } from "react";
import { YMaps, Map } from "react-yandex-maps";

import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";

import {
  Button,
  Box,
  Card,
  Typography,
  Container,
  Snackbar,
} from "@material-ui/core";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

import { Theme } from "@mui/material";
import useStyles from "../commonComponents/ourDoctors/styles";
import useStylesRecept from "./styles";
import { apiRequest } from "../../api";

const classes = {
  snackbarStyles: (theme: Theme) => ({
    borderRadius: "16px",
    bottom: "50%",
    "& .MuiPaper-root": {
      background:
        "linear-gradient(270deg, #37A12F -4.12%, #80DB2E 102.94%) !important",
      boxShadow: "0px 15px 10px rgb(125 214 246 / 13%) !important",
    },
  }),
};
const StyledSnackbar = styled(Snackbar)(({ theme, props }) => ({
  "& .MuiSnackbar-root": {
    background: "green !important",
    "& .MuiSnackbar-anchorOriginBottomCenter": {
      bottom: "50%",
    },
  },
}));

export const TextFieldCustom = styled(TextField)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    display: "none",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#356EAD",
    },
    "&:hover fieldset": {
      borderColor: "#356EAD",
    },
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  },
  "& .MuiInputBase-root": {
    width: 422,
    height: 71,
    borderRadius: "10px !important",
    position: "relative",
    background: "#FFFFFF",
    fontSize: 36,
    marginTop: 0,
    padding: "18px 16px",

    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "& .MuiInputBase-input": {
      fontSize: 17,
      lineHeight: 22,
      color: "#356EAD !important",
      padding: 0,
    },
    "&.Mui-focused": {
      border: "#356EAD !important",
      background: "white",
    },
  },
}));

export const TextAreaCustom = styled(TextField)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    display: "none",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#356EAD",
    },
    "&:hover fieldset": {
      borderColor: "#356EAD",
    },
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  },
  "& .MuiInputBase-root": {
    width: 422,
    borderRadius: "10px !important",
    background: "#FFFFFF",
    fontSize: 16,
  },
}));

export const TypographyTitle = styled(Typography)(({ theme }) => ({
  "& .MuiTypography-root": {
    display: "none",
    color: "#4493B9",
    fontSize: "36px",
    fontWeight: "500",
    lineHeight: "30px",
  },
}));

export const Receipts = () => {
  const classesRecept = useStylesRecept();
  const commonClasses = useStyles();

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");

  const [isEmailError, setIsEmailError] = useState(false);
  const [isNameError, setIsNameError] = useState(false);
  const [isMessageError, setIsMessageError] = useState(false);

  const handleCloseSnackbar = () => {
    setOpen(false);
  };

  const isValidateEmailField = (value) => {
    // return true, if has error
    if (value.trim().length < 1) {
      //required
      return true;
    }

    if (
      !/^([A-Za-za-яА-ЯёЁ0-9_\-\.])+\@([A-Za-za-яА-ЯёЁ0-9_\-\.])+\.([A-Za-za-яА-ЯёЁ]{2,4})$/.test(
        value
      )
    ) {
      //check/... on email
      return true;
    }
    return false;
  };

  const isValidateNameField = (value) => {
    // return true, if has error
    if (value.trim().length < 1) {
      //required
      return true;
    }

    if (!/^[a-zA-Zа-яА-ЯёЁ ]+$/g.test(value)) {
      //check/... on only symbol
      return true;
    }
    return false;
  };

  const isValidateMessageField = (value) => {
    // return true, if has error
    if (value.trim().length < 1) {
      //required
      return true;
    }
    return false;
  };

  const resetFields = () => {
    setName("");
    setEmail("");
    setNumber("");
    setMessage("");
  };

  const showSnackBar = () => {
    setOpen(true);
    setTimeout(() => setOpen(false), 49000);
  };
  const handleRequestForm = async () => {
    //submit
    const body = {
      email: email,
      name: name,
      phone: number,
      text: message,
    };
    try {
      const data = await fetch("https://blessyou-clinic.ru/api/api/mail/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(body),
      });
    } catch {
      console.log("Eroror");
    } finally {
      resetFields();
      showSnackBar();
    }
  };

  return (
    <>
      <Box className={classesRecept.servicesHead}>
        <Container fixed>
          <Typography variant="h3">Контакты</Typography>
        </Container>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingBottom: "20px",
          marginTop: "76px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Box>
              <Card className={classesRecept.card}>
                <Box sx={{ padding: "55px 55px 81px 55px" }}>
                  <Typography className={classesRecept.title}>
                    Напишите нам
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box sx={{ margin: "46px 0 7px 0" }}>
                      <Typography color="textSecondary" variant="body3">
                        Ваше имя*
                      </Typography>
                    </Box>
                    <TextFieldCustom
                      value={name}
                      error={isNameError}
                      helperText={
                        isNameError &&
                        "Поле обязательное и должно содержать только символы"
                      }
                      onChange={(e) => {
                        setName(e.target.value);
                        const isValidate = isValidateNameField(e.target.value);
                        if (isValidate) {
                          setIsNameError(true);
                        } else {
                          setIsNameError(false);
                        }
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "31px",
                    }}
                  >
                    <Box sx={{ margin: "10px 0 7px 0" }}>
                      <Typography color="textSecondary" variant="body3">
                        Телефон
                      </Typography>
                    </Box>
                    <TextFieldCustom
                      value={number}
                      onChange={(e) => {
                        setNumber(e.target.value);
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "31px",
                    }}
                  >
                    <Box sx={{ margin: "10px 0 7px 0" }}>
                      <Typography color="textSecondary" variant="body3">
                        Email*
                      </Typography>
                    </Box>
                    <TextFieldCustom
                      value={email}
                      error={isEmailError}
                      helperText={isEmailError && "Некорректный email"}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        const isValidate = isValidateEmailField(e.target.value);
                        if (isValidate) {
                          setIsEmailError(true);
                        } else {
                          setIsEmailError(false);
                        }
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "31px",
                    }}
                  >
                    <Box sx={{ margin: "16px 0 7px 0" }}>
                      <Typography color="textSecondary" variant="body3">
                        Ваше сообщение*
                      </Typography>
                    </Box>
                    <TextAreaCustom
                      value={message}
                      error={isMessageError}
                      helperText={
                        isMessageError && "Поле обязательное для заполнения"
                      }
                      onChange={(e) => {
                        setMessage(e.target.value);
                        const isValidate = isValidateMessageField(
                          e.target.value
                        );
                        if (isValidate) {
                          setIsMessageError(true);
                        } else {
                          setIsMessageError(false);
                        }
                      }}
                      multiline
                      rows={4}
                      maxRows={Infinity}
                    ></TextAreaCustom>
                  </Box>

                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      className={`${commonClasses.mainRegistrationButton}
                                  ${commonClasses.mainAboutUsButton} 
                                  ${classesRecept.submit_button} 
                                `}
                      disabled={
                        !email ||
                        isEmailError ||
                        !name ||
                        isNameError ||
                        isMessageError ||
                        !message
                      }
                      onClick={handleRequestForm}
                    >
                      ОТПРАВИТЬ СООБЩЕНИЕ
                    </Button>
                  </Box>
                </Box>
              </Card>
            </Box>

            <Box sx={{ marginLeft: "130px", marginTop: "80px" }}>
              <Typography className={classesRecept.title_contact}>
                Телефоны:
              </Typography>
              <Box
                sx={{ display: "flex", alignItems: "center", marginTop: "8px" }}
              >
                <CallIcon className={classesRecept.icon_contact} />
                <Typography className={classesRecept.phone_contact}>
                  8 800 777 77 77
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "center", marginTop: "8px" }}
              >
                <CallIcon className={classesRecept.icon_contact} />
                <Typography className={classesRecept.phone_contact}>
                  495 777 77 77
                </Typography>
              </Box>

              <Box sx={{ marginTop: "32px" }}>
                <Typography className={classesRecept.title_contact}>
                  Адрес:
                </Typography>
                <Box sx={{ display: "flex", marginTop: "8px" }}>
                  <Typography className={classesRecept.street_contact}>
                    Москва, Ивановская площадь, д.1
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ marginTop: "35px" }}>
                <Typography className={classesRecept.title_contact}>
                  Email:
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    marginTop: "8px",
                    alignItems: "center",
                  }}
                >
                  <MailIcon className={classesRecept.icon_contact} />
                  <Typography className={classesRecept.email_contact}>
                    welcome@blessyou-clinic.ru
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{ marginTop: "60px", width: "100%" }}>
            <YMaps>
              <div>
                <Map
                  width="100%"
                  height="585px"
                  defaultState={{ center: [55.751705, 37.618713], zoom: 16 }}
                />
              </div>
            </YMaps>
          </Box>
        </Box>
      </Box>
      <StyledSnackbar
        //true/false
        open={open}
        sx={classes.snackbarStyles}
        onClose={handleCloseSnackbar}
        // anchorOrigin={{ 'top', 'horizontal' }}
        message={"Мы уже читаем Ваше сообщение!"}
      />
    </>
  );
};
