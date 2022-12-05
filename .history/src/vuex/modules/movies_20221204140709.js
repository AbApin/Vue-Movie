import $http from '@/server/api';

const movies = {
  state: {
    popularMovies: [],
    genres: [],
  },
  mutations: {
    SET_POPULAR_MOVIES(state, payload) {
      state.popularMovies = payload;
    },
    SET_GENRES(state, payload) {
      state.genres = payload;
    },
  },
  actions: {
    async FETCH_MOVIES({ commit }) {
      try {
        const response = await $http('/movie/popular');
        console.log(response);
        commit('GET_POPULAR_MOVIES', response.data.results);
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
  },
  getters: {
    POPULAR_MOVIES(state) {
      return state.popularMovies;
    },
    GENRES(state) {
      return state.genres;
    },
  },
};

export default movies;
