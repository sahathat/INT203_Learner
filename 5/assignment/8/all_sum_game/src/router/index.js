import { createRouter, createWebHistory } from 'vue-router';
import Main from '../view/Main.vue'
import Play from '../view/Play.vue'
import NotFound from '../view/NotFound.vue'
import Result from '../view/Result.vue'
const history = createWebHistory()
const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/play',
        name: 'Play',
        component: Play
    },
    {
        path: '/result/:message',
        name: 'Result',
        component: Result
    },
    {
        path: '/:catchNotMatchPath(.*)',
        name: 'NotFound',
        component: NotFound
    }
]

const router = createRouter({ history, routes })
export default router