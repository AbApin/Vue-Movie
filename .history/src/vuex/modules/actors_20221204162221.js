const actors = {
  state: {
    actors: [],
  },
  mutations: {
    SET_ACTORS(state, payload) {
      state.actors = payload;
    },
  },
  actions: {
    async FETCH_ACTORS({ commit }, page) {
      try {
        const response = await this.$http.get(`/person/popular?page=${page}`);
        commit()
    } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {},
};

export default actors;
