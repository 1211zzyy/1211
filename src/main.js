import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import NavMenu from '@/components/NavMenu'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as API from './api'
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.component("NavMenu",NavMenu)

new Vue({
  beforeCreate() {
    Vue.prototype.$API = API,
    Vue.prototype.$bus = this
  },
  render: h => h(App),
  router,
  store
}).$mount('#app')
