<template>
	<div id="home">

		<navbar class="home-navbar">
			<!-- 首页顶部 -->
			<div slot='cent'>购物街</div>
		</navbar>
		<catgorysmall @click.native='tpcatgorysmall' ref="catgorysmall1" class="myrool" :key="1"
			:title="['流行','新款','精选']" @switchcategory='switchtype' v-show="iscatgorysmall">
			</catgorysmall><!-- 超过顶部多少距离补上去的catgorysmall吸顶效果-->
			<scroll class="scr" ref="scr" @bootheight='bootheight' :probeType='3' :pullUp='true' @pullingup='pullingup'>
				<swiper :bannerlength='bannerlength' :banner='banner' :banneritemimagelink='banneritemimagelink'
					:banneritemimageimg='banneritemimageimg' :banneritemimagetaillink='banneritemimagetaillink'
					:banneritemimagetailimg='banneritemimagetailimg'></swiper><!-- 轮播图 -->
				<navtop :recommend='recommend'></navtop><!-- 轮播图下4个导航栏 -->
				<navmgj></navmgj><!-- 8个2排导航栏 -->
				<catgorysmall @click.native='tpcatgorysmall' ref="catgorysmall2" :title="['流行','新款','精选']"
					@switchcategory='switchtype' v-show="!iscatgorysmall"></catgorysmall><!-- 精选 流行 推荐的导航栏 -->
				<goodslist :goods="goods[goodstype].list"></goodslist>
			</scroll>
			<tp @click.native='tptop' v-show="isscroll"></tp>
	</div>
</template>

<script>
	import navbar from 'components/common/tab/navbar.vue'
	import catgorysmall from 'components/contend/home/category-small.vue'
	import goodslist from 'components/contend/home/home-/goods/goodslist.vue'
	import swiper from '@/swiper/swiper.vue'
	import {
		mixintp
	} from 'common/mixin.js' //混入返回顶部标签

	import scroll from 'components/common/better-scroll/noloadscroll.vue' //better-scroll框架

	import navtop from 'views/home/homepack/navtop'
	import navmgj from 'views/home/homepack/navmgj'


	import {
		getHomeMultidata,
		getHomecat
	} from 'network/homeaxi'
	export default {
		data() {
			return {
				banner: null,
				recommend: null,

				goods: {
					'pop': {
						page: 0,
						list: []
					},
					'new': {
						page: 0,
						list: []
					},
					'sell': {
						page: 0,
						list: []
					},
				},
				goodstype: 'pop',
				catgorysm: 0, //获取catgorysmall距离顶部的距离
				iscatgorysmall: false, //决定替补吸顶效果catgorysmall是否显示
				banneritemimagelink: null, //第一张复制图的link
				banneritemimageimg: null, //第一张复制图的img
				banneritemimagetaillink: null, //最后一张复制图的link
				banneritemimagetailimg: null, //最后一张复制图的img
				savey: 0, //离开页面时保存当前页面的滚动条方便下次回来自动跳到
				bannerlength: 0 //有多少张轮播图图片
			}
		},
		components: {
			navbar,
			swiper,
			navtop,
			navmgj,
			catgorysmall,
			goodslist,
			scroll,

		},
		mixins: [mixintp], //混入返回顶部标签
		methods: {
			pullingup() { //可以再加载一页数据了
				this.getHomecat(this.goodstype)
				this.$refs.scr.bscroll.refresh() //此方法是重新测一次滚动页面的高度，因为加载了更多的图片，防止拉动时卡住
			},
			//判断点击的是['流行','新款','精选']中的哪个
			switchtype(index) {
				if (index == 0) {
					this.goodstype = 'pop'

				} else if (index == 1) {
					this.goodstype = 'new'

				} else {
					this.goodstype = 'sell'

				}
				this.$refs.catgorysmall1.ind = index
				this.$refs.catgorysmall2.ind = index
			},
			tpcatgorysmall() {
				this.$refs.scr.scrolltop(0, -600, 300)
			},
			//超过多少y距离显示回到顶部图标
			bootheight(position) {
				if (position.y < -1500) {
					this.isscroll = true
				} else if (position.y > -1500) {
					this.isscroll = false
				}
				this.iscat(position, this.topcat)
			},
			//判断['流行','新款','精选']显示的是复制品还是原品
			iscat(position, topcat) {
				if (-(position.y) >= topcat) {
					this.iscatgorysmall = true
				} else {
					this.iscatgorysmall = false
				}

			},


			//*网络请求*//
			getHomeMultidata() {
				getHomeMultidata().then(res => {
					this.banner = res.data.banner.list
					this.recommend = res.data.recommend.list
					this.banneritemimagelink = this.banner[0].link
					this.banneritemimageimg = this.banner[0].image
					this.banneritemimagetaillink = this.banner[this.banner.length - 1].link
					this.banneritemimagetailimg = this.banner[this.banner.length - 1].image
					this.bannerlength = this.banner.length
					// console.log(this.banneritemimagetailimg)
				})
			},
			getHomecat(type) {
				const page = this.goods[type].page + 1
				getHomecat(type, page).then(res => {
					this.goods[type].list.push(...res.data.list)
				})
				this.goods[type].page += 1


			}
		},
		computed: {
			topcat() {
				return this.$refs.catgorysmall2.$el.offsetTop
			}
		},
		created() {
			//获取轮播图数据跟轮播图去到的页面数据
			this.getHomeMultidata()
			this.getHomecat('pop')
			this.getHomecat('new')
			this.getHomecat('sell')

		},
		//一进入页面就触发；可用于初始化页面数据等
		activated() {
			this.$refs.scr.bscroll.refresh() //刷新一次页面长度，防止下拉加载更多的时候回不到离开当前页面时候的滚动条y
			this.$refs.scr.scrolltop(0, this.savey, 0) //回到离开当前页面时候的滚动条y
			// console.log(this.savey)
		},
		deactivated() {
			this.savey = this.$refs.scr.bscroll.y //保存离开当前页面时候的滚动条y


		}

	}
</script>

<style scoped="scoped">
	#home {
		height: 100vh;
	}

	.home-navbar {
		background-color: pink;
		color: rgba(255, 255, 255);
	}

	.scr {
		height: calc(100% - 85px);
		overflow: hidden;

	}

	.myrool {
		position: relative;
		z-index: 9;
	}
</style>
