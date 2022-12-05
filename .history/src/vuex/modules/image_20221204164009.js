const movies = {
  state: {
    image: '',
  },
  mutations: {
    SET_IMAGE(state, payload) {
      console.log(payload);
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
