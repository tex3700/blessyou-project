import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  medicalTitlle: {
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "30px",
    color: "#676767",
  },
  medicalButton: {
    color: "#76BF35",
    display: "none",
  },

  medicalTitlleBox: {
    borderBottom: "1px solid #4493B9",
    padding: "16px 0",
    margin: "16px 0 10px",
  },
  medicalCard: {
    display: "flex",
    padding: "15px 0",
    borderBottom: "1px solid #F2F7FA",
    "&:hover": { background: "#F2F7FA" },
    "&:hover $medicalButton": { display: "block" },
    "&:hover $medicalDateText": { color: "#76BF35" },
  },
  medicalDateText: {
    color: "#676767",
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
  notesTextActive: {
    display: "none",
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "30px",
    color: "#76BF35",
  },
  notesText: {
    display: "inline",
    fontWeight: "300",
    fontSize: "20px",
    lineHeight: "30px",
    color: "#676767",
  },
  myNotes: {
    margin: "50px",
    minHeight: "65px",
    width: "100%",
    borderRadius: "30px",
    top: "50px",
    boxShadow: "5px 10px 50px rgba(16, 112, 177, 0.2)",
    "&:hover $notesText": {
      display: "none",
    },
    "&:hover $notesTextActive": {
      display: "inline",
    },
  },
}));
