const movies = {
  state: {
    image: '',
  },
  mutations: {
    SET_IMAGE(state, payload) {
      console.log(this.SET_IMAGE({
          path: this.CURRENT_MOVIE.poster_path,
          baseURL: 'https://image.tmdb.org/t/p/original/',
          default: 'https://via.placeholder.com/300x450',
        }););
      this.CURRENT_MOVIE.poster_path
        ? 'https://image.tmdb.org/t/p/original/' + this.CURRENT_MOVIE.poster_path
        : 'https://via.placeholder.com/300x450';
      state.image = payload.path ? payload.baseURL + payload.path : payload.default;
    },
  },
  getters: {
    IMAGE(state) {
      return state.image;
    },
  },
};

export default movies;