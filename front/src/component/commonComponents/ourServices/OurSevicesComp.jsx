import {
  Container,
  Grid,
  IconButton,
  Button,
  Paper,
  Typography,
  Box,
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import ServiceCard from "../serviceCard/ServiceCard";
import { DataContext } from "../../../DataContext";

//////////

export const OurSevicesComp = () => {
  const classes = useStyles();
  const [count, setCount] = useState(0);

  const { servicesArray } = useContext(DataContext);

  const [currentArray, setCurrentArray] = useState([
    servicesArray[count],
    servicesArray[1],
    servicesArray[2],
  ]);

  if (count < 0) {
    setCount(servicesArray.length - 1);
  }

  if (count === servicesArray.length) {
    setCount(0);
  }

  function caoruseleHandler(number) {
    let innnerNumber = number + 1;

    if (innnerNumber === servicesArray.length) {
      innnerNumber = 0;

      return innnerNumber;
    }
    if (innnerNumber < 0) {
      innnerNumber = servicesArray.length - 1;

      return innnerNumber;
    }

    return innnerNumber;
  }

  const changeCurrentArray = () => {
    let indexOne = count;
    let indexTwo = caoruseleHandler(indexOne);
    let indexThree = caoruseleHandler(indexTwo);

    setCurrentArray([
      servicesArray[indexOne],
      servicesArray[indexTwo],
      servicesArray[indexThree],
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
                Наши услуги
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
              <ServiceCard key={item.id} props={item} />
            ))}
          </Grid>

          <Grid item>
            <Button
              className={`${classes.mainRegistrationButton} ${classes.mainAboutUsButton} `}
              component={Link}
              to="/services"
            >
              ВСЕ УСЛУГИ
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default OurSevicesComp;
