import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)
import HomePage from "@/views/HomePage";
import DownloadPage from "@/views/DownloadPage";
import ContactUs from "@/views/ContactUs";
import NewsPage from "@/views/NewsPage";
const router = new VueRouter({
    routes:[
        {path:"/" ,redirect:"/homePage"},
        {path:"/homePage",component:HomePage},
        {path:"/downloadPage",component:DownloadPage},
        {path:"/contactUs",component:ContactUs},
        {path:"/newsPage",component:NewsPage},
    ]
})

export default router
