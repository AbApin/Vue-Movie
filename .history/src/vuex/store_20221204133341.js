import Vuex from 'vuex';
import Vue from 'vue';
import actors from './modules/actors';
mov

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {

    actors,
  }
});

export default store;
