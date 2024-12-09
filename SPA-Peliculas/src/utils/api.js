// const API_KEY = '54111996c5b631d5307631b77bd61963';
// const BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function obtenerPeliculasPopulares(page = 1) {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES&page=${page}`);
  return response.json();
}

export async function buscarPeliculas(query, page = 1) {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=es-ES&query=${query}&page=${page}`);
  return response.json();
}

export async function obtenerDetallesPelicula(id) {
  const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=es-ES`);
  return response.json();
}

export async function obtenerTrailers(id) {
  const response = await fetch(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=es-ES`);
  return response.json();
}
