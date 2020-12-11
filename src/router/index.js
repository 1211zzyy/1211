import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)
const originPush = VueRouter.prototype.push
// 重写这个方法,无非就是给个默认的成功的空回调
VueRouter.prototype.push = function (location, onComplete = () => { }, onAbort) {
  return originPush.call(this, location, onComplete, onAbort)
}
const originReplace = VueRouter.prototype.replace
// 重写这个方法,无非就是给个默认的成功的空回调
VueRouter.prototype.replace = function (location, onComplete, onAbort = () => { }) {
  return originReplace.call(this, location, onComplete, onAbort)
}

const router = new VueRouter({
  // linkActiveClass:'active',
  mode:'history',
  routes
})
router.beforeEach((to,from,next)=>{
  //全局路由前置守卫,如果进入的路径不是login,且没有登陆,就跳转到登陆页
  if(to.path !== '/login' && !localStorage.getItem('USERTOKEN')) next({path:"/login"})
  // if(localStorage.getItem('USERTOKEN')!=='admin'&& to.path === '/shop') next({path:"/food"})
  else next()
})
export default router