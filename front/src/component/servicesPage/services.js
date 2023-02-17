import React, { useContext } from "react";
import { Box, Container, Typography, Grid } from "@material-ui/core";
import { useStyles } from "./servicesStyle";
import ServiceCard from "../commonComponents/serviceCard/ServiceCard";
import OurDoctorsSlider from "../commonComponents/ourDoctors/OurDoctorsSlider";
import { SendMessage } from "../commonComponents";
import { DataContext } from "../../DataContext";

export const Services = () => {
  const classes = useStyles();
  const { servicesArray, doctorArray } = useContext(DataContext);

  // console.log("doctorArray", doctorArray);

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
              {servicesArray.map((item) => (
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
