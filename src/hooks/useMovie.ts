import { useState, useEffect } from 'react';
import { fetchMovie } from '../api/movieApi';

export const useMovie = () => {
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const data = await fetchMovie();
        setMovie(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    getMovie();
  }, []);

  return { movie, loading, error };
};