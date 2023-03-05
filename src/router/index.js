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
            name:'home',
            component: Home
        }, {
            name: 'login',
            path: '/login',
            component: Login,
            meta: { isHide: true }
        }, {
            name: 'register',
            path: '/register',
            component: Register,
            meta: { isHide: true }
        }, {
            name: 'search',
            path: '/search/:keyword?',
            component: Search
        }
    ]
})