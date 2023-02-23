import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home'
import Login from '@/pages/login'
import Register from '@/pages/register'
import Search from '@/pages/search'
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Home
        }, {
            path: '/login',
            component: Login,
            meta: { isHide: true }
        }, {
            path: '/register',
            component: Register,
            meta: { isHide: true }
        }, {
            path: '/search',
            component: Search
        }
    ]
})