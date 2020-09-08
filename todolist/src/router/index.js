import Vue from 'vue'
import  VueRouter from 'vue-router'
const Home=()=>import('../views/home/Home')
const Person=()=>import('../views/person/Person')
Vue.use(VueRouter)
//创建路由对象
const routes=[
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/person',
        component:Person
    }
]
const  router =new VueRouter({
    routes,
    mode:'history'
})
//导出router
export default router