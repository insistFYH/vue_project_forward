import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import TypeNav from './components/TypeNav'
import Carousel from './components/Carousel'
import Pagination from './components/Pagination'
import store from './store'
import '@/mock/mockServer.js'
import 'swiper/css/swiper.css'
import * as API from '@/api'
import { MessageBox } from 'element-ui'
import VueLazyload from 'vue-lazyload'
import mr from '@/assets/images/mr.gif'
import '@/plugins/validate'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueLazyload, {
    loading: mr,
})
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)
new Vue({
    render: h => h(App),
    router: router,
    store,
    beforeCreate() {
        Vue.prototype.$bus = this
        Vue.prototype.$API = API
        Vue.prototype.$msgbox = MessageBox;
        Vue.prototype.$alert = MessageBox.alert;
    },
}).$mount('#app')