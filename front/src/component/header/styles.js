import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  buttonWriteOn: {
    borderRadius: "20px",
    "&:hover": {
      backgroundColor: "green",
      color: "inherit",
    },
  },
  headerBox: {
    justifyContent: "flex-end",
    marginRight: theme.spacing(6),
  },

  headerButtonLink: {
    marginRight: theme.spacing(2),
    "&:hover": {
      color: "red",
    },
  },
}));

export default useStyles;
