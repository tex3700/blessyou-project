import { AppBar, Container } from "@material-ui/core";
import React from "react";
import HeaderContent from "./headerContent";
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appbar} color="white">
      <Container>
        <HeaderContent />
      </Container>
    </AppBar>
  );
};

export default Header;
