import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router';
import api from './server/api';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';

// tailwind
import '@/assets/css/styles.css';

Vue.prototype.$http = api;
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.component('v-icon', Icon);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
