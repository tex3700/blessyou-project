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
import DoctorList from "./component/DoctorList/doctorlList";

import Header from "./component/header/header";
// import { Container } from "@material-ui/core";
import Main from "./component/mainPage/main";
import Footer from "./component/footer/Footer";
import EntryPage from "./component/entryInLC/EntryPage";
import { useEffect, useState } from "react";
import { apiRequest } from "./api";
import { DataProvider } from "./DataContext";

/////
function App() {
  const [isAuth, setIsAuth] = useState(null);

  return (
    <>
      <Header isAuth={isAuth} />
      {/* Описание DataProvider в файле DataContext.js */}
      <DataProvider>
        <Routes>
          <Route path="/about" element={<Appointment />} />
          <Route path="/doctors" element={<DoctorList />} />
          <Route path="/contacts" element={<Receipts />} />
          <Route path="/" element={<Main />} />
          <Route path="/services" element={<Services />} />

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
                <PatientAccountPage isAuth={isAuth} />
              </PrivateRoute>
            }
          />
        </Routes>
      </DataProvider>
      <Footer />
    </>
  );
}

export default App;
