import { makeStyles } from "@material-ui/core";
import arrowLeft from "./../../../static/icons/arrowLeft.png";
import arrowRight from "./../../../static/icons/arrowRight.png";
const useStyles = makeStyles((theme) => ({
  ourServicesPaper: {
    width: "100%",
    minHeight: "760px",
    background: "#F2F7FA",
    boxShadow: "none",
  },
  ourServicesGrid: {
    paddingTop: "70px",
    justifyContent: "center",
    paddingBottom: "100px",
  },
  ourServicesGridTitle: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  ourServicesCarouseleGrid: {
    marginTop: "30px",
    justifyContent: "space-between",
  },
  ourServicesTitle: {
    fontSize: "46px",
    lineHeight: "48px",
    color: "#76BF35",
  },
  ourServicesArrow: {
    height: "60px",
    width: "60px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  ourServicesArrowLeft: {
    backgroundImage: `url(${arrowLeft})`,
  },
  ourServicesArrowRight: {
    backgroundImage: `url(${arrowRight})`,
  },

  //////копия общих стилей для кнопки, которая повторяется в элементах
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

  mainAboutUsButton: {
    marginTop: "60px",
    width: "156px",
    height: "60px",
  },

  /////
  iconBottonRoot: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

export default useStyles;
