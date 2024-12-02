import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { obtenerTrailers } from '../utils/api';

function Trailers() {
  const { id } = useParams();
  const [trailers, setTrailers] = useState([]);

  useEffect(() => {
    obtenerTrailers(id).then((data) => {
      setTrailers(data.results);
    });
  }, [id]);

  if (trailers.length === 0) return <div>No hay trailers disponibles.</div>;

  return (
    <div>
      {trailers.map((trailer) => (
        <iframe
          key={trailer.id}
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${trailer.key}`}
          title={trailer.name}
          allowFullScreen
        ></iframe>
      ))}
    </div>
  );
}

export default Trailers;
