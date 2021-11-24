<template>
	<div class="swiper-big">
		<div class="pos" ref="pos" :style="'left:'+(lefts+leftsstore)+'px'" @touchstart='mouseenter' :class="{poinbig:!isswibig}">
			<div class="posimg" ref='posimg' @touchend='mouseleave' @touchmove='leftx' :class="{poin:!isswi}" :style="'width:'+((bannerlength+2)*100)+'%'">
				<div class="swiperitemimage" >
					<a :href="banneritemimagetaillink=='undefined'?banneritemimagetaillink:'#'">
						<img :src="banneritemimagetailimg">
					</a>
				</div>
				<div v-for="(item,index) in banner" class="swiperitem" :key='index'>
					<a :href="item.link=='undefined'?item.link:'#'">
						<img :src="item.image?item.image:item">
					</a>
				</div>
				<div class="swiperitemimage" >
					<a :href="banneritemimagelink=='undefined'?banneritemimagelink:'#'">
						<img :src="banneritemimageimg">
					</a>
				</div>
			</div>
		</div>
		<ul class="whiteradio" ref="swiperli">
			<li v-for="(item,index) in banner" :id="index==ind ? 'black' : ''" @touchstart='blackradius(index)'
				@touchend='end()'></li>
		</ul>


	</div>
</template>

<script>
	export default {
		name: 'swiper',
		data() {
			return {
				ind: 0,
				swiper: null,
				leftsstore: 0, //目前是第n张图片的n*图片width
				lefts: 0, //决定滑动展示的x轴px
				leftxstart: 0, //开始触摸的位置
				leftxsend: 0, //结束触摸的位置
				leftxsum: 0, //开始到结束触摸之间的位置
				imgwidth: 0, //图片的宽
				imgrightbug: 0,//如果需要禁止图片第一张跟最后一张左右滑的时候配合下面的起作用
				indimage:0,//第一张图镜像的暂时存储ind
				isswi:true,//节流阀
				isswibig:true//只有一张图片时候不允许拉动
			}
		},
		//使用此轮播图组件需要传banner需要轮播的图片，轮播图片的第一张link：banneritemimagelink，
		//轮播图片的第一张img：banneritemimageimg，轮播图片的最后一张link：banneritemimagetaillink，轮播图片的最后一张img：banneritemimagetailimg
		//需要轮播的图片数
		props: ['banner','banneritemimageimg','banneritemimagelink','banneritemimagetaillink','banneritemimagetailimg','bannerlength'],
		
		methods: {
			//让轮播图缓动的形式流动
			animation(youandme,leftov=0){
				this.isswi=false
				this.indimage=0
				//判断是不是第一张的复制图变化
				if(this.ind==this.bannerlength){
					this.ind=this.indimage
					this.indimage=this.bannerlength
				}
				let speed=0
				let leftover=-leftov
				this.leftsstore+=leftov
				// console.log(leftov)
				// console.log(youandme)
				const animationtime=setInterval(()=>{
					
					speed=(youandme-leftover)/15
					if(speed>0){
						leftover+=Math.ceil(speed)
						this.leftsstore+=(-(Math.ceil(speed)))
					}else{
						leftover+=Math.floor(speed)
						this.leftsstore+=(-(Math.floor(speed)))
					}
					
					
					// console.log(this.leftsstore)
					//由于计算不准确导致轮播图抖动，给 youandme==leftover加上一个向上取整youandme ==Math.ceil(leftover)解决
					if(youandme ==Math.ceil(leftover)){
						
						this.isswi=true
						clearInterval(animationtime)
						// console.log(this.leftsstore)
						
					}
					
				},15)
			},

			setintervalswiper() {
			
				
				this.swiper = setInterval(() => {
					//判断是不是第一张的复制图变化如果是把this.ind变回来
					if(this.indimage!=0){
					if(this.ind==0){
						this.ind=this.indimage
						this.indimage=0
					}
					}
					this.ind++
					if (this.ind == this.bannerlength+1) {
						this.ind = 1
						this.leftsstore=-(this.$refs.posimg.children[0].children[0].children[0].clientWidth)
					}
					
					//决定轮播图跳转到哪个图
					// this.leftsstore=-((this.$refs.posimg.children[0].children[0].children[0].clientWidth) * this.ind)
					this.animation(((this.$refs.posimg.children[0].children[0].children[0].clientWidth)))
					
				}, 2000)
				

			},
			//点击小圆点
			blackradius(index) {
				//对小圆点点击的那段点击的时间时禁止轮播图自动转换
				clearInterval(this.swiper)

				this.ind = index
			},
			//离开小圆点
			end() {
				//判断点击了哪个小圆点，让轮播图转到点击的那个小圆点
				//决定轮播图跳转到哪个图
				this.leftsstore = -((this.$refs.posimg.children[0].children[0].children[0].clientWidth) * (this.ind+1))
				//对小圆点的点击时间已过允许轮播图自动转换
				this.setintervalswiper()
			},
			mouseenter(e) {
				
				if(this.leftsstore>=0){
					this.leftsstore=((this.$refs.posimg.children[0].children[0].children[0].clientWidth)*-this.bannerlength)
					this.ind=this.bannerlength-1
				}
				//判断是不是最后一张的滑动如果是点下去的一瞬间马上变成第一张
				
				if(this.indimage!=0){
				if(this.ind==0){
					this.ind=0
					this.indimage=0
					this.leftsstore=-(this.$refs.posimg.children[0].children[0].children[0].clientWidth)
				}
				}
				
				this.imgwidth = this.$refs.posimg.children[0].children[0].children[0].clientWidth
				clearInterval(this.swiper)
				this.leftxstart = e.targetTouches[0].pageX
				
				
				// console.log(this.$refs.posimg.offsetLeft)
			},
			mouseleave() {
				this.setintervalswiper()
				
				
				
				// 如果左滑大于图片的三分之一
				if (this.lefts <= -(this.imgwidth / 3) || this.imgrightbug == 1) {
					//如果是最后一张不允许左滑
				// 	if (this.leftxsum <= 0 && this.ind == (this.bannerlength- 1)) {
				// 		this.imgrightbug = 0
				// 	} else {
					
						this.animation(((this.$refs.posimg.children[0].children[0].children[0].clientWidth)),this.lefts)
						// console.log(this.leftsstore)
						
						this.ind++
						//判断是不是最后一张的滑动
						if (this.ind == this.bannerlength) {
							this.ind=this.indimage
							this.indimage=this.bannerlength
							
						}
						this.lefts = 0
					// }
				}
				//如果右滑大于图片的三分之一
				else if (this.lefts > (this.imgwidth / 3)) {
					
					//如果是第一张不允许右滑
					// if (this.leftxsum >= 0 && this.ind == 0) {
					// } else {
						this.animation((-(this.$refs.posimg.children[0].children[0].children[0].clientWidth)),this.lefts)
						
						this.ind--
						this.lefts = 0
					// }
					if(this.ind==-1){
						this.ind=this.bannerlength-1
					}
				}
				//如果左右滑都小于图片的一半
				else {
					this.lefts = 0
				}
			},
			leftx(e) {
				this.leftxsend = e.targetTouches[0].pageX
				this.leftxsum = this.leftxsend - this.leftxstart
				//如果是第一张不允许出现能看到右滑的画面
				// if (this.leftxsum >= 0 && this.ind == 0) {

				// } 
				// //如果是最后一张不允许出现能看到左滑的效果
				// else if (this.leftxsum <= 0 && this.ind == (this.bannerlength - 1)) {
				// 	this.imgrightbug = 1
				// } 
				// else {
					//判断是不是只有一张图如果是禁止拖拉
					if(this.bannerlength==1){
						this.isswibig=false
					}
					else{
					this.lefts = this.leftxsum
					}
				// }
				
				

			}

		},
		created() {
			this.setintervalswiper()
			setTimeout(()=>{
				//如果只有一张图片停止轮播图转动
				if(this.bannerlength==1){
					
					this.isswibig=false
					clearInterval(this.swiper)
				}
			},1000)
		},
		mounted() {
			
			this.leftsstore=-(this.$refs.posimg.children[0].children[0].children[0].clientWidth)//让图片定在第一张图而不是最后一张的镜像图
		},
		activated() {//调用轮播图的定时器
		
		if(this.swiper==null){	//判断created运行没有如果没有就运行this.setintervalswiper()
			this.setintervalswiper()
			}
		},
		deactivated() {//删除轮播图定时器
			clearInterval(this.swiper)
			clearInterval(this.animationtime)
			this.swiper=null  //防止activated里面的判断不准确
		},
		beforeDestroy(){
			clearInterval(this.swiper)
			clearInterval(this.animationtime)
			this.swiper==null //防止activated里面的判断不准确
		}
		
	}
</script>

<style scoped="scoped">
	.swiper-big {
		position: relative;
		overflow: hidden;

	}

	.pos {
		height: 100%;
		position: relative;
	}
	.posimg{
		/* width: 500%; */
		display: flex;
	}
	.swiper-big img {
		width: 100%;
	}

	.whiteradio {
		padding-left: 0;
		position: absolute;
		bottom: 0px;
		left: 50%;
		transform: translateX(-50%);
		display: inline;
		list-style: none;
		
		display: flex;
		
	}

	.whiteradio li {
		margin-left: 5px;
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: rgba(189, 189, 189, 0.8);
		float: left;
		flex: 1;
	}

	#black {
		background: rgba(255, 131, 191);
	}

	.swiperitem,.swiperitemimage{
		display: inline;
		transform: translateZ(0);
		flex: 1;
		
	}
	.poin{
		pointer-events:none
	}
	.poinbig{
		pointer-events:none
	}
	
</style>
