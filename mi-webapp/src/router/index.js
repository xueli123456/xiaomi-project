import Vue from "vue"
import VueRouter from 'vue-router'
import Login from '../views/Login'
import main from '../views/main'
import home from '../views/home'
import cart from '../views/cart'
import user from '../views/user'
import category from '../views/category'

Vue.use(VueRouter)

//通过VueRouter创建一个实例对象
let router = new VueRouter({

    //路由map集合 path : views component
    routes:[
        {
            path:'/user',
            component:Login,
        },
        {
            path: '/',
            redirect: '/main/home'
        },
          {
            path: '/main',
            component: main,
            children: [
                {
                    path: 'home',
                    component: home
                },
                {
                    path: 'category',
                    component: category
                },
                {
                    path: 'cart',
                    component: cart
                },
                {
                    path: 'user',
                    component: user
                }
            ]
        }

       ]
})
export default router