import Vue from 'vue'
import app from './App'
import VueRouter from 'vue-router'
import router from './router'
import  './assets/css/global.css'

//安装第三方模板 vue router
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el:"#app",
  router,
  render(h){
    return h(app)
  }
})

