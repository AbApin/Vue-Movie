import VueRouter from 'vue-router';

import MyHome from '../components/pages';
import MyMovie from '../components/movies/MyMovie.vue';

const routes = [
  { path: '/', name: 'home', component: MyHome },
  { path: '/movie/:id', name: 'movie', component: MyMovie, props: true },
];

const router = new VueRouter({
  mode: 'history',
  routes, // сокращённая запись для `routes: routes`
});

export default router;
