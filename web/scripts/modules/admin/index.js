import Vue from 'vue'
import iView from 'iview'
import VueRouter from 'vue-router'
import Routers from '../../route/admin'
import App from './app.vue'
import store from '../../vuex'
import 'iview/dist/styles/iview.css'
import '../../../styles/admin.less'
import axios from 'axios'
import lockr from 'lockr'
import cookie from 'js-cookie'

Vue.use(VueRouter)
Vue.use(iView)

axios.defaults.baseURL = process.env.API_BASE
axios.defaults.timeout = 1000 * 15

// 路由配置
const router = new VueRouter({
  mode: 'history',
  base: process.env.PUBLIC_PATH ,
  routes: Routers
})

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  let uid = lockr.get('uid');
  if (!uid) {
    uid = cookie.get('uid');
    lockr.set('uid', uid);
  }
  //设置title
  window.document.title = to.meta.title || '';
  if (!to.meta.identity) {
    next()
  } else if (uid) {
    next()
  } else {
    next(false);
    location.href = '/login/index';
  }
})

router.afterEach((to, from, next) => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

window.bus = new Vue()
window.store = store

window.bus.$Message.config({
  top: 60,
  duration: 3
})

new Vue({
  el: '#admin',
  router: router,
  store,
  render: h => h(App)
})


