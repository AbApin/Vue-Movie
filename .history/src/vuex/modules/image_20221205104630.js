const image = {
  state: {
    image: '',
  },
  mutations: {
    SET_IMAGE(state, payload) {
      state.image = payload.path ? payload.baseURL + payload.path : payload.default;
      console.log(state.image);
    },
  },
  actions: {
    FETCH_IMAGE({commit},){

    }
  }
  getters: {
    IMAGE(state) {
      return state.image;
    },
  },
};

export default movies;
