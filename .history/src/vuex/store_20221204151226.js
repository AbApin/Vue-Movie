import Vuex from 'vuex';
import Vue from 'vue';
import actors from './modules/actors';
import movies from './modules/movies';
import image from './modules/'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    movies,
    actors,
    image
  },
});

export default store;
