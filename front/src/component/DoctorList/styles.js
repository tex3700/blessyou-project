import { makeStyles } from "@material-ui/core";
import image from "../../static/images/Bunnerback.jpg"; 

const useStyles = makeStyles((theme) => ({

 mainBoxh2: {
    position: "relative",
    color: theme.palette.common.white,
    // marginBottom: theme.spacing(3),
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
   
    borderRadius: "0",
 },
 
  mainContenth3: {
    width: "986px",
    height: "47px",
    fontfamily: "Poppins",
    fontstyle: "normal",
    fontweight: "700",
    fontsize: "46px",
    lineheight: "48px",
    color: "green",
  }, 
 
  mainPaperh2: {
  
    width: "330px",
    height: "74px",
    fontfamily: "Poppins",
    fontstyle: "normal",
    fontweight: "700",
    fontsize: "50px",
    lineheight: "80px",
    /* or 160% */
     color: "black",
  }, 

  cardMedia: {
 
    width: "270px",
    height: "270px",
    paddingTop: "24px",
  }

}));

export default useStyles;
