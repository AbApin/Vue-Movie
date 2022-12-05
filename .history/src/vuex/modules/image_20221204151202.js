
const movies = {
  state: {
    
  },
  mutations: {
    
  },
  actions: {
    
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
