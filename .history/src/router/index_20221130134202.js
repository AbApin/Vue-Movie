import VueRouter from 'vue-router';

import MyHome from '../components/pages/MyHome.vue';
import MyMovie from '../components/movies/MyMovie.vue';
import MyActors from '@/components/pages/MyActors.vue';
import ActorDeta

const routes = [
  { path: '/', name: 'home', component: MyHome },
  { path: '/movie/:id', name: 'movie', component: MyMovie, props: true },
  { path: '/actors', name: 'actors', component: MyActors },
  { path: '/actors/:id', name: 'actors', component: MyActors },
];

const router = new VueRouter({
  mode: 'history',
  routes, // сокращённая запись для `routes: routes`
});

export default router;
