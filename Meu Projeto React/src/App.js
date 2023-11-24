
import React from 'react';
import './App.css';
import CarList from './components/CarList';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = () => (
  <div className="container">
    <h2>Página Inicial</h2>
    <p>Bem-vindo ao nosso site!</p>
  </div>
);

const About = () => (
  <div className="container">
    <h2>Sobre Nós</h2>
    <p>Somos uma empresa dedicada a carros incríveis.</p>
  </div>
);

function App() {
  const cars = ['Carro 1', 'Carro 2', 'Carro 3', 'Carro 4'];

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/car-list">Lista de Carros</Link>
            </li>
            <li>
              <Link to="/about">Sobre</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car-list" element={<CarList cars={cars} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

