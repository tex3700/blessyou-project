import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  // servicesContainer: {
  //   maxWidth: "1180px",
  //   padding: "0 20px",
  //   margin: "0 auto",
  // },

  servicesHead: {
    background: "linear-gradient(270deg, #37A12F -4.12%, #80DB2E 102.94%)",
    minHeight: "200px",
    "& h3": {
      fontFamily: "Poppins, Helvetica, Arial, sans-serif",
      fontWeight: 700,
      fontSize: "50px",
      lineHeight: "80px",
      color: "#FFFFFF",
      display: "flex",
      minHeight: "200px",
      alignItems: "center",
    },
  },

  servicesTable: {
    display: "flex",
    flexDirection: "column",
    margin: "107px 0",
    "& h3": {
      fontFamily: "Poppins, Helvetica, Arial, sans-serif",
      textAlign: "center",
      fontWeight: 700,
      fontSize: "46px",
      lineHeight: "48px",
      color: "#76BF35",
    },
    "&Main": {
      marginTop: "40px",
      gridTemplateColumns: "repeat(3, 1fr)",
      rowGap: "40px",
      columnGap: "19px",
    },
  },
}));
