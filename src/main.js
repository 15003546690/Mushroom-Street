import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
//import { swiper, swiperSlide, swiperPlugins } from 'vue-awesome-swiper'
import App from './App.vue'
import RouterConfig from './router.config.js'
import VIscroll from 'viscroll';
//使用VIscroll
Vue.use(VIscroll, {
    mouseWheel: true,
    click: false,
    preventDefault: true,
    tap: false,
    bounce: false,
    disableTouch: true
});
Vue.use(VueRouter);
Vue.use(VueResource);
const router=new VueRouter(RouterConfig)
new Vue({
  router,	
  el: '#app',
  render: h => h(App)
})
