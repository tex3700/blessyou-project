import { Box, Container, Typography } from "@material-ui/core";
import React, { useContext, useLayoutEffect, useState } from "react";
import { useStyles } from "../medicalHistory/";
import { MedicalCard } from "./activeAppointmentCard";
import { apiRequest } from "../../api";
import { DataContext } from "../../DataContext";

export const ActiveAppointments = ({ activePatientId }) => {
  const classes = useStyles();
  const { doctorArray } = useContext(DataContext);

  const [patientSelection, setpatientSelection] = useState([]);

  useLayoutEffect(() => {
    apiRequest(`records/patient/${activePatientId}`, "GET").then((data) => {
      setpatientSelection(data);
    });
  }, [activePatientId]);

  // console.log("patientSelection", patientSelection);

  const arreyRecordDoctors = patientSelection.map((item) => {
    // создаем "костыль" для вывода даты и времени приема
    let dateRecord_time = item.record_time.split(":", 2).join(":");
    let dateEnd_time = item.end_time.split(" ").pop().split(":", 2).join(":");

    // создаем "костыль" для соединения 2-х массивов, для вывода докторов
    const [result] = doctorArray.filter(
      (itemFilter) => itemFilter.id === item.doctor_id
    );

    // возвращаю новый массив и добавляю поле записи на приём

    return {
      ...result,
      dateRecord: `${dateRecord_time} - ${dateEnd_time}`,
      id_record: item.id,
    };
  });

  return (
    <>
      <Container fixed>
        <Box className={classes.medicalTitlleBox}>
          <Typography className={classes.medicalTitlle}>
            Дата и специалист
          </Typography>
        </Box>

        {arreyRecordDoctors.map((item, i) => (
          <MedicalCard key={i} index={i} props={item} />
        ))}
      </Container>
      <Box style={{ minHeight: "300px" }}></Box>
    </>
  );
};
