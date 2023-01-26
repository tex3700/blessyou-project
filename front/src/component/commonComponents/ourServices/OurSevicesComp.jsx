import {
  Container,
  Grid,
  IconButton,
  Paper,
  Typography,
  Box,
} from "@material-ui/core";
import React from "react";
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
    title: "Педиатрия",
    text: "Педиатр –  детский терапевт, который наблюдает Вашего ребенка с самого рождения и до совершеннолетия. ",
    image: `${pediatr}`,
  },
  {
    title: "Оториноларингология",
    text: "Лор-врач, или оториноларинголог, занимается диагностикой и лечением различной патологии уха, горла и носа.",
    image: `${lorImage}`,
  },
];

const OurSevicesComp = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.ourServicesPaper}>
      <Container fixed>
        <Grid container className={classes.ourServicesGrid}>
          <Grid item>
            <Typography variant="h3" className={classes.ourServicesTitle}>
              Наши услуги
            </Typography>
          </Grid>
          <Grid item>
            <IconButton className={classes.iconBottonRoot}>
              <Box
                className={`${classes.ourServicesArrow} ${classes.ourServicesArrowLeft}`}
              ></Box>
            </IconButton>
            <IconButton className={classes.iconBottonRoot}>
              <Box
                className={`${classes.ourServicesArrow} ${classes.ourServicesArrowRight}`}
              ></Box>
            </IconButton>
          </Grid>
          <Grid container className={classes.ourServicesCarouseleGrid}>
            {servicesList.map((item) => (
              <ServiceCard key={item.title} props={item} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default OurSevicesComp;
