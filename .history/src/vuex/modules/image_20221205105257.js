const image = {
  state: {
    image: '',
  },
  mutations: {
    SET_IMAGE(state, payload) {
      state.image = payload.path ? payload.baseURL + payload.path : payload.default;
    },
  },
  mutations: {
    SET_IMAGE(state, payload) {
      state.image = payload.path ? payload.baseURL + payload.path : payload.default;
    },
  },
  getters: {
    IMAGE(state) {
      return state.image;
    },
  },
};

export default image;
