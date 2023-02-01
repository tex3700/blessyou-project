import "./App.scss";

import { Route, Link, Routes } from "react-router-dom";
import {
  Receipts,
  Appointment,
  PatientAccountPage,
  Services,
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
function App() {
  return (
    // <ThemeProvider theme={theme}>
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<Appointment />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Appointment />} />
        <Route path="/contacts" element={<Receipts />} />
        <Route path="/entryInLC" element={<EntryPage />} />
        <Route path="/patientAccount/*" element={<PatientAccountPage />} />
      </Routes>
      <Footer />
    </>
    // </ThemeProvider>
  );
}

export default App;
