import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  medicalTitlle: {
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "30px",
    color: "#676767",
  },

  medicalTitlleBox: {
    borderBottom: "1px solid #4493B9",
    padding: "16px 0",
    marginTop: "16px",
  },
  medicalCard: {
    display: "flex",
    margin: "15px 0",
    paddingBottom: "15px",
    borderBottom: "1px solid #4493B9",
  },
  medicalIgm: {
    width: "27px",
    height: "27px",
    margin: "0 5px 5px 0",
  },
  medicalText: {
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "21px",
    color: "#676767",
    marginLeft: "7px",
    flexGrow: 1,
  },
}));
