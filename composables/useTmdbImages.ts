export default function useTmdbImages() {
  function getImageWithSize(size: Size, path: string) {
    return `https://image.tmdb.org/t/p/${size}${path}`;
  }

  return {
    getImageWithSize,
  };
}
