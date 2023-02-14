import React, { useState } from "react";
import { Box, Container, Typography, Button } from "@material-ui/core";
import { useStyles } from "./style";

export const SendMessage = () => {
  const classes = useStyles();
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
    if (name !== "") {
      const data = await fetch("https://blessyou-clinic.ru/api/api/mail/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(body),
      });
    }
  };

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
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
            <input
              type="Email"
              placeholder="Email"
              pattern="\S+@[0-9a-z_]+\.[a-z]+"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="text"
              placeholder="Телефон"
              pattern="\S+\+?\d+"
              onChange={(e) => setNumber(e.target.value)}
              value={number}
            />
          </Box>

          <textarea
            className={classes.sendMessageTextarea}
            name="text"
            id="textarea"
            cols="30"
            rows="6"
            placeholder="Ваше сообщение"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></textarea>
          <Box m={4} align="center">
            <Button
              type="submit"
              className={classes.sendMessageButton}
              onClick={handleRequestForm}
            >
              ОТПРАВИТЬ СООБЩЕНИЕ
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
};
