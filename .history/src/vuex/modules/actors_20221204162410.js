import $http from '@/server/api';

const actors = {
  state: {
    actors: [],
    currentPage = 1;
  },
  mutations: {
    SET_ACTORS(state, payload) {
      state.actors = payload;
    },
  },
  actions: {
    async FETCH_ACTORS({ commit }, page) {
      try {
        const response = await $http.get(`/person/popular?page=${page}`);
        commit('SET_ACTORS', response.data.results);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    ACTORS(state) {
      return state.actors;
    },
  },
};

export default actors;
