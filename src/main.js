// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入element--s1
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//e1
Vue.config.productionTip = false

//引入element--s2
Vue.use(ElementUI)//e2

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
