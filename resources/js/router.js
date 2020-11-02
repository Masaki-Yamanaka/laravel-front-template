import Vue from 'vue';
import Router from 'vue-router';
import authRoutes from './routers/auth';

Vue.use(Router);

const routes = [...authRoutes];

export default new Router({
  mode: 'history',
  routes,
});
