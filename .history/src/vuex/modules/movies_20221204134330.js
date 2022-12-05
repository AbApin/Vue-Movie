const movies = {
  state: {
    popularMovies: [],
    genres: [],
  },
  mutations: {
    GET_POPULAR_MOVIES(state,payload){
        state.p
    }
  },
  actions: {
    try {
        const response = await this.$http.get('/movie/popular');
        this.popularMovies = response.data.results;
      } catch (error) {
        console.log(error);
      }
  },
  getters: {},
};

export default movies;
