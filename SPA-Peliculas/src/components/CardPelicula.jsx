import React from 'react';
import { Link } from 'react-router-dom';

function CardPelicula({ pelicula }) {
  return (
    <div className="card">
      <Link to={`/pelicula/${pelicula.id}`}>
        <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title} />
        <h3>{pelicula.title}</h3>
      </Link>
    </div>
  );
}

export default CardPelicula;
