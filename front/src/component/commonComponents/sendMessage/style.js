import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  sendMessage: {
    background: "linear-gradient(173.86deg, #80DB2E 13.23%, #68C1DA 110.72%)",
    minHeight: "543px",
    paddingTop: "64px",
  },

  sendMessageTitlle: {
    fontWeight: 700,
    fontSize: "46px",
    ineHeight: "30px",
    color: "#FFFFFF",
  },

  sendMessageInputBox: {
    display: "flex",
    justifyContent: "space-between",
    margin: "49px 0 24px 0",
    gap: "37px",
    "& input": {
      width: "300px",
      minHeight: "60px",
      background: "#FFFFFF",
      borderRadius: "5px",
      border: "transparent",
      fontSize: "16px",
      paddingLeft: "10px",
    },
  },

  sendMessageTextarea: {
    width: "100%",
    borderRadius: "5px",
    padding: "10px 0 0 10px",
    border: "transparent",
    fontSize: "20px",
  },
  // sendMessageInput: {
  //   width: "300px",
  //   maxHeight: "60px",
  //   background: "#FFFFFF",
  //   borderRadius: "5px",
  // },

  sendMessageButton: {
    width: "290px",
    height: "60px",
    background: "linear-gradient(270deg, #37A12F -4.12%, #80DB2E 102.94%)",
    boxShadow: "0px 15px 10px rgba(125, 214, 246, 0.13)",
    borderRadius: "0px 30px",
    fontWeight: 600,
    fontSize: "16px",
    ineHeight: "24px",
    color: "#FFFFFF",
  },
}));
