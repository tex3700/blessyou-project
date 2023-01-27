import {
  Container,
  Grid,
  IconButton,
  Button,
  Paper,
  Typography,
  Box,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import ivanovDoctor from "./../../../static/image/doctors/ivanovDoctor.jpg";
import petrovaDoctor from "./../../../static/image/doctors/petrovaDoctor.jpg";
import smirnovDoctor from "./../../../static/image/doctors/smirnovDoctor.jpg";
import sidorovaDoctor from "./../../../static/image/doctors/sidorovaDoctor.jpg";

import DoctorCard from "../doctorCard/DoctorCard";

//////////
const doctorsList = [
  {
    title: "Иванов И.И.",
    text: "Физиотерапевт",
    image: `${ivanovDoctor}`,
  },
  {
    title: "Петрова А.А.",
    text: "Педиатр",
    image: `${petrovaDoctor}`,
  },
  // {
  //   title: "Петрова А.D",
  //   text: "Педиатр",
  //   image: `${petrovaDoctor}`,
  // },
  {
    title: "Смирнов А.Б.",
    text: "Гатроэнтеролог",
    image: `${smirnovDoctor}`,
  },
  // {
  //   title: "Смирнов А.A.",
  //   text: "Гатроэнтеролог",
  //   image: `${smirnovDoctor}`,
  // },
  {
    title: "Сидорова Н.В.",
    text: "Отоларинголог",
    image: `${sidorovaDoctor}`,
  },
];

const OurDoctorsSlider = () => {
  const classes = useStyles();
  const [count, setCount] = useState(0);

  const [currentArray, setCurrentArray] = useState([
    doctorsList[0],
    doctorsList[1],
    doctorsList[2],
    doctorsList[3],
  ]);

  if (count < 0) {
    setCount(doctorsList.length - 1);
    console.log("test", count);
  }

  if (count === doctorsList.length) {
    setCount(0);
  }

  console.log("count count", count);

  function countPlus(number) {
    let innnerNumber;
    setCount((prev) => prev + 1);
    if (number === doctorsList.length) {
      innnerNumber = 0;

      return innnerNumber;
    }
    innnerNumber = number + 1;

    return innnerNumber;
  }

  useEffect(() => {}, []);

  function countMinus() {
    setCount((prev) => prev - 1);
    if (count < 0) {
      setCount(doctorsList.length);
    }
    let num = count;
    console.log("num", num);
    // if (num < 0) {
    //   num = servicesList.length - 1;
    //   setCount(servicesList.length - 1);
    //   // console.log("num0", num);
    // }
    // setCurrentArray([...[], servicesList[count]]);
    // console.log("countMinus", count);
  }
  // console.log("countMinus finish", count);

  return (
    <Paper className={classes.ourServicesPaper}>
      <Container fixed>
        <Grid container className={classes.ourServicesGrid}>
          <Grid item container className={classes.ourServicesGridTitle}>
            <Grid item>
              <Typography variant="h3" className={classes.ourServicesTitle}>
                Наши врачи
              </Typography>
            </Grid>
            <Grid item>
              <IconButton
                className={classes.iconBottonRoot}
                onClick={countMinus}
              >
                <Box
                  className={`${classes.ourServicesArrow} ${classes.ourServicesArrowLeft}`}
                ></Box>
              </IconButton>
              <IconButton
                className={classes.iconBottonRoot}
                onClick={countPlus}
              >
                <Box
                  className={`${classes.ourServicesArrow} ${classes.ourServicesArrowRight}`}
                ></Box>
              </IconButton>
            </Grid>
          </Grid>
          <Grid container className={classes.ourServicesCarouseleGrid}>
            {currentArray.map((item) => (
              <DoctorCard key={item.title} props={item} />
            ))}
          </Grid>

          <Grid item>
            <Button
              className={`${classes.mainRegistrationButton} ${classes.mainAboutUsButton} `}
              component={Link}
              to="/doctors"
            >
              ВСЕ ВРАЧИ
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default OurDoctorsSlider;
