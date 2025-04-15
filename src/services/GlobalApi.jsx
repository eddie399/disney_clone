import axios from "axios";

const BASE_URL="https://api.themoviedb.org/3";
const API_KEY = "5fdc4ea2a1d91009a5ce2b62b2c207a2";

const MOVIE_GENRE_BASE_URL = "https://api.themoviedb.org/3/discover/movie?api_key=5fdc4ea2a1d91009a5ce2b62b2c207a2";

const getTrendingVideos=axios.get(`${BASE_URL}/trending/all/day`, {
    params: {
        api_key: API_KEY,
        language: "en-US",
    },

    
});

const getMovieByGenreId = (id) => axios.get(`${MOVIE_GENRE_BASE_URL}&with_genres=`+id, {
    params: {
        api_key: API_KEY,
        with_genres: id,
        language: "en-US"
    }
})

export default {
    getTrendingVideos,
    getMovieByGenreId
}

//https://api.themoviedb.org/3/trending/all/day?api_key=5fdc4ea2a1d91009a5ce2b62b2c207a2