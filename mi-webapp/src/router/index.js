import Vue from "vue"
import home from '../views/tabs/home'
import search from '../views/tabs/search'
import user from '../views/tabs/user'
import main from '../views/main'
import VueRouter from "vue-router"
import News from "../views/News"
import Detail from "../views/Detail"

Vue.use(VueRouter)

//通过VueRouter创建一个实例对象
let router = new VueRouter({
    //路由map集合 path : views component
    routes:[
        // {path:"/",redirect:"/list"}, //设置首页
        {path:"/list",component:News},
        {path:"/detail",component:Detail} ,//?id=1&name=2
        // eslint-disable-next-line no-undef
        {name:"d",path:"/detail/:id",component:Detail}, //?id= -/:id 参数占位
        // {
        //     path: '/',
        //     redirect: '/main'
        // },
        {
            path: '/main',
            component: main,
            children: [
                {
                    path: '',
                    component: home
                },
                {
                    path: 'search',
                    component: search
                },
                {
                    path: 'user',
                    component: user
                }
            ]
        }
    ]
})

// 全局路由guard 前置guard user ->main -> login
router.beforeEach((to, from, next) => {
    console.log(to.path) // to from $route
    console.log(from.path)
    // let token = localStorage.getItem('token')
    next()
    // if (token) {
    //   next('/main')
    // } else {
    //   next('/login')
    // }
})

router.afterEach((to, from) => {
    // window.confirm('您真的需要退出吗!')
    console.log('afterEach')
})
export default router