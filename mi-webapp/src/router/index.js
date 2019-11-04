import Vue from "vue"
import VueRouter from 'vue-router'
import Login from '../components/Login'

Vue.use(VueRouter)

//通过VueRouter创建一个实例对象
let router = new VueRouter({
    //路由map集合 path : views component
    routes:[
        {path:'/login',component:Login}
       ]
})
export default router