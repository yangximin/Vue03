import Vue from 'vue';
import Vuex from 'vuex'
import home from './home'
import search from './search'
Vue.use(Vuex)
Vue.config.devtools = true
export default new Vuex.Store({
    modules: [
        home,
        search
    ]
})