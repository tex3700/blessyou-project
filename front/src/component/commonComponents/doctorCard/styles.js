import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 270,
    height: 371,
    boxShadow: "none",
    borderRadius: "10px",
  },
  media: {
    height: 270,
  },

  cardTitle: {
    fontSize: "18px",
    lineHeight: "30px",
    color: "#4493B9",
    textAlign: "center",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  cardText: {
    fontSize: "15px",
    lineHeight: "30px",
    display: "flex",
    alignItems: "center",
    color: "#676767",
  },
  cardButton: {
    color: "#4493B9",
  },
  cardButtonIcon: {
    color: "#76BF35",
  },
}));

export default useStyles;
