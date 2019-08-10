import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home'
import Films from '@/views/Films';

Vue.use(Router)

const router = new Router({
  route: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '',
      name: 'films',
      component: Films
    }
  ]
})

export default router;
