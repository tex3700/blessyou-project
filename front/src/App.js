import "./App.scss";

import { Route, Link, Routes, Navigate, useNavigate } from "react-router-dom";
import {
  Receipts,
  Appointment,
  PatientAccountPage,
  Services,
  PrivateRoute,
  PublicRoute,
} from "./component";

import Header from "./component/header/header";
// import { Container } from "@material-ui/core";
import Main from "./component/mainPage/main";
import Footer from "./component/footer/Footer";
import EntryPage from "./component/entryInLC/EntryPage";
import { useEffect, useState } from "react";
import { apiRequest } from "./api";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import themes from "./themes";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#76BF35",
//     },
//     secondary: {
//       main: "#4493B9",
//     },
//   },

//   spacing: 2, // 2 вместо 8 sm
// });

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  // const redirectFunc = () => {
  //   if (isAuth) {
  //     console.log("isAuth", isAuth);
  //     return <Navigate to="/patientAccount/appointment" replace />;
  //   }
  // };

  // useEffect(() => {
  //   redirectFunc();
  // }, [isAuth]);

  const [doctorArray, setDoctorArray] = useState([]);

  useEffect(() => {
    apiRequest("doctors", "GET").then((data) => {
      setDoctorArray(data);
      console.log(data);
      console.log("doctorArray ", doctorArray);
    });
  }, []);

  return (
    <>
      <Header isAuth={isAuth} />

      <Routes>
        {/* <Route path="/" element={<Main doctorArray={doctorArray} />} /> */}
        <Route path="/about" element={<Appointment />} />
        {/* <Route
          path="/services"
          element={<Services doctorArray={doctorArray} />}
        /> */}
        <Route path="/doctors" element={<Appointment />} />
        <Route path="/contacts" element={<Receipts />} />
        {doctorArray.length > 0 && (
          <Route path="/" element={<Main doctorArray={doctorArray} />} />
        )}
        {doctorArray.length > 0 && (
          <Route
            path="/services"
            element={<Services doctorArray={doctorArray} />}
          />
        )}
        {/* <Route path="/entryInLC" element={<EntryPage />} /> */}
        <Route
          path="/entryInLC"
          element={
            <PublicRoute isAuth={isAuth}>
              <EntryPage setIsAuth={setIsAuth} />
            </PublicRoute>
          }
        />
        <Route
          path="/patientAccount/*"
          element={
            <PrivateRoute isAuth={isAuth}>
              <PatientAccountPage />
            </PrivateRoute>
          }
        />
        {/* <Route path="/patientAccount/*" element={<PatientAccountPage />} /> */}
      </Routes>
      <Footer />
    </>
    // </ThemeProvider>
  );
}

export default App;
