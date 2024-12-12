export interface Movie {
  title: string;
  release_date: string;
  opening_crawl: string;
}

export interface MovieResponse {
  results: Movie[];
}