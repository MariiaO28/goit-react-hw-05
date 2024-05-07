import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjM4NzQzNDdlYTNlYjY3YzgwZTFjOWE5YjMwZDQ1NyIsInN1YiI6IjY2MzhmZWFmMzU4ZGE3MDEyYTU3MTFmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uhO-weW6T01PH_L406FkH_RoH47lKfh525eb9Xd5nVs'
  }
};

export async function fetchTrendMovies() {
    const response = await axios.get('/trending/movie/day?language=en-US', options)
    return response.data;
}

export async function fetchFilterMovies() {
    const response = await axios.get('/search/movie?query=1&include_adult=false&language=en-US&page=1', options); 
    return response.data;
}

export async function fetchMovieDetails() {
    const response = await axios.get('/trending/movie/day?language=en-US', options)
    return response.data;
}



 