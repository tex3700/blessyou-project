import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Paper,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "./servicesStyle";
import physiotheraphy from "../../static/image/services/Physiotheraphy.jpg";
import lorImage from "../../static/image/services/LOR.jpg";
import pediatr from "../../static/image/services/Pediatr.jpg";
import ServiceCard from "../commonComponents/serviceCard/ServiceCard";
import ivanovDoctor from "../../static/image/doctors/ivanovDoctor.jpg";
import petrovaDoctor from "../../static/image/doctors/petrovaDoctor.jpg";
import smirnovDoctor from "../../static/image/doctors/smirnovDoctor.jpg";
import sidorovaDoctor from "../../static/image/doctors/sidorovaDoctor.jpg";
import DoctorCard from "../commonComponents/doctorCard/DoctorCard";
import OurDoctorsSlider from "../commonComponents/ourDoctors/OurDoctorsSlider";
import { SendMessage } from "../commonComponents";

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

export const doctorsList = [
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

  {
    title: "Смирнов А.Б.",
    text: "Гатроэнтеролог",
    image: `${smirnovDoctor}`,
  },

  {
    title: "Сидорова Н.В.",
    text: "Отоларинголог",
    image: `${sidorovaDoctor}`,
  },
];

export const Services = ({ doctorArray }) => {
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
            className={classes.servicesMainTitle}
          >
            Полный спектр медицинских услуг
          </Typography>

          <Container>
            <Grid
              container
              spacing={2}
              className={classes.servicesCardContainer}
            >
              {servicesTable.map((item) => (
                <ServiceCard key={item.id} props={item} />
              ))}
            </Grid>
          </Container>
        </Container>
      </Box>
      <SendMessage />
      <OurDoctorsSlider doctorArray={doctorArray}></OurDoctorsSlider>
    </>
  );
};
