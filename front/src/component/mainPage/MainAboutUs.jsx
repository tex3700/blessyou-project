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
import { Link } from "react-router-dom";
import { doctorListAPI } from "../../api/API";
/////
const aboutBestList = [
  "Лучшие специалисты",
  "Индивидуальный подход",
  "Новейшее оборудование",
  "Комплексное лечение",
];

const MainAboutUs = () => {
  const classes = useStyles();

  async function showData() {
    await fetch("https://blessyou-clinic.ru/api/api/doctors/")
      .then((res) => res.json())
      .then((data) => {
        console.log("daa", data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  showData();
  return (
    <Container fixed>
      <Grid container className={classes.mainAboutUsGrid}>
        <Grid item>
          <Paper className={classes.mainAboutUsImage} elevation={0} />
        </Grid>

        <Grid item className={classes.mainAboutUsGridContent}>
          <Typography
            variant="h4"
            className={classes.mainAboutUsTitle}
            gutterBottom
          >
            Добро пожаловать в клинику “Будьте Здоровы!”
          </Typography>
          <Typography variant="body2" className={classes.mainAboutUsText}>
            Рады приветствовать вас на сайте нашей клиники! Работая в области
            медицины уже более десяти лет, мы не понаслышке знаем о трудностях,
            с которыми сталкивается каждый пациент. И мы понимаем, насколько
            важно найти «своего» врача, пройти качественное обследование и
            получить результат от лечения.
          </Typography>
          <Typography variant="body2" className={classes.mainAboutUsText}>
            Наша клиника оснащена современным медицинским оборудованием,
            позволяющим проводить детальную диагностику организма. Каждый
            пациент может рассчитывать на внимательный прием и высокий уровень
            услуг, ведь принцип нашей работе строится на постулате «Внимательно
            к каждому».
          </Typography>

          <Grid
            container
            wrap="wrap"
            className={classes.mainAboutUsGridContentBest}
          >
            {aboutBestList.map((item) => (
              <Grid
                key={item}
                item
                className={classes.mainAboutUsGridContentBestItem}
              >
                <CheckCircleIcon className={classes.colorPrimary} />
                <Typography className={classes.mainAboutUsTextBest}>
                  {item}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <Grid item>
            <Button
              className={`${classes.mainRegistrationButton} ${classes.mainAboutUsButton} `}
              component={Link}
              to="/about"
            >
              ПОДРОБНЕЕ
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainAboutUs;
