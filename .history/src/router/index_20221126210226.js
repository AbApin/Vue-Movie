import VueRouter from 'vue-router';

import MyHome from '../components/MyHome.vue';
import MyMovie from '@/components/MyMovie.vue';

const routes = [
  { path: '/', name: 'home', component: MyHome },
  { path: '/', name: 'home', component: MyMovie },
];

const router = new VueRouter({
  mode: 'history',
  routes, // сокращённая запись для `routes: routes`
});

export default router;
