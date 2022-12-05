import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer ${process.env.VUE_APP_TMDB_TOKEN}`,
  },
});
