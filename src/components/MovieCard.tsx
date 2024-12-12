import { Movie } from '../types/movie';

type MovieCardProps = Pick<Movie, 'title' | 'release_date' | 'opening_crawl'>;

export const MovieCard = ({ title, release_date, opening_crawl }: MovieCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6 hover:shadow-xl transition-shadow">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-600 mb-4">Release Date: {release_date}</p>
      <p className="text-gray-700 leading-relaxed">{opening_crawl}</p>
    </div>
  );
};