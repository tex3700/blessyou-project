import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    bottom: 0,
    left: "auto",
    right: 0,
    position: "fixed",
    width: "100%",
    backgroundColor: "#81c784",
  },

  root: {
    flexFlow: 1,
    padding: theme.spacing(1),
    marginTop: "auto",
  },
}));

export default useStyles;
