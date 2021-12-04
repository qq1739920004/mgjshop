import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast/toast.js'//自己简单手写封装的一个toast
import FastClick from 'fastclick'//移动端点击延迟300ms解决方案，安装这个插件
import VueLazyload from 'vue-lazyload'//图片懒加载插件

Vue.config.productionTip = false
Vue.use(toast)
Vue.use(VueLazyload)
Vue.prototype.$bus=new Vue()
FastClick.attach(document.body)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

