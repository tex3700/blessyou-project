import { AppBar, Container } from "@material-ui/core";
import React from "react";
import HeaderContent from "./headerContent";
import TopBar from "./topBar";

const Header = () => {
  return (
    <AppBar>
      <Container>
        {/* <TopBar /> */}
        <HeaderContent />
      </Container>
    </AppBar>
  );
};

export default Header;
