const movies = {
  state: {
    image: '',
  },
  mutations: {
    SET_IMAGE(state, payload) {
      state.image = payload;
    },
  },
  getters: {
    IMAGE
  },
};

export default movies;
