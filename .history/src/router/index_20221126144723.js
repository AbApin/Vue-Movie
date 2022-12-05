import VueRouter from 'vue-router';

const routes = [
  { path: '/', component: Foo },
  { path: '/bar', component: Bar },
];

const router = new VueRouter({
  routes, // сокращённая запись для `routes: routes`
});
