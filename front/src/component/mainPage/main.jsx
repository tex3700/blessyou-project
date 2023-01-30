import React from "react";
import useStyles from "./styles";
import MainPaper from "./MainPaper";
import MainAboutUs from "./MainAboutUs";
import OurSevicesComp from "../commonComponents/ourServices/OurSevicesComp";
import OurDoctorsSlider from "../commonComponents/ourDoctors/OurDoctorsSlider";

const Main = () => {
  const classes = useStyles();
  return (
<<<<<<< HEAD
    
    <Paper className={classes.mainPaper}>
      <Container fixed>
        <Box className={classes.mainBox}>
          <Grid container className={classes.mainContentGrid}>
            <Grid item>
              {" "}
              <Typography className={classes.mainTextH2} variant="h2">
                С нами легко
              </Typography>
              <Typography className={classes.mainTextH2} variant="h2">
                быть здоровыми!
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle1"
                className={classes.mainTextParagraf}
              >
                Новая система медицинского обслуживания для всей семьи
              </Typography>
            </Grid>
            <Grid item>
              <Button
                className={classes.mainRegistrationButton}
                component={Link}
                to="/patientAccout"
              >
                Регистрируйтесь в личном кабинете
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Paper>
=======
    <>
      <MainPaper />
      <OurSevicesComp />
      <MainAboutUs />
      <OurDoctorsSlider />
    </>
>>>>>>> 0a454904ee80c179d514ac819bfea9aa62a2f986
  );
};

export default Main;


