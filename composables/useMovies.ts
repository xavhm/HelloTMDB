export default function useMovies() {
  const apiBaseUrl = 'https://api.themoviedb.org/3';
  const apiKey = useRuntimeConfig().public.TMDB_KEY;

  function getUpcomingMovies(page: number = 1) {
    return `${apiBaseUrl}/movie/upcoming?page=${page}&api_key=${apiKey}`;
  }

  function getMovieDetail(id: number) {
    return `${apiBaseUrl}/movie/${id}?&api_key=${apiKey}`;
  }

  function getSearchedMovie(query: string, page: number = 1) {
    return `${apiBaseUrl}/search/movie?query=${query}&page=${page}&api_key=${apiKey}`;
  }

  return {
    getUpcomingMovies,
    getMovieDetail,
    getSearchedMovie,
  };
}