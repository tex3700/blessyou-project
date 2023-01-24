import React from "react";
import useStyles from "./styles";
import MainPaper from "./MainPaper";
import MainAboutUs from "./MainAboutUs";

const Main = () => {
  const classes = useStyles();
  return (
    <>
      <MainPaper />
      <MainAboutUs />
    </>
  );
};

export default Main;
