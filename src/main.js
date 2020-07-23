import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../node_modules/swiper/css/swiper.css'
import $ from 'jquery'
import axios from 'axios'
import VueLazyLoad from 'vue-lazyload'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.prototype.$axios = axios
axios.defaults.baseURL = ''
axios.defaults.withCredentials = true
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.use(VueLazyLoad, {
	loading: require('assets/img/cases_img/loading.jpg')
})
Vue.use(ElementUI, {
	size: 'small',
	zIndex: 3000
});

new Vue({
	el: '#app',
	router,
	render: h => h(App)
}).$mount('#app')
