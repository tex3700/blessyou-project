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
/////////////эта иконка поставлена как загдушка и для практики
import AdbIcon from "@mui/icons-material/Adb";
////////////

const linksArray = ["О клинике", "Услуги", "Врачи", "Акции", "Контакты"];

const HeaderContent = () => {
  const classes = useStyles();
  return (
    // <AppBar>
    <Container fixed>
      <Toolbar>
        <IconButton color="inherit">
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
              key={link}
            >
              {link}
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
