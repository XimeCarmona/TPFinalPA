import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DetallesPelicula from './pages/DetallesPelicula';
import Trailers from './pages/Trailers';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pelicula/:id" element={<DetallesPelicula />} />
          <Route path="/pelicula/:id/trailers" element={<Trailers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;