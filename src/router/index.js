import { createRouter, createWebHashHistory } from 'vue-router'

import Error404 from '../views/Error404'
import Contact from '../views/Contact'
import Home from '../views/Home'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '*',
        name: 'Error404',
        component: Error404
    }
]

export default router = createRouter({
    // history: createWebHashHistory(process.env.BASE_URL),
    history: createWebHashHistory('/'),
    routes
})
