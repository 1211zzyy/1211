import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
// 引入购物车
// import components from '@/pages/cart/components'
import NavMenu from '@/components/NavMenu'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入包含所有接口请求函数模块的API对象
import * as API from '@/api'

// 挂载到Vue原型对象上，以便组件中直接可见
Vue.prototype.$API = API


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.component("NavMenu",NavMenu)
new Vue({
  render: h => h(App),
  router,
  store,
  // components
}).$mount('#app')
