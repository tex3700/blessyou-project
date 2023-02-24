import React, { useState } from "react";
import { Box, Container, Typography, Button } from "@material-ui/core";
import { useStyles } from "./style";
import { apiRequest } from "../../../api";

export const SendMessage = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");

  const handleRequestForm = async (event) => {
    event.preventDefault();
    const body = {
      email: email,
      name: name,
      phone: number,
      text: message,
    };
    if (name && email && message) {
      apiRequest("mail/send", "POST", body);

      setName("");
      setEmail("");
      setMessage("");
      setNumber("");
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
        <form onSubmit={handleRequestForm}>
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
              required
            />
            <input
              type="text"
              placeholder="Телефон"
              pattern="^\+?\d+$"
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
            required
          ></textarea>
          <Box m={4} align="center">
            <Button type="submit" className={classes.sendMessageButton}>
              ОТПРАВИТЬ СООБЩЕНИЕ
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
};
