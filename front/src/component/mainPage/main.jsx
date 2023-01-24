import { Box, Container, Paper, Typography, } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import image from "../../static/images/Bunner.jpg";

const Main = () => {
  const classes = useStyles();
  return (
    
    <Paper className={classes.mainPaper}>
      <Container fixed>
        <Box className="mainBox" mt={20}>
          <Typography variant="h2">С нами легко</Typography>
          <Typography variant="h2">быть здоровыми!</Typography>
          <Typography variant="subtitile1">
            {""}
            Новая система медицинского обслуживания для всей семьи
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
};

export default Main;


