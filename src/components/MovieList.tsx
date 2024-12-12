import { Movie } from '../types/movie';
import { MovieCard } from './MovieCard';

interface MovieListProps {
  movies: Movie[];
}

export const MovieList = ({ movies }: MovieListProps) => {
  return (
    <div className="max-w-2xl mx-auto px-4">
      {movies.map((movie) => (
        <MovieCard
          key={movie.title}
          title={movie.title}
          release_date={movie.release_date}
          opening_crawl={movie.opening_crawl}
        />
      ))}
    </div>
  );
};