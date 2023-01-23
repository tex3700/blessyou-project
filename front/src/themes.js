import { createTheme } from "@mui/material/styles";

const themes = createTheme({
  palette: {
    primary: {
      main: "#76BF35",
    },
    secondary: {
      main: "#4493B9",
    },
  },

  spacing: 2, // 2 вместо 8 sm
});

export default themes;
