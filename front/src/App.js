import './App.scss';
import { Route, Link, Routes } from 'react-router-dom';
import { Receipts, Appointment } from './component';


function App() {
  return (
    <>
      <div role="navigation">
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
      </div>

      <Routes>
        <Route path="/" element={<h1 className='test'>Главная страница</h1>} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/receipts" element={<Receipts />} />
      </Routes>
    </>

  );
}

export default App;
