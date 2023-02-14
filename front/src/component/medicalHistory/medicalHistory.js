import { Box, Container, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styleMedical";
import { MedicalCard } from "./medicalCard";

export const MedicalHistory = () => {
  const classes = useStyles();

  return (
    <>
      <Container fixed>
        <Box className={classes.medicalTitlleBox}>
          <Typography className={classes.medicalTitlle}>
            Дата и специалист
          </Typography>
        </Box>
        <MedicalCard title="Богомолова Анна Сергеевна" prof="Дерматолог" />
        <MedicalCard title="Иванов Иван Иванович" prof="Гастроэнтеролог" />
      </Container>
      <Box style={{ minHeight: "300px" }}></Box>
    </>
  );
};
