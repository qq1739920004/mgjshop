<template>
	<div id='detail'>
		<detailnavbar ref="denavbar"  :class="{navclik:isnav}" class="denavbar" @tpclik='tpclik'  @removetimi='removetimi'></detailnavbar>
		<detailbetterscroll @bootheight='bootheight' ref="detailscroll" :probeType='3' :pullUp='true' class="detaiscroll">
		<detailswiper class="deswiper" :banner='detailswiperimg' :bannerlength='detailswiperimgleng' :banneritemimageimg='detailswiperimgon' :banneritemimagetailimg='detailswiperimgtail'></detailswiper>
		<detailgoods :goods='goods'></detailgoods>
		<detailshop :shopInfo='detailshop'></detailshop>
		<detailgoodsimg :goodsInfo='detailgoodsimg'></detailgoodsimg>
		<detailparam ref="param" :goodsParams='detailparam'></detailparam>
		<detailcomment ref="comment" :commentInfo='detailcomment'></detailcomment>
		<div class="recommends" ref="list">
			<span>推荐</span>
		</div>
		<goodslist  :goods='detailcommends' ></goodslist>
		</detailbetterscroll>
		<tp @click.native='tptop' v-show="isscroll"></tp>
		<boottomnav @addtocart='daddtocart'></boottomnav>
		<toast :message='message' :show='show'></toast>
	</div>
</template>

<script>
	import detailnavbar from 'views/details/detailnavbar/detailnavbar.vue'//详情页顶部
	import detailswiper from '@/swiper/swiper.vue'//商品轮播图
	import {getdetail,Goods,Shop,GoodsParam,getrecommend} from 'network/detailaxi.js'//标题，是否包邮，是否打折等轮播图下的商品描述的数据请求
	import detailgoods from 'views/details/detailgoods/detailgoods.vue'//标题，是否包邮，是否打折等轮播图下的商品描述
	import detailshop from 'views/details/detailshop/detailshop.vue'//店铺信息
	import detailbetterscroll from 'components/common/better-scroll/noloadscroll.vue' //移动端滚动插件
	import detailgoodsimg from 'views/details/detailgoodsimg/detailgoodsimg.vue'//商品详情图片数据
	import detailcomment from 'views/details/detailcomment/detailcomment.vue'//商品详情页的评论
	import detailparam from 'views/details/detailparam/detaiparam.vue'//商品的参数数据
	import goodslist from 'components/contend/home/home-/goods/goodslist.vue'//商品的推荐数据
	import boottomnav from 'views/details/detailboottomnavbar/boottomnav.vue'//底部导航栏
	import {mixintp} from 'common/mixin.js'//混入返回顶部标签
	import toast from 'components/common/toast/toast.vue'//点击加入购物车会在屏幕中间显示的小字条
	export default{
		name:'detail',
		components:{
			detailnavbar,
			detailswiper,
			detailgoods,
			detailshop,
			detailbetterscroll,
			detailcomment,
			detailgoodsimg,
			detailparam,
			goodslist,
			boottomnav,
			toast
		},
		mixins:[mixintp],//混入返回顶部标签
		data(){
			return{
				iid:null,//商品详情页的iid
				detailaxi:null,//详情页的数据
				detailswiperimg:null,//详情页轮播图的图片
				detailswiperimgleng:0,//详情页轮播图的图片个数
				detailswiperimgon:null,//轮播图第一个图镜像
				detailswiperimgtail:null,//轮播图最后一个图镜像
				goods:{},//轮播图下面商品标题快递打折之类数据的整合
				detailshop:{},//店铺信息
				detailgoodsimg:{},//商品图片详情数据
				detailparam:{},//商品的参数数据
				detailcomment:{},//商品评论
				detailcommends:[],//商品推荐
				navtop:[],//点击顶部导航栏滚动到的位置数组
				isnav:true,//判断什么时候可以点击
				te:0,//用于解决商品，参数，评论，推荐四个地方点击时来回跳色的解决方法
				show:false,
				message:'',
				isinterval:0,//是否刷新页面高度
        isremovetimi:0//决定是否还让计时器继续刷新数据
			}
		},
		
		
		methods:{
			getswiper(){
				//请求轮播图的数据
				getdetail(this.iid).then(res=>{
					this.detailaxi=res
					this.detailswiperimg=this.detailaxi.result.itemInfo.topImages
					this.detailswiperimgleng=this.detailaxi.result.itemInfo.topImages.length
					this.detailswiperimgon=this.detailswiperimg[0]
					this.detailswiperimgtail=this.detailswiperimg[this.detailswiperimgleng-1]
					
				})
			},
			//标题等数据请求
			getgoods(){
				getdetail(this.iid).then(res=>{
					const result=res.result
					this.goods=new Goods(result.itemInfo,result.columns,result.shopInfo.services)
				})
			},
			
			//店铺信息数据请求
			getshop(){
				getdetail(this.iid).then(res=>{
				this.detailshop=new Shop(res.result.shopInfo)
				})
				},
				//商品图片详情数据
			getgoodsimg(){
				getdetail(this.iid).then(res=>{
				this.detailgoodsimg=res.result.detailInfo
				})
			},
			getparam(){
				getdetail(this.iid).then(res=>{
				this.detailparam=res.result.itemParams
				})
			},
			getcomment(){
				getdetail(this.iid).then(res=>{
					if(res.result.rate.cRate!=0){
				this.detailcomment=res.result.rate.list[0]
				}
				})
			},
			getcommends(){
				getrecommend().then(res=>{
					
				this.detailcommends=res.data.list
				
				})
			
			},
			//点击顶部导航栏去刀指定地方
			tpclik(index){
				this.te=1
				this.$refs.detailscroll.scrolltop(0,44-this.navtop[index],1)
				setTimeout(()=>{
					this.te=0
				},300)
			},
			//获取商品，参数，评论，推荐四个地方的offsetrop值
			topupdate(){
					this.navtop[0]=0;
					this.navtop[1]=this.$refs.param.$el.offsetTop
					this.navtop[2]=this.$refs.comment.$el.offsetTop
					this.navtop[3]=this.$refs.list.offsetTop
					// console.log(this.navtop)
				
			},
			//根据滚动条滚动触发，判断顶部按钮显示位置，看看去到的是商品，参数，评论，推荐哪个地方，方便变色
			bootheight(position){
				//重新刷新一次页面高度
				if(this.isinterval==0)
				{
				const timeno=setTimeout(()=>{

					this.topupdate()
					this.$refs.detailscroll.bscroll.refresh()
					this.isinterval=0
				},500)
				this.isinterval=1
				}
				//判断什么时候显示回到顶部按钮
				if(position.y<-1500){
					this.isscroll=true
				}
				else if(position.y>-1500){
					this.isscroll=false
				}
				//判断在商品，参数，评论，推荐哪个地方，方便变色
				let positiony=position.y
				let detatop=0
				if(44-this.navtop[1]>=positiony && positiony>44-this.navtop[2]){
					detatop=1
				}
				else if(44-this.navtop[2]>=positiony && positiony>44-this.navtop[3]){
					detatop=2
				}
				else if(positiony<44-this.navtop[3]){
					detatop=3
				}
				else{
					detatop=0
				}
			
			if (this.te==0){
				this.$refs.denavbar.isaticl=detatop
			}
			},
			//加入购物车
			daddtocart(){
				// console.log('---');
				const product={}
				product.image=this.detailswiperimgon
				product.title=this.goods
				product.desc=this.goods.desc
				product.price=this.goods.realPrice
				product.iid=this.iid
				product.count=1
				product.ispink=true
				this.$store.dispatch('addcare',product).then(res=>{
					this.$toast.show(res)
				})
			},
      //删除所有定时器
      removetimi(){
        this.isremovetimi=1
      }
      
			
			
			
			
		},
		created() {
      
      this.isremovetimi=0
      
			const timeno=setInterval(()=>{
        if(this.isremovetimi==0){
				this.topupdate()
        }
			},100)
			setTimeout(()=>{
				clearInterval(timeno)
			},1000)
			this.iid=this.$route.params.iid
			getdetail(this.iid).then(res=>{
				if(res!=undefined){
			this.getswiper()//轮播图数据请求
			this.getgoods()//标题等数据请求
			this.getshop()//店铺信息数据请求
			this.getgoodsimg()//商品图片详情数据
			this.getparam()//商品的参数数据
			this.getcomment()//商品评论信息
			this.getcommends()//商品推荐
			}
			}).catch(res=>{
				console.log(111);
			})
			setTimeout(()=>{
				this.isnav=false
			},600)
		},
	
		
	
	}
	</script>

<style scoped="scoped">
	.deswiper{
		height: 60vh;
		overflow: hidden;
		
	}
	#detail{
		height: 100vh;
	}
	.navclik{
		pointer-events:none
	}
	.detaiscroll{
		height: calc(100% - 49px);
		overflow: hidden;
		
	}
	.denavbar{
		position: relative;
		z-index: 9;
	}

	.recommends{
		margin: 15px 0px;
		height: 30px;
		display: flex;
		justify-content: center;
	}
	.recommends span{
		display: block;
		width: 40px;
		background-color: #ff557f;
		text-align: center;
		height: 40px;
		line-height: 40px;
		border-radius: 50%;
	}
	
	
</style>
