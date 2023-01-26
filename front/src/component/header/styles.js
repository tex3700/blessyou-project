import { makeStyles } from "@material-ui/core";
// import themes from "../../themes";
import mainLogo from "./../../static/icons/headerLogo.png";
import enteranceDoctorsIcon from "./../../static/icons/enteranceDoctorsIcon.svg";

const useStyles = makeStyles((theme) => ({
  appbar: {
    position: "relative",
    height: "120px",
    justifyContent: "center",
    boxShadow: "none",
    color: "white",
  },

  headerLogo: {
    height: "85px",
    width: "126px",
    backgroundImage: `url(${mainLogo})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  headerDoctorsEnterance: {
    height: "36px",
    width: "36px",
    backgroundImage: `url(${enteranceDoctorsIcon})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },

  buttonWriteOn: {
    height: "60px",
    background: "linear-gradient(173.86deg, #80DB2E 13.23%, #68C1DA 110.72%)",
    color: "#FFFFFF",
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "center",
    boxShadow: "0px 15px 10px rgba(125, 214, 246, 0.13)",
    borderRadius: "30px",
    "&:hover": {
      boxShadow: "none",
    },
  },
  headerBox: {
    justifyContent: "flex-end",
    // marginRight: theme.spacing(6),
  },
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },

  headerButtonLink: {
    marginRight: theme.spacing(2),
    color: "#4493B9",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "600",
    textAlign: "center",
  },
}));

export default useStyles;
