import VueRouter from 'vue-router';

import MyHome from '../components/MyHome.vue';

const routes = [{ path: '/', name: 'home', component: MyHome }];

const router = new VueRouter({
  mode: 'history'
  routes, // сокращённая запись для `routes: routes`
});

export default router;
