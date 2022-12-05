import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router';
import api from './server/api';

import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faSquareFacebook } from '@fortawesome/free-solid-svg-icons';

// tailwind
import '@/assets/css/styles.css';

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.prototype.$http = api;
Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
