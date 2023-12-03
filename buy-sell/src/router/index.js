import About from '../components/views/About.vue'
import Contacts from '../components/views/Contacts.vue'
import Home from '../components/views/Home.vue'
import ProductsList from '../components/ProductsList.vue'

import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/contact',
        name: 'Contacts',
        component: Contacts
    },
    {
        path: '/products',
        name: 'Products',
        component: ProductsList
    },

]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;