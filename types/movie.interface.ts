export interface Movie {
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: Date;
  genre_ids: number[];
  original_language: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface MovieResponse {
  dates: { minimum: Date; maximum: Date };
  page: number;
  results: Array<Movie>;
  total_pages: number;
  total_results: number;
}
