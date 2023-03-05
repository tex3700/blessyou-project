import React from "react";
import { useStyles } from "../medicalHistory/styleMedical";
import { Avatar, Box, Typography } from "@material-ui/core";
import { apiStorage } from "../../api";
import { Button } from "@material-ui/core";

export const MedicalCard = ({ props, deleteCardDate, visible }) => {
  const classes = useStyles();

  // console.log("props", props);

  if (visible) {
    return (
      <Box className={classes.medicalCard}>
        <Avatar alt="Doctor" src={`${apiStorage}/doctor/${props.photo_path}`} />
        <Box className={classes.medicalText}>
          <Typography className={classes.medicalDateText}>
            {props.dateRecord}
          </Typography>
          <p>
            {props.surname} {props.name} {props.patronymic}
          </p>
          <p>{props.info}</p>
        </Box>
        <Box style={{ alignSelf: "center" }}>
          <Button
            onClick={() => {
              deleteCardDate(props.id_record);
            }}
            size="small"
            className={classes.medicalButton}
          >
            Отменить
          </Button>
        </Box>
      </Box>
    );
  }
};
