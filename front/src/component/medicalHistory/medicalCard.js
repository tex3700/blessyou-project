import React from "react";
import { useStyles } from "./styleMedical";
import search from "../../static/icons/medical/searchMed.svg";
import sent from "../../static/icons/medical/sentMed.svg";
import { Avatar, Box, CardMedia, Typography } from "@material-ui/core";

export const MedicalCard = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.medicalCard}>
      <Avatar alt="Doctor" src="" />
      <Box className={classes.medicalText}>
        <Typography>12.01.2023, 10:00 -10:30</Typography>
        <p>{props.title}</p>
        <p>{props.prof}</p>
      </Box>
      <Box>
        <CardMedia className={classes.medicalIgm} image={`${search}`} />
        <CardMedia className={classes.medicalIgm} image={`${sent}`} />
      </Box>
    </Box>
  );
};
