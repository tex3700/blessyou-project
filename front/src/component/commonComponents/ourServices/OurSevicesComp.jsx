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
    id: "1",
    title: "Физиотерапия",
    text: "Все виды физиотерапевтических услуг, мануальный массаж и натуротерапия. Лучшие специалисты города ждут Вас...",
    image: `${physiotheraphy}`,
  },

  {
    id: "2",
    title: "Педиатрия",
    text: "Педиатр –  детский терапевт, который наблюдает Вашего ребенка с самого рождения и до совершеннолетия. ",
    image: `${pediatr}`,
  },
  {
    id: "3",
    title: "Оториноларингология",
    text: "Лор-врач, или оториноларинголог, занимается диагностикой и лечением различной патологии уха, горла и носа.",
    image: `${lorImage}`,
  },
  {
    id: "4",
    title: "Физиотерапия",
    text: "Все виды физиотерапевтических услуг, мануальный массаж и натуротерапия. Лучшие специалисты города ждут Вас...",
    image: `${physiotheraphy}`,
  },

  {
    id: "5",
    title: "Педиатрия",
    text: "Педиатр –  детский терапевт, который наблюдает Вашего ребенка с самого рождения и до совершеннолетия. ",
    image: `${pediatr}`,
  },
  {
    id: "6",
    title: "Оториноларингология",
    text: "Лор-врач, или оториноларинголог, занимается диагностикой и лечением различной патологии уха, горла и носа.",
    image: `${lorImage}`,
  },
  {
    id: "7",
    title: "Физиотерапия",
    text: "Все виды физиотерапевтических услуг, мануальный массаж и натуротерапия. Лучшие специалисты города ждут Вас...",
    image: `${physiotheraphy}`,
  },
];

const OurSevicesComp = () => {
  const classes = useStyles();
  const [count, setCount] = useState(0);

  const [currentArray, setCurrentArray] = useState([
    servicesList[0],
    servicesList[1],
    servicesList[2],
  ]);

  if (count < 0) {
    setCount(servicesList.length - 1);
    console.log("test", count);
  }

  if (count === servicesList.length) {
    setCount(0);
  }

  console.log("count count", count);

  function countPlus(number) {
    let innnerNumber;
    setCount((prev) => prev + 1);
    if (number === servicesList.length) {
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
      setCount(servicesList.length);
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
                Наши услуги
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
