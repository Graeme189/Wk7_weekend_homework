import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Films from '@/views/Films';

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/films',
      name: 'films',
      component: Films
    }
  ]
})

export default router;
