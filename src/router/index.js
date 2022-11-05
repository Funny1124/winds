import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)
const routes = [
    {path: "/", redirect: "/home"},
    {
        path: "/home",
        name: "home",
        component: () => import('../views/HomeView')
    },
    {
        path: "/download",
        name: "download",
        component: () => import('../views/DownloadView')
    },
    {
        path: "/contact",
        name: "contact",
        component: () => import('../views/ContactView')
    },
    {
        path: "/news",
        name: "news",
        component: () => import('../views/NewsView')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
