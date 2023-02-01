import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import { useStyles } from "./style";

export const SendMessage = () => {
  const classes = useStyles();

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
        <Box className={classes.sendMessageInputBox}>
          <TextField
            className={classes.sendMessageInput}
            id="Name"
            label="ФИО"
            type="text"
            variant="outlined"
          />
          <TextField
            className={classes.sendMessageInput}
            id="Email"
            label="Email"
            type="email"
            variant="outlined"
          />
          <TextField
            className={classes.sendMessageInput}
            id="Phone"
            label="Телефон"
            type="text"
            variant="outlined"
          />
        </Box>
        <TextField
          id="textarea"
          label="Ваше сообщение "
          multiline
          rows={5}
          variant="outlined"
          fullWidth
          style={{ background: "#FFFFFF", borderRadius: "5px" }}
        />
        <Box m={4} align="center">
          <Button type="submit" className={classes.sendMessageButton}>
            ОТПРАВИТЬ СООБЩЕНИЕ
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
