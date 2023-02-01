import "./App.scss";

import { Route, Link, Routes } from "react-router-dom";
import { Receipts, Appointment, PatientAccountPage, Services } from "./component";

import Header from "./component/header/header";
// import { Container } from "@material-ui/core";
import Main from "./component/mainPage/main";
import Footer from "./component/footer/Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import DoctorList from "./component/DoctorList/doctorlList";
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
        <Route path="/services" element={<Appointment />} />
        <Route path="/doctors" element={<DoctorList/>} />
        <Route path="/contacts" element={<Receipts />} />
        <Route path="/patientAccount/*" element={<PatientAccountPage />} />
      </Routes>
      <Footer />
    </>
    // </ThemeProvider>
  );
}

export default App;
