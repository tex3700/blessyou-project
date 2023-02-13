import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { apiStorage } from "./../../../api";
/////
const DoctorCard = ({ props }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`${apiStorage}/doctor/${props.photo_path}`}
          title={props.id}
        />
        <CardContent className={classes.cardContent}>
          <Typography className={classes.cardTitle} gutterBottom variant="h5">
            {`${props.surname} ${props.name} ${props.patronymic}`}
          </Typography>
          <Typography variant="subtitle1" className={classes.cardText}>
            {`${props.info}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default DoctorCard;
