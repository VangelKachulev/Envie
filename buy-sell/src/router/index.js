import About from '../components/views/About.vue'
import Contacts from '../components/views/Contacts.vue'
import Home from '../components/views/Home.vue'
import ProductsList from '../components/ProductsList.vue'
import SingleProduct from '../components/SingleProduct.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Upload from '../components/Upload.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
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
    {
        path: '/product1',
        name: 'SingleProduct',
        component: SingleProduct
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/upload',
        name: 'Upload',
        component: Upload
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;