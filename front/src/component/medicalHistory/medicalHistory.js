import { Box, Container, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { useStyles } from "./styleMedical";
import { MedicalCard } from "./medicalCard";
import { DataContext } from "../../DataContext";

export const MedicalHistory = () => {
  const classes = useStyles();
  const { doctorArray } = useContext(DataContext);

  console.log("doctorArray", doctorArray);

  return (
    <>
      <Container fixed>
        <Box className={classes.medicalTitlleBox}>
          <Typography className={classes.medicalTitlle}>
            Дата и специалист
          </Typography>
        </Box>
        <MedicalCard props={doctorArray[3]} />
        <MedicalCard props={doctorArray[4]} />
      </Container>
      <Box style={{ minHeight: "300px" }}></Box>
    </>
  );
};
