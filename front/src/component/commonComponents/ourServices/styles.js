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

  /////
  iconBottonRoot: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

export default useStyles;
