import { makeStyles } from "@material-ui/core";
// import theme from "../../themes";

export const useStyles = makeStyles((theme) => ({
  servicesHead: {
    background: "linear-gradient(270deg, #37A12F -4.12%, #80DB2E 102.94%)",
    minHeight: "200px",
    "& h3": {
      // fontFamily: "Poppins, Helvetica, Arial, sans-serif",
      fontWeight: 700,
      fontSize: "50px",
      lineHeight: "80px",
      color: "#FFFFFF",
      display: "flex",
      minHeight: "200px",
      alignItems: "center",
    },
  },

  servicesGridTitle: {
    fontWeight: 700,
    fontSize: "46px",
    ineHeight: "48px",
    margin: "107px 0",
    color: "#76BF35",
  },

  servicesCardContainer: {},
  servicesCard: {},
  servicesCardMedia: {},
  servicesCardContent: {},
  servicesCardButton: {},
}));
