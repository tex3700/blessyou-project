import React from "react";
import { useStyles } from "./styleMedical";
import search from "../../static/icons/medical/searchMed.svg";
import sent from "../../static/icons/medical/sentMed.svg";
import { Avatar, Box, CardMedia, Typography } from "@material-ui/core";
import { apiStorage } from "../../api";

export const MedicalCard = ({ props, changeRenderButtonCard }) => {
  const classes = useStyles();

  return (
    <Box className={classes.medicalCard}>
      <Avatar alt="Doctor" src={`${apiStorage}/doctor/${props.photo_path}`} />
      <Box className={classes.medicalText}>
        <Typography className={classes.medicalDateText}>
          12.01.2023, 10:00 -10:30
        </Typography>
        <p>
          {props.surname} {props.name} {props.patronymic}
        </p>
        <p>{props.info}</p>
      </Box>
      <Box style={{ alignSelf: "center" }}>
        <CardMedia className={classes.medicalIgm} image={`${search}`} />
        <CardMedia className={classes.medicalIgm} image={`${sent}`} />
      </Box>
    </Box>
  );
};
