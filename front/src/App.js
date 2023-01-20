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

        {/* <div role="navigation">
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/appointment">Запись на прием</Link>
            </li>
            <li>
              <Link to="/receipts">Мои записи</Link>
            </li>
          </ul>
        </div> */}

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/receipts" element={<Receipts />} />
        </Routes>

        <Footer />
      </Container>
    </>
  );
}

export default App;
