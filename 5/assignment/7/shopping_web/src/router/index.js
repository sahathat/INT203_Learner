import {createRouter, createWebHistory} from 'vue-router'

import Home from '../view/Home.vue'
import ViewCart from '../view/ViewCart.vue'
import ProductDetail from '../view/ProductDetail.vue'
import NotFound from '../view/NotFound.vue'
import Credit from '../view/Credit.vue'
const history = createWebHistory()
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/mycart',
        name: 'ViewCart',
        component: ViewCart
    },
    {
        path: '/credit',
        name: 'Credit',
        component: Credit
    },
    {
        path: '/detail/:id/:name/:price',
        name: 'ProductDetail',
        component: ProductDetail
    },
    {
        path: '/:catchNotMatchPath(.*)',
        name: 'NotFound',
        component: NotFound
    }
]

const router = createRouter({ history, routes })
export default router