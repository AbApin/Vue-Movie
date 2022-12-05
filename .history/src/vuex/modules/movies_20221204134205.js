const movies = {
  state: {
    popularMovies: [],
    genres: [],
  },
  mutations: {
    
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
