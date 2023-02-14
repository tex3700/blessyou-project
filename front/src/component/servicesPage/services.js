import React from "react";
import { Box, Container, Typography, Grid } from "@material-ui/core";
import { useStyles } from "./servicesStyle";
import physiotheraphy from "../../static/image/services/Physiotheraphy.jpg";
import lorImage from "../../static/image/services/LOR.jpg";
import pediatr from "../../static/image/services/Pediatr.jpg";
import ServiceCard from "../commonComponents/serviceCard/ServiceCard";
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
      <OurDoctorsSlider doctorArray={doctorArray} />
    </>
  );
};
