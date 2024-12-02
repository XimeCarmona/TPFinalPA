import React, { useState } from 'react';
import { buscarPeliculas } from '../utils/api';

function Busqueda({ setPeliculas, setTotalPaginas }) {
  const [query, setQuery] = useState('');

  const manejarBusqueda = (e) => {
    e.preventDefault();
    if (query) {
      buscarPeliculas(query).then((data) => {
        setPeliculas(data.results);
        setTotalPaginas(data.total_pages);
      });
    }
  };

  return (
    <form onSubmit={manejarBusqueda} className="busqueda-form">
      <div className="busqueda-input-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar películas..."
        />
        <button type="submit">Buscar</button>
      </div>
    </form>
  );
}

export default Busqueda;
