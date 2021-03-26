import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home';
import Characters from '@/views/Characters';
import About from '@/views/About';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/characters',
    name: 'characters',
    component: Characters
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router
