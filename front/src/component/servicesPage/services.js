import React from "react";
import styles from "./style.module.css";
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  CardActionArea,
} from "@material-ui/core";
import { useStyles } from "./servicesStyle";
import Grid from "@material-ui/core/Grid";
import physiotheraphy from "../../static/image/services/Physiotheraphy.jpg";
import lorImage from "../../static/image/services/LOR.jpg";
import pediatr from "../../static/image/services/Pediatr.jpg";
import ServiceCard from "../commonComponents/serviceCard/ServiceCard";

export const servicesTable = [
  {
    id: 1,
    image: `${physiotheraphy}`,
    title: "Физиотерапия",
    text: "Все виды физиотерапевтических услуг, мануальный массаж и натуротерапия. Лучшие специалисты города ждут Вас...",
  },
  {
    id: 2,
    image: `${pediatr}`,
    title: "Педиатрия",
    text: "Педиатр – детский терапевт, который наблюдает Вашего ребенка с самого рождения и до совершеннолетия.",
  },
  {
    id: 3,
    image: `${lorImage}`,
    title: "Оториноларингология",
    text: "Лор-врач, или оториноларинголог, занимается диагностикой и лечением различной патологии уха, горла и носа. ",
  },
  {
    id: 4,
    image: `${physiotheraphy}`,
    title: "Физиотерапия",
    text: "Все виды физиотерапевтических услуг, мануальный массаж и натуротерапия. Лучшие специалисты города ждут Вас...",
  },
  {
    id: 5,
    image: `${pediatr}`,
    title: "Педиатрия",
    text: "Педиатр – детский терапевт, который наблюдает Вашего ребенка с самого рождения и до совершеннолетия.",
  },
  {
    id: 6,
    image: `${lorImage}`,
    title: "Оториноларингология",
    text: "Лор-врач, или оториноларинголог, занимается диагностикой и лечением различной патологии уха, горла и носа. ",
  },
];

export const Services = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.servicesHead}>
        <Container fixed>
          <Typography variant="h3">Услуги</Typography>
        </Container>
      </Box>
      <Box>
        <Container fixed>
          <Typography
            variant="h3"
            align="center"
            className={classes.servicesGridTitle}
          >
            Полный спектр медицинских услуг
          </Typography>

          <Container className={classes.servicesCardContainer}>
            <Grid container spacing={2}>
              {servicesTable.map((item) => (
                <ServiceCard key={item.title} props={item} />
              ))}

              {/* {servicesTable.map((card) => (
                <Grid item key={card.id} xs={12} sm={6} md={4}>
                  <Card className={classes.servicesCard}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.servicesCardMedia}
                        image={card.img}
                        title="Img title"
                      ></CardMedia>
                      <CardContent className={classes.servicesCardContent}>
                        <Typography variant="h5" gutterBottom>
                          {card.title}
                        </Typography>
                        <Typography>{card.description}</Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
                        size="small"
                        className={classes.servicesCardButton}
                      >
                        Подробнее
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))} */}
            </Grid>
          </Container>
        </Container>
      </Box>
      {/* 
      <div>
        <div className={styles.servicesContainer}>
          <div className={styles.servicesTable}>
!          <div className={styles.servicesTable}>
            <h1>Полный спектр медицинских услуг</h1>
            <div className={styles.servicesTableMain}>
              {servicesTable.map((card) => (
                <a href="#win1" className={styles.servicesCard}>
                  <div className={styles.servicesCardImg1}></div>
                  <div className={styles.servicesCardName}>{card.service}</div>
                  <div className={styles.servicesCardDescription}>
                    {card.description}
                  </div>
                  <button className={styles.servicesCardButton}>
                    <img src={"../../static/icons/Vector.svg"} alt="" />
                    Подробнее
                  </button>
                  <a href="#x" className={styles.overlay} id="win1"></a>
                  <div className={styles.popup}>
                    <div>
                      <div className={styles.popupImg}></div>
                      <h2 className={styles.servicesCardName}>
                        {card.service}
                      </h2>
                      <p className={styles.popupDescription}>
                        {card.description}
                      </p>
                    </div>
                    <a
                      className={styles.closePopup}
                      title="Закрыть"
                      href="#close"
                    ></a>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div> */}
      <SendMessage />
      <OurDoctors />
    </>
  );
};

const SendMessage = () => {
  return (
    <div className={styles.sendMessage}>
      <div className={styles.sendMessageContainer}>
        <form action="#" className={styles.sendMessageBox}>
          <h1>Отправить сообщение</h1>
          <div className={styles.sendMessageBoxInput}>
            <input type="text" placeholder="ФИО" />
            <input type="email" placeholder="Email" />
            <input type="telephone" placeholder="Телефон" />
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Ваше сообщение"
          ></textarea>
          <button className={styles.sendMessageButton}>
            ОТПРАВИТЬ СООБЩЕНИЕ
          </button>
        </form>
      </div>
    </div>
  );
};

const OurDoctors = () => {
  return (
    <div>
      <div className={styles.sendMessageContainer}>
        <h1>Наши врачи</h1>
      </div>
    </div>
  );
};
