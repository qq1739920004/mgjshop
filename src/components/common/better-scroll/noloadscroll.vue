<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from '@better-scroll/core'
	import ObserveDOM from '@better-scroll/observe-dom'
	import Pullup from '@better-scroll/pull-up'
	BScroll.use(ObserveDOM)
	BScroll.use(Pullup)
	export default {
		name: 'scroll',
		data() {
			return {
				bscroll: null,
				isload:true//节流阀防止上拉刷新太快
			}
		},
		props: {
			// 看是否要监听scroll 1,2为不要3为要
			probeType: {
				type: Number,
				default () {
					return 3
				}
			},
			pullUp: {
				type: Boolean,
				default () {
					return true
				}

			},
			
		},

		mounted() {
			this.bscroll = new BScroll(this.$refs.wrapper, {
				click: true,
				observeDOM: true,
				observeImage:true,
				probeType: this.probeType, //滚动事件
				pullUpLoad: this.pullUp //上拉加载更多事件
			})
			//是否开启上拉加载
			
			this.setinterval()//开启节流阀
			//上拉加载
			this.bscroll.on('pullingUp', () => {
				this.$emit('pullingup')
				this.finishpullup()
			})
			
			//滚动事件判断返回顶部什么时候出现
			this.bscroll.on('scroll', (position) => {
				this.$emit('bootheight', position)
			}) 
			
		},
		methods: {
			scrolltop(x, y, time = 300) { //x，y定位time是去到定位的毫秒速
				this.bscroll.scrollTo(x, y, time)
			},
			finishpullup(){//当上拉加载数据加载完毕后，需要调用此方法告诉 better-scroll 数据已加载，可以继续监测下一次上拉加载，如果没有此方法的话则只会调用一下上拉加载。
				if(this.isload){
				this.bscroll.finishPullUp()
				this.isload=false
				}
			},
			setinterval(){//节流阀防止上拉刷新太快
				setInterval(()=>{this.isload=true,this.finishpullup()},1000)
			}
		}
	}
</script>

<style scoped="scoped">
</style>