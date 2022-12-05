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
        const response = await this.$http.get('/movie/popular');
        commit('GET_POPULAR_MOVIES', response.data.results);
      } catch (error) {
        console.log(error);
      }
    },
    async FETCH_GENRES({ commit }) {
      try {
        const response = await this.$http.get('/genre/movie/list');
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
  },
};

export default movies;
