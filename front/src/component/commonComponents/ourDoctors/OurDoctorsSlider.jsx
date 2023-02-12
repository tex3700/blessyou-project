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

import DoctorCard from "../doctorCard/DoctorCard";

//////////

const OurDoctorsSlider = ({ doctorArray }) => {
  const classes = useStyles();
  const [count, setCount] = useState(0);

  const [currentArray, setCurrentArray] = useState([
    doctorArray[0],
    doctorArray[1],
    doctorArray[2],
    doctorArray[3],
  ]);

  if (count < 0) {
    setCount(doctorArray.length - 1);
  }

  if (count === doctorArray.length) {
    setCount(0);
  }

  function caoruseleHandler(number) {
    let innnerNumber = number + 1;

    if (innnerNumber === doctorArray.length) {
      innnerNumber = 0;

      return innnerNumber;
    }
    if (innnerNumber < 0) {
      innnerNumber = doctorArray.length - 1;

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
      doctorArray[indexOne],
      doctorArray[indexTwo],
      doctorArray[indexThree],
      doctorArray[indexFour],
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
              <DoctorCard key={item.id} props={item} />
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
