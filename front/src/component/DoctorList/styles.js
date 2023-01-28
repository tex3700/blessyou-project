import { makeStyles } from "@material-ui/core";
import image from "../../static/images/Bunnerback.jpg"; 

const useStyles = makeStyles((theme) => ({

 mainPaper: {
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
    position: "absolute",
    width: "330px",
    height: "74px",
    top: "52px",
    left: "440px",
    fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "50px",
    lineHeight: "80px",
    color: "white",
  },

  docTextH3: {
    position: "relative",
    textAlign: "center",
    width: "986px",
    height: "47px",
    top: "-42px",
    left: "520px",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "46px",
    lineHeight: "48px",
    color: "#76BF35",
  }, 
 
  cardMedia: {
    position: "relative",
    width: "270px",
    height: "270px",
    paddingTop: "24px",
  }

}));

export default useStyles;
