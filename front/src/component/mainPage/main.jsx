import { Box, Container, Paper, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import image from "./../../static/image/mainPageBunner.jpg";
const Main = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.mainPaper}>
      <Container fixed>
        <Box className="mainBox" mt={20}>
          <Typography variant="h2">С нами</Typography>
          <Typography variant="h2">быть здоровыми легко!</Typography>
          <Typography variant="subtitle1">
            {" "}
            nfjlfe jjanejfne nfjenfaef oneofo oneofoef eiiofeo ioif
            oijeifeoioiwewe
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
};

export default Main;
