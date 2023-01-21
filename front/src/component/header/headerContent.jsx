import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
} from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { Route, Link, Routes } from "react-router-dom";
/////////////эта иконка поставлена как загдушка и для практики
import AdbIcon from "@mui/icons-material/Adb";
////////////

const linksArray = [
  { name: "О клинике", path: "/about" },
  { name: "Услуги", path: "/services" },
  { name: "Врачи", path: "/doctors" },
  { name: "Контакты", path: "/contacts" },
];

const HeaderContent = () => {
  const classes = useStyles();
  return (
    // <AppBar>
    <Container fixed>
      <Toolbar>
        <IconButton color="inherit" href="/">
          <AdbIcon />
        </IconButton>

        <Box
          className={classes.headerBox}
          sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
        >
          {linksArray.map((link) => (
            <Button
              className={classes.headerButtonLink}
              color="inherit"
              key={link.name}
              href={link.path}
            >
              {link.name}
            </Button>
          ))}
        </Box>
        <Box>
          <Button
            className={classes.buttonWriteOn}
            variant="contained"
            size="large"
            color="succeses"
          >
            Запись на прием
          </Button>
        </Box>
      </Toolbar>
    </Container>
    // </AppBar>
  );
};

export default HeaderContent;
