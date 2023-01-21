import "./App.scss";
import { Route, Link, Routes } from "react-router-dom";
import { Receipts, Appointment } from "./component";
import Header from "./component/header/header";
import { Container } from "@material-ui/core";
import Main from "./component/mainPage/main";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <>
      <Container fixed>
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<Appointment />} />
          <Route path="/services" element={<Appointment />} />
          <Route path="/doctors" element={<Appointment />} />
          <Route path="/contacts" element={<Receipts />} />
          <Route path="/patientAccout" element={<Appointment />} />
        </Routes>

        <Footer />
      </Container>
    </>
  );
}

export default App;
