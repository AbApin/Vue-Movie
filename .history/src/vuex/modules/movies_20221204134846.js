const movies = {
  state: {
    popularMovies: [],
    genres: [],
  },
  mutations: {
    SET_POPULAR_MOVIES(state, payload) {
      state.popularMovies = payload;
    },
    SET_POPULAR_MOVIES(state, payload) {
      state.popularMovies = payload;
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
    async FETCH() {
      try {
        const response = await this.$http.get('/genre/movie/list');
        this.genres = response.data.genres;
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {},
};

export default movies;
