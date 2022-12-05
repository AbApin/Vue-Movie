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
    async FETCH_IMAGE({ commit }, path) {
      await commit('SET_IMAGE', path);
    },
  },
  getters: {
    IMAGE(state) {
      return state.image;
    },
  },
};

export default image;
