import React, { useLayoutEffect, useState } from "react";
import { useStyles } from "./styleMedical";
import search from "../../static/icons/medical/searchMed.svg";
import sent from "../../static/icons/medical/sentMed.svg";
import { Avatar, Box, CardMedia, Typography } from "@material-ui/core";
import { apiStorage } from "../../api";
import { Button } from "@material-ui/core";

export const MedicalCard = ({ props, changeRenderButtonCard }) => {
  const classes = useStyles();
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    setVisible(changeRenderButtonCard);
  }, [changeRenderButtonCard]);

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
        {!visible && (
          <CardMedia className={classes.medicalIgm} image={`${search}`} />
        )}
        {!visible && (
          <CardMedia className={classes.medicalIgm} image={`${sent}`} />
        )}
        {visible && (
          <Button size="small" className={classes.medicalButton}>
            Отменить
          </Button>
        )}
      </Box>
    </Box>
  );
};
