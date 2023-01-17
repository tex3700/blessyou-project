import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import useStyles from "./styles";

//пока еще не понимаю систему позиционирования, поэтому оставляю в базовом варианте, после добавлю стили с позиционированием
//также необходимо установить палитру цветов в theme для исп-я в проекте, т.к по умолч. можно исп-ть только primary и secondary

const TopBar = () => {
  return (
    // <AppBar>
    <Container fixed>
      <Toolbar>
        <Grid
          item
          container
          direction="row"
          alignItems="center"
          spacing={1}
          xs={6}
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
          xs={6}
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
          xs={6}
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
          <Grid item>
            <Box>
              <Button variant="contained" color="error">
                Log In
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* <Box>
          <Button variant="contained">Log In</Button>
        </Box> */}
      </Toolbar>
    </Container>
  );
};

export default TopBar;
