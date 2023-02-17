import { makeStyles } from "@material-ui/core";
import image from "../../static/images/Bunnerback.jpg"; 

const useStyles = makeStyles((theme) => ({

  docPaper: {
    position: "relative",
    color: theme.palette.common.white,
    //marginBottom: theme.spacing(3),
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    top: "-157px",
    height: "200px",
    borderRadius: "0",
 },
 
  docTextH2: {
    width: "100%",
    position: "relative",
    height: "74px",
    top: "50px",
    left: "60px",
    fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "50px",
    lineHeight: "80px",
    color: "white",
  },

  docTextH3: {
    width: "100%",
    position: "relative",
    textAlign: "center",
    height: "47px",
    top: "-42px",
    left: "10px",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "46px",
    lineHeight: "48px",
    color: "#76BF35",
  }, 
 
}));

export default useStyles;
