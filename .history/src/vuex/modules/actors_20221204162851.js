import $http from '@/server/api';

const actors = {
  state: {
    actors: [],
    currentPage: 1,
  },
  mutations: {
    SET_ACTORS(state, payload) {
      state.actors = payload;
    },
    PLUS_PAGE(state) {
      state.currentPage += 1;
    },
    MINUS_PAGE(state) {
      state.currentPage -= 1;
    },
  },
  actions: {
    async FETCH_ACTORS({ commit, state }) {
      try {
        const response = await $http.get(`/person/popular?page=${state.currentPage}`);
        commit('SET_ACTORS', response.data.results);
      } catch (error) {
        console.log(error);
      }
    },
    NEXT({commit}) {
      this.fetchActors(++currentPage);
    },
    PREVIOUS() {
      this.fetchActors(--currentPage);
    },
  },
  getters: {
    ACTORS(state) {
      return state.actors;
    },
  },
};

export default actors;
