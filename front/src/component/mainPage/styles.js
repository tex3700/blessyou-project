import { makeStyles } from "@material-ui/core";
import mainPageBunner from "./../../static/image/mainPageBunner.jpg";
import mainAboutUs from "./../../static/image/mainAboutUs.jpg";

const useStyles = makeStyles((theme) => ({
  ////////////////////////
  ////styles for MainPaper
  mainPaper: {
    position: "relative",
    color: theme.palette.common.black,
    backgroundImage: `url(${mainPageBunner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "750px",
    borderRadius: "0",
  },

  mainBox: {
    color: "#FFFFFF",
  },

  mainTextH2: {
    fontWeight: "800",
    fontSize: "64px",
    lineHeight: "80px",
  },

  mainTextParagraf: {
    width: "597px",
    fontSize: "32px",
    lineHeight: "40px",
  },
  mainContentGrid: {
    paddingTop: "136px",
    flexDirection: "column",
    gap: "40px",
  },

  mainRegistrationButton: {
    width: "236px",
    height: "84px",
    color: " #FFFFFF",
    background: "linear-gradient(270deg, #37A12F -4.12%, #80DB2E 102.94%)",
    boxShadow: "0px 15px 10px rgba(125, 214, 246, 0.13)",
    borderRadius: "0px 30px",
    "&:hover": {
      boxShadow: "none",
    },
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "center",
    textTransform: "uppercase",
  },

  ////////////////////////////////
  ////styles for MainWelcome
}));

export default useStyles;
