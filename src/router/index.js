import Vue from 'vue'
import Router from 'vue-router'
import App from '@/components/App'
import BootstrapVue from 'bootstrap-vue'
import VueCarousel from 'vue-carousel';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(VueCarousel);
Vue.use(BootstrapVue);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    }
  ]
})
