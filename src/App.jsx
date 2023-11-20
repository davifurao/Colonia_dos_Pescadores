import './App.css';
import { Outlet } from 'react-router';
import { Routes, Route } from 'react-router-dom';
import Cabecalho from './components/scripts/Cabecalho';
import Home from './routes/Home';
import Rodape from './components/scripts/Rodape';


function App() {
  return (
    <>
      <Cabecalho />
      <Outlet />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Rodape></Rodape>
    </>
  );
}

export default App;
