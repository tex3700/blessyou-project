import React from "react";
import useStyles from "./styles";
import {
  Box,
  Button,
  Container,
  Grid,
  Icon,
  ListItem,
  Paper,
  Typography,
} from "@material-ui/core";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
/////
const aboutBestList = [
  "Лучшие специалисты",
  "Индивидуальный подход",
  "Новейшее оборудование",
  "Комплексное лечение",
];

const MainAboutUs = () => {
  const classes = useStyles();

  return (
    <Container fixed>
      <Grid container className={classes.mainAboutUsGrid}>
        <Grid item>
          <Paper className={classes.mainAboutUsImage} elevation={0} />
        </Grid>

        <Grid item className={classes.mainAboutUsGridContent}>
          <Typography variant="h4">
            Добро пожаловать в клинику “Будьте Здоровы!”
          </Typography>
          <Typography variant="subtitle1">
            Рады приветствовать вас на сайте нашей клиники! Работая в области
            медицины уже более десяти лет, мы не понаслышке знаем о трудностях,
            с которыми сталкивается каждый пациент. И мы понимаем, насколько
            важно найти «своего» врача, пройти качественное обследование и
            получить результат от лечения. Наша клиника оснащена современным
            медицинским оборудованием, позволяющим проводить детальную
            диагностику организма. Каждый пациент может рассчитывать на
            внимательный прием и высокий уровень услуг, ведь принцип нашей
            работе строится на постулате «Внимательно к каждому».
          </Typography>

          <Grid container wrap="wrap">
            {aboutBestList.map((item) => (
              <Grid item direction="row">
                <CheckCircleIcon />
                <Typography>{item}</Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainAboutUs;
