import VueRouter from 'vue-router'
import Vue from 'vue'
// 路由懒加载
const home =()=>import('../components/content/home.vue')
const cases=()=>import('../components/content/cases.vue') 
const news=()=>import('../components/content/news.vue')
const honour=()=>import('../components/content/honour.vue')
const show=()=>import('../components/content/show.vue')
const designPrize=()=>import('../components/content/designPrize.vue')
const personal=()=>import('../components/content/personal.vue')
// 1通过Vue.use安装插件
Vue.use(VueRouter)
// 2创建路有对象
const routes=[
	// 重定向
	{
		path:'',
		redirect:'/home'
	},
	// 配置映射关系
	{
	 path:'/home',
	 component:home,
	 meta:{
		 title:'首页'
	 }
	},
	{
	 path:'/cases',
	 component:cases,
	 meta:{
	 		 title:'案例'
	 }
	},
	{
	 path:'/honour',
	 component:honour,
	 meta:{
	 		title:'荣誉'
		}
	},
	{
	 path:'/news',
	 component:news,
	 meta:{
	 		 title:'新闻'
	 }
	},
	{
	 path:'/show',
	 component:show,
	 meta:{
	 		 title:'第一篇新闻'
	 }
	},
	{
	 path:'/designPrize',
	 component:show,
	 meta:{
	 		 title:'第二篇新闻'
	 }
	},
	{
	 path:'/personal',
	 component:personal,
	 meta:{
	 		 title:'个人中心',
			 requireAuth: true,
	 }
	},
]
const router=new VueRouter({
	// 配置路由和组件之间的应用关系
	routes,
	mode:'history'
})
router.beforeEach(function(to,from,next){
	document.title=to.meta.title
	next()
})
// 3将 router 对象传入到vue实例
export default router








