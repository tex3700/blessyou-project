import React, { useContext } from "react";
import useStyles from "./styles";
import MainPaper from "./MainPaper";
import MainAboutUs from "./MainAboutUs";
import OurSevicesComp from "../commonComponents/ourServices/OurSevicesComp";
import OurDoctorsSlider from "../commonComponents/ourDoctors/OurDoctorsSlider";
import { SendMessage } from "../commonComponents/sendMessage/sendMessage";
import { DataContext } from "../../DataContext";

////
const Main = () => {
  const classes = useStyles();
  const { servicesArray, doctorArray } = useContext(DataContext);

  return (
    <>
      <MainPaper />
      {servicesArray.length > 0 && <OurSevicesComp />}

      <MainAboutUs />
      <SendMessage />
      {doctorArray.length > 0 && <OurDoctorsSlider doctorArray={doctorArray} />}
    </>
  );
};

export default Main;
