<template>
	<div id="category">
		<navbar class="categorynavbar">
			<div  slot='cent'>商品分类</div>
		</navbar>
		
		<div class="leftright">
		<categoryscroll class="catescroll cleft" ref="scroll">
		<leftcate :list="categoryleft" class="left" @click.native='tpcatgory'></leftcate>
		</categoryscroll>
		<div class="cright">
		<catgorysmall :title="['流行','新款','精选']" @switchcategory='switchcategory' class="myrool" ref="catgorysmall2" v-show="iscate"></catgorysmall>
		<categoryscroll class="catescroll " ref="scroll"  @bootheight='bootheight'>
		<rightcate class="right" :listright='categoryrigthtop'></rightcate>
		<catgorysmall :title="['流行','新款','精选']" @switchcategory='switchcategory' ref="catgorysmall" v-show="!iscate"></catgorysmall>
		<goodslist :goods='navgoods' ></goodslist>
		</categoryscroll>
		<tp @click.native='tptop' v-show="isscroll"></tp>
		</div>
		</div>
		</div>
		

</template>

<script>
	import navbar from 'components/common/tab/navbar.vue'//顶部导航栏组件
	import {categoryajx,categoryajxrigth,categoryajxrigthboottom} from 'network/categoryaxi.js'//网络请求
	import leftcate from './leftcate/leftcate.vue'//左侧导航栏
	import rightcate from './cateright/rightcate.vue'//右侧上方导航栏
	import categoryscroll from 'components/common/better-scroll/noloadscroll.vue' //移动端滚动插件
	import catgorysmall from 'components/contend/home/category-small.vue'//右侧三大类导航栏
	import goodslist from 'components/contend/home/home-/goods/goodslist.vue'//右侧下面的组件
	import {mixintp} from 'common/mixin.js'//混入返回顶部标签
	export default{
		components:{
			navbar,
			leftcate,
			rightcate,
			categoryscroll,
			catgorysmall,
			goodslist,
		
		},
		computed:{
			maikeychange(){
				return this.$store.state.maikey
			},
			miniWallkeychange(){
				return this.$store.state.miniWallkey
			}
		},
		watch:{
			maikeychange(){
				this.categoryrigthtopais()
			},
			miniWallkeychange(){
				this.categoryrigthboottomais()
			}
		},
		mixins:[mixintp],//混入返回顶部标签
		data(){
			return{
			categoryleft:null,//左侧导航栏的title数据以及右侧部数据，比如需要传的maitKey都在里面
			categoryrigthtop:null,//右侧上方的数据
			navgoods:null,//右侧下方的数据
			switchtype:'pop',//决定获取的是什么类型的右下商品
			isinterval:0,//防止定时器不断创建
			iscate:false,//决定吸顶效果的复制品是否显示
			catetop:0//吸顶效果的距离
			}
		},
		methods:{
			//左侧导航栏的网络请求赋值
			categoryleftajx(){
				categoryajx().then(res=>{
					this.categoryleft=res.data.category.list
					// console.log(res)
				})
			},
			//右侧上方的请求赋值
			categoryrigthtopais(){
				categoryajxrigth(this.$store.state.maikey).then(res=>{
					// console.log(res)
					this.categoryrigthtop=res.data.list
				})
			},
			//右侧下方的请求赋值
			categoryrigthboottomais(){
			categoryajxrigthboottom(this.$store.state.miniWallkey,this.switchtype).then(res=>{
				this.navgoods=res
			
			})
			},
			switchcategory(index){
				if (index == 0) {
					this.switchtype ='pop'
					this.categoryrigthboottomais()
					this.$refs.scroll.scrolltop(0,-this.catetop,300)//点击分类时候跳转到导航栏
				} else if (index == 1) {
					this.switchtype ='new'
					this.categoryrigthboottomais()
					this.$refs.scroll.scrolltop(0,-this.catetop,300)
				} else {
					this.switchtype ='sell'
					this.categoryrigthboottomais()
					this.$refs.scroll.scrolltop(0,-this.catetop,300)
				}
			},
			tpcatgory(){
				this.$refs.scroll.scrolltop(0,-20,300)
				//右侧导航栏上边的数据
				this.categoryrigthtopais()
				//右侧导航栏下边的数据
				this.categoryrigthboottomais()
			},
			bootheight(position){
				//判断回到顶部标签显示
				if(position.y<-1500){
					this.isscroll=true
				}
				else if(position.y>-1500){
					this.isscroll=false
				}
				//做一个带防抖的滚动的时候刷新
				if(this.isinterval==0)
				{
				const timeno=setTimeout(()=>{
					this.$refs.scroll.bscroll.refresh()
					this.isinterval=0
				},500)
				this.isinterval=1
				}
				//判断吸顶效果显示
			
				
				if (-(position.y+22)>= this.$refs.catgorysmall.$el.offsetTop && -(position.y)>=this.catetop) {
					this.iscate = true
				} else {
					this.catetop=this.$refs.catgorysmall.$el.offsetTop+22
					this.iscate = false
				}
			}
		},
		computed:{
			//获取吸顶效果的出现距离
			topcat() {
				return this.$refs.catgorysmall.$el.offsetTop
			}
		},
		created() {
			this.isinterval=0
			//左侧导航栏的title数据以及右侧部数据，比如需要传的maitKey都在里面
			this.categoryleftajx()
			//右侧导航栏上边的数据
			this.categoryrigthtopais()
			//右侧导航栏下边的数据
			this.categoryrigthboottomais()
			
		},
		activated() {
			this.$refs.scroll.bscroll.refresh() //刷新一次页面长度，防止下拉加载更多的时候回不到离开当前页面时候的滚动条y
			this.$refs.scroll.scrolltop(0, this.savey, 0) //回到离开当前页面时候的滚动条y
			// console.log(this.savey)
		},
		deactivated() {
			this.savey = this.$refs.scroll.bscroll.y //保存离开当前页面时候的滚动条y
		
		
		}
	}
</script>

<style scoped="scoped">
	*{
		padding: 0;
		margin: 0;
	}
	#category{
		height:100vh;
	}
	.catescroll{
		height: calc(100% - 52px);
		overflow: hidden;
	}
	.leftright{
		display: flex;
		justify-content: space-between;
	
		
		height:calc(100vh - 52px)
	}
	.categorynavbar{
		font-size: 20px;
		color: white;
		background-color: pink;
	}
	.cleft{
		width: 25%;
		overflow: hidden
	}
	.cright{
		width: 75%;
		/* height: calc(100% - 44px); */
		overflow: hidden
	}
	.myrool{
		position: relative;
		z-index: 9;
	}
</style>
