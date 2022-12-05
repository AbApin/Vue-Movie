import VueRouter from 'vue-router';

import MyHome from '../components/MyHome.vue';
import MyMovie from '../components/movies/';

const routes = [
  { path: '/', name: 'home', component: MyHome },
  { path: '/movie/:id', name: 'movie', component: MyMovie },
];

const router = new VueRouter({
  mode: 'history',
  routes, // сокращённая запись для `routes: routes`
});

export default router;
