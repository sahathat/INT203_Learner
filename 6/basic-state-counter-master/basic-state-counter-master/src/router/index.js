import { createRouter, createWebHistory } from 'vue-router'
import ShowCounter from '../views/ShowCounter.vue'
import Home from '../views/Home.vue'
const history = createWebHistory()
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/showcounter',
    name: 'ShowCounter',
    component: ShowCounter
  }
]
const router = createRouter({ routes, history })
export default router
