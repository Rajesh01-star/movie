import { MovieResponse } from '../types/movie';

export const fetchMovies = async () => {
  try {
    const response = await fetch('https://swapi.dev/api/films');
    if (!response.ok) {
      throw new Error('Failed to fetch movie data');
    }
    const data: MovieResponse = await response.json();
    return data.results;
  } catch (error) {
    throw new Error('Error fetching movie data');
  }
};