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
import lorImage from "./../../../static/image/services/LOR.jpg";
import pediatr from "./../../../static/image/services/Pediatr.jpg";
import physiotheraphy from "./../../../static/image/services/Physiotheraphy.jpg";
import ServiceCard from "../serviceCard/ServiceCard";

//////////

const servicesList = [
  {
    title: "Физиотерапия",
    text: "Все виды физиотерапевтических услуг, мануальный массаж и натуротерапия. Лучшие специалисты города ждут Вас...",
    image: `${physiotheraphy}`,
  },
  {
    title: "Физиотерапия11",
    text: "Все виды физиотерапевтических услуг, мануальный массаж и натуротерапия. Лучшие специалисты города ждут Вас...",
    image: `${physiotheraphy}`,
  },
  {
    title: "Педиатрия",
    text: "Педиатр –  детский терапевт, который наблюдает Вашего ребенка с самого рождения и до совершеннолетия. ",
    image: `${pediatr}`,
  },
  {
    title: "Педиатрия111",
    text: "Педиатр –  детский терапевт, который наблюдает Вашего ребенка с самого рождения и до совершеннолетия. ",
    image: `${pediatr}`,
  },
  {
    title: "Оториноларингология",
    text: "Лор-врач, или оториноларинголог, занимается диагностикой и лечением различной патологии уха, горла и носа.",
    image: `${lorImage}`,
  },
  {
    title: "Оториноларингология111s",
    text: "Лор-врач, или оториноларинголог, занимается диагностикой и лечением различной патологии уха, горла и носа.",
    image: `${lorImage}`,
  },
];
export const OurSevicesComp = () => {
  const classes = useStyles();
  const [count, setCount] = useState(0);

  const [currentArray, setCurrentArray] = useState([
    servicesList[count],
    servicesList[1],
    servicesList[2],
  ]);

  if (count < 0) {
    setCount(servicesList.length - 1);
  }

  if (count === servicesList.length) {
    setCount(0);
  }

  function caoruseleHandler(number) {
    let innnerNumber = number + 1;

    if (innnerNumber === servicesList.length) {
      innnerNumber = 0;

      return innnerNumber;
    }
    if (innnerNumber < 0) {
      innnerNumber = servicesList.length - 1;

      return innnerNumber;
    }

    return innnerNumber;
  }

  const changeCurrentArray = () => {
    let indexOne = count;
    let indexTwo = caoruseleHandler(indexOne);
    let indexThree = caoruseleHandler(indexTwo);

    setCurrentArray([
      servicesList[indexOne],
      servicesList[indexTwo],
      servicesList[indexThree],
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
              <ServiceCard key={item.title} props={item} />
            ))}
          </Grid>

          <Grid item>
            <Button
              className={`${classes.mainRegistrationButton} ${classes.mainAboutUsButton} `}
              component={Link}
              to="/services"
            >
              ПОДРОБНЕЕ
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default OurSevicesComp;
