import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'swiper/swiper-bundle.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.config.productionTip = false
Vue.use(Vant);
Vue.use(VueAwesomeSwiper)
new Vue({
  el:'#app',
  router,
  render: h => h(App),
}).$mount('#app')
