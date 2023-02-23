import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TypeNav from './components/TypeNav'
import { reqCategoryList } from '@/api/index.js'
import store from '@/store'
reqCategoryList();
Vue.config.productionTip = false
Vue.component(TypeNav.name, TypeNav)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
