import React, { useState } from "react";
import { useStyles } from "../medicalHistory/styleMedical";
import { Avatar, Box, Typography } from "@material-ui/core";
import { apiRequest, apiStorage } from "../../api";
import { Button } from "@material-ui/core";

export const MedicalCard = ({ props }) => {
  const classes = useStyles();

  // удаляем карточку доктора из рендера и базы
  const [visible, setVisible] = useState(true);

  const deleteCardDate = () => {
    setVisible(props.index === !visible);
    apiRequest(`delete-record/${props.id_record}`, "DELETE").then((result) => {
      console.log("result", result);
    });
  };
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
            onClick={deleteCardDate}
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
