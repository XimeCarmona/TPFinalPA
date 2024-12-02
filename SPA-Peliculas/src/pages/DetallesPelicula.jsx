import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { obtenerDetallesPelicula } from '../utils/api';
import '../App.css';

function DetallesPelicula() {
  const { id } = useParams();
  const [detalles, setDetalles] = useState(null);

  useEffect(() => {
    obtenerDetallesPelicula(id).then(setDetalles);
  }, [id]);

  if (!detalles) return <div>Cargando...</div>;

  return (
    <div className="detalle-container">
      <h1 className="detalle-title">{detalles.title}</h1>
      <img
        className="detalle-img"
        src={`https://image.tmdb.org/t/p/w500${detalles.poster_path}`}
        alt={detalles.title}
      />
      <p className="detalle-description">{detalles.overview}</p>
      <p className="detalle-release">Fecha de lanzamiento: {detalles.release_date}</p>
      <p className="detalle-rating">Calificación: {detalles.vote_average}</p>
      <Link className="detalle-trailer-link" to={`/pelicula/${id}/trailers`}>Ver Trailers</Link>
    </div>
  );
}

export default DetallesPelicula;
