function fetchMovies() {
  const BASE_URL = 'https://api.themoviedb.org/3/movie/550?api';
  const KEY = '88cc215d69ec27c443b0ab6deb7f5acb';

  return fetch(`${BASE_URL}_key=${KEY}`).then(response => response.json());
}

const api = {
  fetchMovies,
};

export default api;
