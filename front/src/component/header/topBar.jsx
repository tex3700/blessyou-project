import {
  AppBar,
  Box,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const TopBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className="topBarBox">
      <AppBar>
        <Toolbar>
          <Container fixed>
            <Grid container>
              <PhoneIcon />

              <Typography>8 800 777 77 77</Typography>

              <MailIcon />
              <Typography>info@blessyou.ru</Typography>
              <LocationOnIcon />
              <Typography>г.Москва, Ивановская площадь</Typography>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopBar;
