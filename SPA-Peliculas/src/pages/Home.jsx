import React, { useEffect, useState } from 'react';
import { obtenerPeliculasPopulares } from '../utils/api';
import CardPelicula from '../components/CardPelicula';
import Paginacion from '../components/Paginacion';
import Busqueda from '../components/Busqueda';

function Home() {
  const [peliculas, setPeliculas] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(0);

  useEffect(() => {
    obtenerPeliculasPopulares(paginaActual).then((data) => {
      setPeliculas(data.results);
      setTotalPaginas(data.total_pages);
    });
  }, [paginaActual]);

  return (
    <div>
      {/* Encabezado con título */}
      <header className="header">
        <h1>Películas</h1>
      </header>

      {/* Barra de búsqueda */}
      <div className="busqueda-container">
        <Busqueda setPeliculas={setPeliculas} setTotalPaginas={setTotalPaginas} />
      </div>

      {/* Grilla de películas */}
      <div className="grid">
        {peliculas.map((pelicula) => (
          <CardPelicula key={pelicula.id} pelicula={pelicula} />
        ))}
      </div>

      {/* Paginación */}
      <Paginacion
        paginaActual={paginaActual}
        totalPaginas={totalPaginas}
        setPaginaActual={setPaginaActual}
      />
    </div>
  );
}

export default Home;
