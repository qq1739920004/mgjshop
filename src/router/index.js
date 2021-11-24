import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
const home=()=>import('views/home/home.vue')//首页
const category=()=>import('views/category/category.vue')//分类
const profile=()=>import('views/profile/profile.vue')//购物车
const shopcart=()=>import('views/shopcart/shopcart.vue')//我的
const detail=()=>import('views/details/detail')//详情页
const detailnull=()=>import('views/null/null.vue')//无商品页面
const routes = [
	//meta的作用判断是不是进入商品详情页要隐藏底部的导航栏
  {
  		path:'',
  		redirect:'/home',
		meta:{
				  isboottab:true
		}
  	},
  {
  	  path:'/home',
  	  component:home,
	  meta:{
	  		  isboottab:true
	  }
  },
  {
  	  path:'/category',
  	  component:category,
	  meta:{
	  		  isboottab:true
	  }
  },
  {
  	  path:'/shopcart',
  	  component:shopcart,
	  meta:{
	  		  isboottab:true
	  }
  },
  {
  	  path:'/profile',
  	  component:profile,
	  meta:{
	  		  isboottab:true
	  }
  },
  {
	  path:'/details/:iid',
	  component:detail,
	  meta:{
		  isboottab:false
	  }
  },
  {
  	  path:'/null',
  	  component:detailnull,
  	  meta:{
  		  isboottab:false
  	  }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
