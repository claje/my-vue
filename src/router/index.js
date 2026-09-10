import { createRouter, createWebHistory } from 'vue-router'
import homepage from '@/views/homepage.vue'
import About from '@/views/About.vue'
import Projects from '@/views/Projects.vue'
import Services from '@/views/services.vue'
import Products from '@/views/Products.vue'
import FAQs from '@/views/FAQs.vue'
import Contact from '@/views/contact.vue'


const routes = [
    {
        path: '/',
        name: 'homepage',
        component: homepage
    },
    {
        path: '/About_us',
        name: 'About_us',
        component: About
    },
    {
        path: '/Projects',
        name: 'Projects',
        component: Projects
    },
    {
    path: '/services',
        name: 'services',
        component: Services
    },
    {
        path: '/Products',
        name: 'Products',
        component: Products
    },
    {
    path: '/FAQs',
        name: 'FAQs',
        component: FAQs
    },
    {
        path: '/Contact',
        name: 'Contact',
        component: Contact
    }

]

const router =createRouter({
    history: createWebHistory(),
    routes
})
export default router