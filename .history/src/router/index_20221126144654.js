import VueRouter from 'vue-router';

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
];

const router = new VueRouter({
  routes, // сокращённая запись для `routes: routes`
});
