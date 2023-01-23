import { makeStyles } from "@material-ui/core";
import image from "./../../static/image/mainPageBunner.jpg";

const useStyles = makeStyles((theme) => ({
  mainPaper: {
    position: "relative",
    color: theme.palette.common.black,
    marginBottom: theme.spacing(5),
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
}));

export default useStyles;
