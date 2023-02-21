import { Container, Box, Link as MuiLink, Typography } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import {
  Route,
  NavLink as ReactRouterLink,
  Routes,
  useLocation,
} from "react-router-dom";
import { Appointment } from "../appointment";
import { PatientProfile } from "../patientProfile";
import { MedicalHistory } from "../medicalHistory";
import { DialogSelectPatient } from "../dialogSelectPatient";

import AutorenewIcon from "@mui/icons-material/Autorenew";
import { apiRequest } from "../../api";
import { ActiveAppointments } from "../activeAppointments";
import { data } from "../appointment/data";

const useStyles = makeStyles((theme) => ({
  accoutPage: {
    display: "flex",
    flexDirection: "column",
  },
  header: {
    background: "linear-gradient(270deg, #37A12F -4.12%, #80DB2E 102.94%)",
    paddingTop: "63px",
    paddingBottom: "63px",
  },
  headerCaption: {
    marginLeft: theme.spacing(3),
    //fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "50px",
    lineHeight: "80px",
    color: "#FFFFFF",
  },
  menu: {
    paddingTop: "38px",
    paddingBottom: "38px",
    background: "#4493B9",
  },
  menuLink: {
    marginLeft: theme.spacing(3),
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#F2F7FA",
    "&:hover": {
      textDecoration: "none",
    },
    "&:active": {
      color: "#80DB2E", //'#76BF35'
    },
    "&.active": {
      color: "#80DB2E", //'#76BF35'
    },
  },
  patientInfo: {
    background: "#F2F7FA",
    paddingTop: "38px",
    paddingBottom: "38px",
    "& > div": {
      display: "flex",
      flexDirection: "columns",
      "& > *": {
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "24px",
        //color: '#676767'
      },
    },
  },
  patientName: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(1),
    color: "#676767",
  },
  patientChange: {
    color: "#4493B9",
    margin: "auto",
  },
  patientExit: {
    marginRight: theme.spacing(3),
    color: "#676767",
  },
  empty: {
    flexGrow: 1,
  },
  contentBox: {
    flexGrow: 1,
  },
}));

const menu = [
  {
    caption: "Профиль",
    link: "patientProfile",
    path: "patientProfile",
    element: <PatientProfile />,
  },
] 
  
export const PatientAccountPage = ({ isAuth }) => {
  const [open, setOpen] = useState(false);

  const refAppointment = useRef(null);
  const location = useLocation();

  useEffect(() => {
    refAppointment.current?.click();
  }, []);

  const getActiveNavLinkCaption = () => {
    const pathname = location.pathname.replace("/patientAccount/", "");
    const activeMenu = menu.find((item) => pathname.startsWith(item.link, 0));
    return activeMenu ? activeMenu.caption : "";
  };

  const classes = useStyles();

  const onExit = () => {
    apiRequest("doctors", "GET").then((data) => console.log(data));
  };

  const onSelectPatientClick = () => {
    setOpen(true);
  };

  const onCloseDialog = () => {
    setOpen(false);
  };

  ///test apiRequest for set user data
  const [userData, setUserData] = useState("");

  const userDataFetch = async (isAuth) => {
    let userUrl = `patient-private/${isAuth}`;
    try {
      let res = await apiRequest(userUrl, "Get");
      console.log("responce", res);
      await setUserData(res.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  ///
  useEffect(() => {
    userDataFetch(isAuth);
    console.log("ueEffect", userData);
  }, []);
  console.log("isAuth", userData);

  ///
  return (
    <>
      <Box className={classes.accountPage}>
        <Box className={classes.header}>
          <Container fixed>
            <Typography className={classes.headerCaption} variant="h4">
              {`Личный кабинет пациента | ${getActiveNavLinkCaption()}`}
            </Typography>
          </Container>
        </Box>
        <Box className={classes.menu}>
          <Container fixed>
            {menu.map((item, index) => (
              <MuiLink
                key={index}
                component={ReactRouterLink}
                to={item.link}
                className={classes.menuLink}
                innerRef={
                  item.link === "activeAppointments" ? refAppointment : null
                }
              >
                {item.caption}
              </MuiLink>
            ))}
          </Container>
        </Box>
        <Box className={classes.patientInfo}>
          <Container fixed>
            <Typography variant="body1" className={classes.patientName}>
              Здравствуйте, дорогой пациент
            </Typography>
            <AutorenewIcon
              className={classes.patientChange}
              onClick={onSelectPatientClick}
            />
            <Box className={classes.empty}></Box>
            <Typography
              variant="body1"
              className={classes.patientExit}
              onClick={() => onExit()}
            >
              Выход
            </Typography>
          </Container>
        </Box>
        <Box className={classes.contentBox}>
          <Routes>
            {menu.map((item, index) => (
              <Route key={index} path={item.path} element={item.element} />
            ))}
          </Routes>
        </Box>
      </Box>
      <DialogSelectPatient
        open={open}
        onClose={onCloseDialog}
      ></DialogSelectPatient>
    </>
  );
};
