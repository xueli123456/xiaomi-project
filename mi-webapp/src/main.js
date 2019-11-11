import Vue from 'vue'
import app from './App'
import VueRouter from 'vue-router'
import router from './router'
import Vuex from 'vuex'
import store from './store'

//安装第三方模板 vue router
Vue.use(VueRouter)
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el:"#app",
  router,
  store,
  render(h){
    return h(app)
  }
})

