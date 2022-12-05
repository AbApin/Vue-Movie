const movies = {
  state: {
    image: '',
  },
  mutations: {
    SET_IMAGE(state, payload) {
      state.image = payload;
    },
  },
  actions: {
    GET_IMAGE
  },
  getters: {},
};

export default movies;
