const movies = {
  state: {
    image: '',
  },
  mutations: {
    SET_IMAGE(state, payload) {
        this.CURRENT_MOVIE.poster_path
      ? 'https://image.tmdb.org/t/p/original/' + this.CURRENT_MOVIE.poster_path
      : 'https://via.placeholder.com/300x450';
      state.image = payload.path ? payload.baseURL + payload.path;
    },
  },
  getters: {
    IMAGE(state) {
      return state.image;
    },
  },
};

export default movies;
