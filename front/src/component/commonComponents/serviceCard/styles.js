import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 370,
  },
  media: {
    height: 200,
  },

  cardTitle: {
    fontSize: "20px",
    lineHeight: "30px",
    color: "#4493B9",
  },
  cardText: {
    fontSize: "14px",
    lineHeight: "20px",
    display: "flex",
    alignItems: "center",
    color: "#676767",
  },

  cardButtonIcon: {
    color: "#76BF35",
  },
}));

export default useStyles;
