import { AppBar, Container } from "@material-ui/core";
import React from "react";
import HeaderContent from "./headerContent";
import TopBar from "./topBar";

const Header = () => {
  return (
    <AppBar>
      <Container>
        {/* Закоментировал этот компонент и перенес его содержимое в футер, оставил здесь по появления макета */}
        {/* <TopBar /> */}
        <HeaderContent />
      </Container>
    </AppBar>
  );
};

export default Header;
