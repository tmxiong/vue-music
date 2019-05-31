// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import Axios from 'axios';
import './common/stylus/reset.styl'
import './common/stylus/icon.styl'
fastclick.attach(document.body)
Vue.config.productionTip = false


// 使用axios 解决跨域问题 https://blog.csdn.net/yuanlaijike/article/details/80522621
Vue.prototype.$axios = Axios;
Axios.defaults.baseURL = '/api';
Axios.defaults.headers.post['Content-Type'] = 'application/json';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
