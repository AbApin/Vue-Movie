import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router';
import Carousel3d from 'vue-carousel-3d';
import store from './vuex/store';
$h
// tailwind
import '@/assets/css/styles.css';

Vue.config.productionTip = false;
Vue.use(Carousel3d);
Vue.use(VueRouter);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
