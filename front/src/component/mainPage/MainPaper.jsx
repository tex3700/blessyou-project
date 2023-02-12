import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { Link } from "react-router-dom";

const MainPaper = () => {
  const classes = useStyles();
  return (
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
                to="/entryInLC"
              >
                Регистрируйтесь в личном кабинете
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Paper>
  );
};

export default MainPaper;
