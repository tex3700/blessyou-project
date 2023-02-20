import React, { useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import { Button, Box, Card, Typography, Container } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import useStyles from "../commonComponents/ourDoctors/styles";
import { YMaps, Map } from "react-yandex-maps";
import useStylesRecept from "./styles";

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
    fontSize: 16,
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");

  const handleRequestForm = async () => {
    const body = {
      email: email,
      name: name,
      phone: number,
      text: message,
    };
    const data = await fetch("https://blessyou-clinic.ru/api/api/mail/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(body),
    });
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
                      <Typography color="textSecondary" variant="body2">
                        Ваше имя
                      </Typography>
                    </Box>
                    <TextFieldCustom
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
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
                      <Typography color="textSecondary" variant="body2">
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
                      <Typography color="textSecondary" variant="body2">
                        Email
                      </Typography>
                    </Box>
                    <TextFieldCustom
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
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
                      <Typography color="textSecondary" variant="body2">
                        Ваше сообщение
                      </Typography>
                    </Box>
                    <TextAreaCustom
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
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
                    welcome@blessyou.ru
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
    </>
  );
};
