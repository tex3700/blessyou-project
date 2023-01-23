import { makeStyles } from "@material-ui/core";
// import themes from "../../themes";

const useStyles = makeStyles((theme) => ({
  appbar: {
    height: "120px",
    justifyContent: "center",
    boxShadow: "none",
  },

  buttonWriteOn: {
    height: "60px",
    background: "linear-gradient(173.86deg, #80DB2E 13.23%, #68C1DA 110.72%)",
    color: "#FFFFFF",
    boxShadow: "0px 15px 10px rgba(125, 214, 246, 0.13)",
    borderRadius: "30px",
    "&:hover": {
      boxShadow: "none",
    },
  },
  headerBox: {
    justifyContent: "flex-end",
    marginRight: theme.spacing(6),
  },

  headerButtonLink: {
    marginRight: theme.spacing(2),
    color: "#4493B9",
  },
}));

export default useStyles;
