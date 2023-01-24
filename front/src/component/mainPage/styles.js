import { makeStyles } from "@material-ui/core";
import image from "../../static/images/Bunner.jpg";

const useStyles = makeStyles((theme) => ({
  mainPaper: {
    position: "relative",
    color: theme.palette.common.white,
    // marginBottom: theme.spacing(3),
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "750px",
    borderRadius: "0",

    // borderColor:
    //   " linear-gradient(90.48deg, rgba(22, 47, 98, 0.8) -1.21%, rgba(125, 214, 246, 0) 75.47%)",
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
    // fontWeight: "500",
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
}));

export default useStyles;
