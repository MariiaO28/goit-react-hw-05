import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjM4NzQzNDdlYTNlYjY3YzgwZTFjOWE5YjMwZDQ1NyIsInN1YiI6IjY2MzhmZWFmMzU4ZGE3MDEyYTU3MTFmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uhO-weW6T01PH_L406FkH_RoH47lKfh525eb9Xd5nVs'
  }
};

export async function fetchTrendMovies() {
  const response = await axios.get('/trending/movie/day', options)
  return response.data;
}

export async function fetchMovieDetails(movieId) {
    const response = await axios.get(`/movie/${movieId}`, options)
    return response.data;
}

export async function fetchMovieCast(movieId) {
  const response = await axios.get(`movie/${movieId}/credits`, options)
  return response.data;
}

export async function fetchMoviesReviews(movieId) {
  const response = await axios.get(`movie/${movieId}/reviews`, options)
  return response.data;
}

export async function fetchMovieBySearch(query) {
  const response = await axios.get(`/search/movie?query=${query}`, options)
  return response.data;
 }