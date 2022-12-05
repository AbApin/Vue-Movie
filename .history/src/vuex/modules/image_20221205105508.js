const image = {
  state: {
    image: '',
  },
  mutations: {
    SET_IMAGE(state, payload) {
      state.image = payload.path ? payload.baseURL + payload.path : payload.default;
    },
  },
  actions: {
    AFETCH_IMAGE({ commit }, path) {
      commit('SET_IMAGE', path);
    },
  },
  getters: {
    IMAGE(state) {
      return state.image;
    },
  },
};

export default image;
