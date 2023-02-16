import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { apiStorage } from "../../../api";

/////
const ServiceCard = ({ props }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`${apiStorage}/department/${props.photo_path}`}
          title={props.title}
        />
        <CardContent>
          <Typography className={classes.cardTitle} gutterBottom variant="h5">
            {props.name}
          </Typography>
          <Typography variant="body2" className={classes.cardText}>
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          className={classes.cardButton}
          startIcon={<ArrowForwardIcon className={classes.cardButtonIcon} />}
        >
          Подробнее
        </Button>
      </CardActions>
    </Card>
  );
};
export default ServiceCard;
