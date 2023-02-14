import { makeStyles } from "@material-ui/core";

const useStylesRecept = makeStyles((theme) => ({
  title: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '36px',
    lineHeight: '30px',
    color: '#4493B9',
  },
  title_contact: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '30px',
    color: '#4493B9',
  },
  submit_button: {
    width: '268px !important'
  },
  servicesHead: {
    background: "linear-gradient(270deg, #37A12F -4.12%, #80DB2E 102.94%)",
    minHeight: "200px",
    "& h3": {
      fontWeight: 700,
      fontSize: "50px",
      lineHeight: "80px",
      color: "#FFFFFF",
      display: "flex",
      minHeight: "200px",
      alignItems: "center",
    },
  },
  icon_contact: {
    color: '#676767'
  },
  phone_contact: {
    marginLeft: '15px',
    fontSize: "16px",
    color: '#676767',
    opacity: '0.6'
  },
  email_contact: {
    fontSize: "16px",
    color: '#676767',
    marginLeft: '11px',
  },
  street_contact: {
    fontSize: "16px",
    color: '#676767',
    opacity: '0.6'
  },
  card: {
    boxShadow: '5px 10px 50px rgba(16, 112, 177, 0.2)',
    borderRadius: '10px',
    minWidth: 532
  }
}));

export default useStylesRecept;
