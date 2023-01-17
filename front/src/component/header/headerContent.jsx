import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Button,
} from "@material-ui/core";
import React from "react";
/////////////эта иконка поставлена как загдушка и для практики
import AdbIcon from "@mui/icons-material/Adb";
////////////

const linksArray = ["О клинике", "Услуги", "Врачи", "Акции", "Контакты"];

const HeaderContent = () => {
  return (
    <AppBar>
      <Container fixed>
        <Toolbar>
          <AdbIcon />
          <Typography>Any text</Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {linksArray.map((link) => (
              <Button key={link}>{link}</Button>
            ))}
          </Box>
          <Box>
            <Button variant="contained">Запись на прием</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default HeaderContent;
