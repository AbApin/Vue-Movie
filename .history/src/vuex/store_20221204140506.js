import Vuex from 'vuex';
import Vue from 'vue';
import actors from './modules/actors';
import movies from './modules/movies';
import $http from '../server/api';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    movies,
    actors,
  },
});

export default store;
