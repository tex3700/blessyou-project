import { AppBar, Box, Toolbar } from "@material-ui/core";
import React from "react";

const TopBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar></Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopBar;
