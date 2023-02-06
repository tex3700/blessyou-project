import "./App.scss";

import { Route, Link, Routes } from "react-router-dom";
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

const usersArray = [
  { id: 1, name: "Dima", email: "test@mail.ru", password: "12345" },
  { id: 2, name: "Vova", email: "mail@mail.ru", password: "56789" },
];

const isAuth = true;

function App() {
  return (
    // <ThemeProvider theme={theme}>
    <>
      <Header isAuth={isAuth} />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<Appointment />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Appointment />} />
        <Route path="/contacts" element={<Receipts />} />

        {/* <Route path="/entryInLC" element={<EntryPage />} /> */}
        <Route
          path="/entryInLC"
          element={
            <PublicRoute isAuth={isAuth}>
              <EntryPage />
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
