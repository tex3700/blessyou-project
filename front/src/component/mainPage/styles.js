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

  mainAboutUsGrid: {
    margin: "100px 0",
    justifyContent: "space-between",
    gap: "80px",
  },
  mainAboutUsGridContent: {
    maxWidth: "570px",
  },
  mainAboutUsGridContentBest: {
    marginTop: "20px",
    gap: "25px",
  },
  mainAboutUsGridContentBestItem: {
    display: "flex",
    alignItems: "center",
    width: "45%",
  },
  mainAboutUsImage: {
    backgroundImage: `url(${mainAboutUs})`,
    width: "470px",
    height: "570px",
  },
  mainAboutUsButton: {
    marginTop: "60px",
    width: "156px",
    height: "60px",
  },

  mainAboutUsTitle: {
    fontSize: "36px",
    lineHeight: "55px",
    color: "#76BF35",
  },

  mainAboutUsText: {
    fontSize: "16px",
    lineHeight: "24px",
    color: "#676767",
  },
  mainAboutUsTextBest: {
    fontSize: "16px",
    lineHeight: "30px",
    color: "#4493B9",
  },

  colorPrimary: {
    color: "#76BF35",
    marginRight: theme.spacing(2),
  },
}));

export default useStyles;
