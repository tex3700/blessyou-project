import React from "react";
import useStyles from "./styles";
import MainPaper from "./MainPaper";
import MainAboutUs from "./MainAboutUs";
import OurSevicesComp from "../commonComponents/ourServices/OurSevicesComp";

const Main = () => {
  const classes = useStyles();
  return (
    <>
      <MainPaper />
      <OurSevicesComp />
      <MainAboutUs />
    </>
  );
};

export default Main;
