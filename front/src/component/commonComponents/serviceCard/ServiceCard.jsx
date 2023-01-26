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

/////
const ServiceCard = ({ props }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography className={classes.cardTitle} gutterBottom variant="h5">
            {`${props.title}`}
          </Typography>
          <Typography variant="body2" className={classes.cardText}>
            {`${props.text}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          startIcon={<ArrowForwardIcon className={classes.cardButtonIcon} />}
        >
          Подробнее
        </Button>
      </CardActions>
    </Card>
  );
};
export default ServiceCard;
