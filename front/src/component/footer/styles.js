import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    bottom: 0,
    left: "auto",
    right: 0,
    width: "100%",
    minHeight: "550px",
    background: "linear-gradient(270deg, #37A12F -4.12%, #80DB2E 102.94%)",
    color: "#FFFFFF",
    boxSizing: "border-box",
  },

  footerGridContainer: {
    marginTop: "93px",
    justifyContent: "space-between",
  },

  footerParagrafContent: {
    paddingTop: "20px",
    marginBottom: "35px",
  },

  footerTypografyMarginBottom: {
    marginBottom: "15px",
  },

  //////классы для переопределения некоторых свойств элементов MUI,
  root: {
    maxWidth: "260px",
  },

  colorPrimary: {
    color: theme.palette.common.white,
  },
  //
}));

export default useStyles;
