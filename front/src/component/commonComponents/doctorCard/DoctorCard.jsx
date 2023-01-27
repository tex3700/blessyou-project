import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

/////
const DoctorCard = ({ props }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent className={classes.cardContent}>
          <Typography className={classes.cardTitle} gutterBottom variant="h5">
            {`${props.title}`}
          </Typography>
          <Typography variant="subtitle1" className={classes.cardText}>
            {`${props.text}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default DoctorCard;
