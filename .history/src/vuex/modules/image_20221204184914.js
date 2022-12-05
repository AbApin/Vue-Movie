const movies = {
  state: {
    image: '',
  },
  mutations: {
    SET_IMAGE(state, payload) {
      state.image = payload.path ? payload.baseURL + payload.path : payload.default;
      console.log
    },
  },
  getters: {
    IMAGE(state) {
      return state.image;
    },
  },
};

export default movies;
