import { Container } from "@material-ui/core";
import React from "react";
import HeaderContent from "./headerContent";
import TopBar from "./topBar";

const Header = () => {
  return (
    <>
      <Container fixed>
        <TopBar />
        <HeaderContent />
      </Container>
    </>
  );
};

export default Header;
