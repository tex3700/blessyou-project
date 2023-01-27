import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import useStyles from "./styles";
import {
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import ListItemLink from "./ListItemLink";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { ThemeContext } from "@emotion/react";

// //////////

const aboutClinicList = [
  { name: "О нас", path: "/about" },
  { name: "Наши врачи", path: "/doctors" },
  { name: "Контакты", path: "/contacts" },
];
const ourServicesList = [
  { name: "Гастроинтеролог", path: "/about" },
  { name: "Педиатр", path: "/doctors" },
  { name: "Окулист", path: "/contacts" },
  { name: "Оторингология", path: "/contacts" },
  { name: "Терапевт", path: "/contacts" },
  { name: "Физиотерапия", path: "/contacts" },
];

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container fixed>
        <Toolbar>
          <Grid container wrap="wrap" className={classes.footerGridContainer}>
            <Grid item container className={classes.root}>
              <List>
                <Typography
                  variant="h5"
                  className={classes.footerTypografyMarginBottom}
                >
                  “Будьте Здоровы!”
                </Typography>
                <Divider />

                <Typography
                  variant="subtitle1"
                  className={classes.footerParagrafContent}
                >
                  Многофункциональный технологичный медицинский центр с
                  безграничными возможностями для своих пациентов.
                </Typography>

                <Typography>Будем на связи:</Typography>
                <IconButton target="blank" href="https://www.facebook.com">
                  <FacebookIcon className={classes.colorPrimary} />
                </IconButton>
                <IconButton target="blank" href="https://www.instagram.com/">
                  <InstagramIcon className={classes.colorPrimary} />
                </IconButton>
              </List>
            </Grid>

            <Grid item className={classes.root}>
              <List>
                <Typography
                  variant="h6"
                  className={classes.footerTypografyMarginBottom}
                >
                  О клинике
                </Typography>
                <Divider />
                {aboutClinicList.map((link) => (
                  <ListItem key={link.name} disableGutters>
                    <ListItemLink
                      to={link.path}
                      primary={link.name}
                      icon={link.icon}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>

            <Grid item>
              <List>
                <Typography
                  variant="h6"
                  className={classes.footerTypografyMarginBottom}
                >
                  Наши услуги
                </Typography>
                <Divider />
                {ourServicesList.map((link) => (
                  <ListItem key={link.name} disableGutters>
                    <ListItemLink
                      to={link.path}
                      primary={link.name}
                      icon={link.icon}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>

            <Grid item>
              <List>
                <Typography
                  variant="h6"
                  className={classes.footerTypografyMarginBottom}
                >
                  Контакты
                </Typography>
                <Divider />
                <ListItem disableGutters>
                  <ListItemLink
                    to="/about"
                    primary="Москва, Ивановская площадь"
                    icon={<LocationOnIcon className={classes.colorPrimary} />}
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemLink
                    to="/about"
                    primary="welcome@blessyou.ru"
                    icon={<MailIcon className={classes.colorPrimary} />}
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemLink
                    to="/about"
                    primary="8 800 777 77 77"
                    icon={<PhoneIcon className={classes.colorPrimary} />}
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </footer>
  );
};

export default Footer;
