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
  }

  if (count === doctorsList.length) {
    setCount(0);
  }

  function caoruseleHandler(number) {
    let innnerNumber = number + 1;

    if (innnerNumber === doctorsList.length) {
      innnerNumber = 0;

      return innnerNumber;
    }
    if (innnerNumber < 0) {
      innnerNumber = doctorsList.length - 1;

      return innnerNumber;
    }

    return innnerNumber;
  }

  const changeCurrentArray = () => {
    let indexOne = count;
    let indexTwo = caoruseleHandler(indexOne);
    let indexThree = caoruseleHandler(indexTwo);
    let indexFour = caoruseleHandler(indexThree);

    setCurrentArray([
      doctorsList[indexOne],
      doctorsList[indexTwo],
      doctorsList[indexThree],
      doctorsList[indexFour],
    ]);
  };

  useEffect(() => {
    changeCurrentArray();
  }, [count]);

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
                onClick={() => setCount(count - 1)}
              >
                <Box
                  className={`${classes.ourServicesArrow} ${classes.ourServicesArrowLeft}`}
                ></Box>
              </IconButton>
              <IconButton
                className={classes.iconBottonRoot}
                onClick={() => setCount(count + 1)}
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
