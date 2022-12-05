import VueRouter from 'vue-router';

import MyHome from '../components/MyHome.vue'

const routes = [
  { path: '/',name: 'home', component: MyHome },
  { path: '/bar', component: Bar },
];

const router = new VueRouter({
  routes, // сокращённая запись для `routes: routes`
});
