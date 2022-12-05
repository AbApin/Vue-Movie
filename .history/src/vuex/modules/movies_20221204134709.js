const movies = {
  state: {
    popularMovies: [],
    genres: [],
  },
  mutations: {
    GET_POPULAR_MOVIES(state, payload) {
      state.popularMovies = payload;
    },
  },
  actions: {
    async SET_POPULAR_MOVIES({ commit }) {
      try {
        const response = await this.$http.get('/movie/popular');
        commit('GET_POPULAR_MOVIES', response.data.results);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchGenres() {
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
