import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { MovieList } from './components/MovieList';
import { useMovies } from './hooks/useMovies';

function App() {
  const { movies, loading, error } = useMovies();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <MovieList movies={movies} />
    </div>
  );
}

export default App;