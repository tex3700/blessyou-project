import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import useStyles from "./styles";
import { Container, Grid, Toolbar, Typography } from "@material-ui/core";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
// //////////

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container fixed>
        <Toolbar>
          <Grid container justifyContent="center">
            <Grid
              item
              container
              direction="row"
              alignItems="center"
              spacing={1}
              xs={3}
            >
              <Grid item>
                <PhoneIcon />
              </Grid>
              <Grid item>
                <Typography>8 800 777 77 77</Typography>
              </Grid>
            </Grid>

            <Grid
              item
              container
              direction="row"
              alignItems="center"
              spacing={1}
              xs={3}
            >
              <Grid item>
                <MailIcon />
              </Grid>
              <Grid item>
                <Typography>info@blessyou.ru</Typography>
              </Grid>
            </Grid>

            <Grid
              item
              container
              direction="row"
              alignItems="center"
              spacing={1}
              xs={3}
            >
              <Grid item>
                <LocationOnIcon />
              </Grid>
              <Grid item>
                <Typography>г.Москва, Ивановская площадь</Typography>
              </Grid>
            </Grid>

            <Grid
              item
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              xs={6}
            >
              {/* <Grid item>
              <Box>
                <Button variant="contained" color="error">
                  Log In
                </Button>
              </Box>
            </Grid> */}
            </Grid>

            {/* <Box>
          <Button variant="contained">Log In</Button>
        </Box> */}
          </Grid>
        </Toolbar>
      </Container>
    </footer>
  );
};

export default Footer;
