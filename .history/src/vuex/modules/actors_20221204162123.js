const actors = {
  state: {
    actors: [],
  },
  mutations: {
    SET_ACTORS(state,payload){

    }
  },
  actions: {
    async FETCH_ACTORS(page) {
      try {
        const response = await this.$http.get(`/person/popular?page=${page}`);
        this.actors = response.data.results;
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {},
};

export default actors;
