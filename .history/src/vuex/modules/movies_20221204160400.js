import $http from '@/server/api';

const movies = {
  state: {
    popularMovies: [],
    genres: [],
    currentMovie: {},
    currentMovieGenres: [],
  },
  mutations: {
    SET_POPULAR_MOVIES(state, payload) {
      state.popularMovies = payload;
    },
    SET_GENRES(state, payload) {
      state.genres = payload;
    },
    SET_CURRENT_MOVIE(state, payload) {
      state.currentMovie = payload;
    },
    SET_CURRENT_MOVIE_GENRES(state, payload) {
      state.currentMovieGenres = payload;
    },
  },
  actions: {
    async FETCH_MOVIES({ commit }) {
      try {
        const response = await $http('/movie/popular');
        commit('SET_POPULAR_MOVIES', response.data.results);
      } catch (error) {
        console.log(error);
      }
    },
    async FETCH_GENRES({ commit }) {
      try {
        const response = await $http('/genre/movie/list');
        commit('SET_GENRES', response.data.genres);
      } catch (error) {
        console.log(error);
      }
    },
    async FETCH_CURRENT_MOVIE({ commit, state }, id, imagePaths) {
      try {
        const response = await $http.get(`/movie/${id}?append_to_response=credits,videos,images`);
        commit('SET_CURRENT_MOVIE', response.data);
        commit('/SET_IMAGE', { imagePaths }, { root: true });
        const namesArray = [];
        state.currentMovie.genres.map((genre) => {
          namesArray.push(genre.name);
        });
        commit('SET_CURRENT_MOVIE_GENRES', namesArray);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    POPULAR_MOVIES(state) {
      return state.popularMovies;
    },
    GENRES(state) {
      return state.genres;
    },
    CURRENT_MOVIE(state) {
      return state.currentMovie;
    },
    CURRENT_MOVIE_GENRES(state) {
      return state.currentMovieGenres;
    },
  },
};

export default movies;
