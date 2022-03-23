import {createRouter, createWebHistory} from 'vue-router';
import Profile from '../views/Profile.vue'
import NotFound from '../views/NotFound.vue'
import Home from '../views/Home.vue'
import Item from '../views/Item.vue'

// history
const history = createWebHistory()

// routes
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
    },
    {
        path: '/product-item/:id',
        name: 'ProductItem',
        component: Item
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