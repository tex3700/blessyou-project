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

const TopBar = () => {
  return (
    <AppBar>
      <Container fixed>
        <Toolbar>
          <PhoneIcon />
          <Typography>8 800 777 77 77</Typography>
          <MailIcon />
          <Typography>info@blessyou.ru</Typography>
          <LocationOnIcon />
          <Typography>г.Москва, Ивановская площадь</Typography>
          <Box>
            <Button color="inherit" variant="outlined">
              Log In
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default TopBar;
