import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router';
import api from './server/api';
import Vuex from 'vuex';
import Carousel3d from 'vue-carousel-3d';

// tailwind
import '@/assets/css/styles.css';

Vue.prototype.$http = api;
Vue.config.productionTip = false;
Vue.use(Carousel3d);
Vue.use(VueRouter);
Vue.use(Vuex);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
