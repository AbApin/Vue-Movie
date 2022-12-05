import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router';
import api from './server/api';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';

// tailwind
import '@/assets/css/styles.css';
library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.prototype.$http = api;
Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
