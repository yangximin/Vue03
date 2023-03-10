import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TypeNav from './components/TypeNav'
import Carousel from './components/Carousel'
import store from '@/store'
import '@/mock/MockServe.js'
import "swiper/css/swiper.min.css";
Vue.config.productionTip = false
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
