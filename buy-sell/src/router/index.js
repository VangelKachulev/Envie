import About from '../components/views/About/About.vue'
import Contacts from '../components/views/Contacts/Contacts.vue'
import Home from '../components/views/Home/Home.vue'
import Error from '../components/views/Error.vue'
import ProductsList from '../components/product/ProductsList.vue'
import SingleProduct from '../components/product/SingleProduct.vue'
import MyAds from '../components/profile/MyAds.vue'
import Login from '../components/actions/Login.vue'
import Register from '../components/actions/Register.vue'
import Upload from '../components/actions/Upload.vue'
import Edit from '../components/actions/Edit.vue'

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
        path: '/products/:id',
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

    {
        path: '/myads',
        name: 'Myads',
        component: MyAds
    }, 
    {
        path: '/products/edit/:id',
        name: 'Edit',
        component: Edit
    },
    {
        path: '/404',
        name: 'Error',
        component: Error
    },


]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;