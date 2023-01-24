import { makeStyles } from "@material-ui/core";
import image from "../../static/images/Bunner.jpg";

const useStyles = makeStyles((theme) => ({
  mainPaper: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(3),
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },

  mainContent: {
    color: 'green',
  },
  cardMedia: {
    paddingTop: "100%",
  }

}));

export default useStyles;
