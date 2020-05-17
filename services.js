import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "2fed02e2a1ee478ce68a29873e724b99";

class api {
  /*Movies */

  retrieveAllMovies(page) {
    return axios.get(
      `${API_URL}/movie/top_rated/?api_key=${API_KEY}&page=${page}`
    );
  }

  filterMovies(filter) {
    return axios.get(`${API_URL}/movie/${filter}/?api_key=${API_KEY}`);
  }

  searchAllMovies(searchTerm) {
    return axios.get(
      `${API_URL}/search/movie/?api_key=${API_KEY}&query=${searchTerm}`
    );
  }

  retrieveMovieByID(movie_id) {
    return axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
    );
  }

  retrieveAllMoviesGenres() {
    return axios.get(`${API_URL}/genre/movie/list?api_key=${API_KEY}`);
  }

  retrievMoviesBycategories(genre) {
    return axios.get(
      `${API_URL}/discover/movie/?api_key=${API_KEY}&with_genres=${genre}`
    );
  }

  /*Tv Shows  */

  retrieveAllTvShow(page) {
    return axios.get(`${API_URL}/tv/popular?api_key=${API_KEY}&page=${page}`);
  }

  searchAllShows(searchTerm) {
    return axios.get(
      `${API_URL}/search/tv/?api_key=${API_KEY}&query=${searchTerm}`
    );
  }
  //GetTvById
  retrieveTvByID(tv_id) {
    return axios.get(
      `${API_URL}/tv/${tv_id}?api_key=${API_KEY}&language=en-US`
    );
  }
  retrievShowsBycategories(genre) {
    return axios.get(
      `${API_URL}/discover/tv/?api_key=${API_KEY}&with_genres=${genre}`
    );
  }
}
export default new api();
