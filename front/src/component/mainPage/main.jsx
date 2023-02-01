import React from "react";
import useStyles from "./styles";
import MainPaper from "./MainPaper";
import MainAboutUs from "./MainAboutUs";
import OurSevicesComp from "../commonComponents/ourServices/OurSevicesComp";
import OurDoctorsSlider from "../commonComponents/ourDoctors/OurDoctorsSlider";
import { SendMessage } from "../commonComponents/sendMessage/sendMessage";

const Main = () => {
  const classes = useStyles();
  return (
    <>
      <MainPaper />
      <OurSevicesComp />
      <MainAboutUs />
      <SendMessage />
      <OurDoctorsSlider />
    </>
  );
};

export default Main;
