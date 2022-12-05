import Vuex from 'vuex';
import Vue from 'vue';
import actors from './modules/actors';
actors
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    actor
  }
});

export default store;
