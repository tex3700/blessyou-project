import { Container, Toolbar, Box, Button, IconButton } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import enteranceDoctorsIcon from "./../../static/icons/enteranceDoctorsIcon.svg";

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
        <IconButton
          className={classes.root}
          // color="inherit"
          component={Link}
          to="/"
        >
          <Box className={classes.headerLogo}></Box>
        </IconButton>

        <Box
          className={classes.headerBox}
          sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
        >
          {linksArray.map((link) => (
            <Button
              component={Link}
              className={classes.headerButtonLink}
              color="inherit"
              key={link.name}
              to={link.path}
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
            component={Link}
            to="/patientAccount"
          >
            Личный кабинет
          </Button>
        </Box>
        <IconButton className={classes.root} component={Link} to="/entryInLC">
          <Box className={classes.headerDoctorsEnterance}></Box>
        </IconButton>
      </Toolbar>
    </Container>
    // </AppBar>
  );
};

export default HeaderContent;
