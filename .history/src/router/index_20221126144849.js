import VueRouter from 'vue-router';

import Home from '../'

const routes = [
  { path: '/', component: Foo },
  { path: '/bar', component: Bar },
];

const router = new VueRouter({
  routes, // сокращённая запись для `routes: routes`
});
