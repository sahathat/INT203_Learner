import {createRouter, createWebHistory} from 'vue-router';
import Uncanny from '../view/Uncanny.vue'
import NotFound from '../view/NotFound.vue'
import Main from '../view/Main.vue'
import Caretaker from '../view/Caretaker.vue'
import Canny from '../view/Canny.vue'

// history
const history = createWebHistory()

// routes
const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/uncanny/:id',
        name: 'Uncanny',
        component: Uncanny,
    },
    {
        path: '/canny/:id',
        name: 'Canny',
        component: Canny,
    },
    {
        path: '/caretaker/:id',
        name: 'Caretaker',
        component: Caretaker,
    },
    {
        path: '/:catchNotMatchPath(.*)',
        name: 'NotFound',
        component: NotFound
    }
]

// router
const router = createRouter({history, routes})
// need export default router
export default router