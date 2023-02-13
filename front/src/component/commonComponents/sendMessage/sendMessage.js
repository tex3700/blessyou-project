import React, { useState } from "react";
import { Box, Container, Typography, Button } from "@material-ui/core";
import { useStyles } from "./style";

export const SendMessage = (ctx) => {
  const classes = useStyles();
  const [valueName, setValueName] = useState("");
  const [valueEmail, setValueEmail] = useState("");
  const [valuePhone, setValuePhone] = useState("");
  const [valueText, setValueText] = useState("");

  const [messageArrey, setMessageArrey] = useState([]);

  const addMessageArrey = () => {
    if (valueName !== "") {
      setMessageArrey([
        ...messageArrey,
        {
          name: valueName,
          email: valueEmail,
          phone: valuePhone,
          text: valueText,
        },
      ]);
    }
    setValueName("");
    setValueEmail("");
    setValuePhone("");
    setValueText("");
  };

  console.log(messageArrey);

  return (
    <Box className={classes.sendMessage}>
      <Container style={{ maxWidth: "1000px", padding: "0 15px" }}>
        <Typography
          variant="h3"
          align="center"
          className={classes.sendMessageTitlle}
        >
          Отправить сообщение
        </Typography>
        <form action="#">
          <Box className={classes.sendMessageInputBox}>
            <input
              type="text"
              placeholder="ФИО"
              pattern="\S+[А-Яа-яA-Za-z\s]+"
              onChange={(e) => setValueName(e.target.value)}
              value={valueName}
              required
            />
            <input
              type="Email"
              placeholder="Email"
              pattern="\S+@[0-9a-z_]+.[a-z]"
              onChange={(e) => setValueEmail(e.target.value)}
              value={valueEmail}
            />
            <input
              type="text"
              placeholder="Телефон"
              pattern="\S+[+\d]+"
              onChange={(e) => setValuePhone(e.target.value)}
              value={valuePhone}
            />
          </Box>

          <textarea
            className={classes.sendMessageTextarea}
            name="text"
            id="textarea"
            cols="30"
            rows="6"
            placeholder="Ваше сообщение"
            onChange={(e) => setValueText(e.target.value)}
            value={valueText}
          ></textarea>
          <Box m={4} align="center">
            <Button
              type="submit"
              className={classes.sendMessageButton}
              onClick={addMessageArrey}
            >
              ОТПРАВИТЬ СООБЩЕНИЕ
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
};
