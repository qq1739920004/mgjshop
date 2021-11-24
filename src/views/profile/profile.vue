<template>
	<div id="profile">
		<navbar class="pronavbar">
			<div  slot='cent'>我的</div>
		</navbar>
		<div class="pro">
			<img src="~assets/img/profile/nouser.svg" >
			<div class="usergoods">
				<span>登陆/注册</span>
				
				<p>暂无绑定手机号</p>
				<img src="~assets/img/swiper/right.svg" >
			</div>
			
		</div>
		<div class="assets">
			<div><span>0.00</span>元<p>我的余额</p></div>
			<div><span>0</span>个<p>我的优惠</p></div>
			<div><span>0</span>分<p>我的积分</p></div>
		</div>
		<div class="listbar">
		<div class="list"><img src="~assets/img/profile/email.svg" ><span>我的信息</span></div>
		<div class="list"><img src="~assets/img/profile/integralshop.svg" ><span>积分商城</span></div>
		<div class="list"><img src="~assets/img/profile/vip.svg" ><span>会员卡</span></div>
		</div>
		<div class="listbar-bott">
		<div class="list"><img src="~assets/img/profile/shopcart.svg" ><span>我的购物车</span></div>
		<div class="list"><img src="~assets/img/profile/app.svg" ><span>下载购物APP</span></div>
		</div>
	</div>
</template>

<script>
	import navbar from 'components/common/tab/navbar.vue'//顶部导航栏组件
	export default{
		components:{
			navbar,
		}
	}
</script>

<style scoped="scoped">
	
	#profile{
		
		height:100vh;
		padding: 0;
		margin: 0;
	}
	.pronavbar{
		
		background-color: pink;
		color: rgba(255, 255, 255);
	}
	.pro{
		
		position: relative;
		top: -1px;
		height: 100px;
		background-color: pink;
	}
	.pro img{
		position: absolute;
		left: 20px;
		top: 18px;
	}
	.usergoods{
		color: #f7f7f7;
		font-weight: 600;
		letter-spacing: 2px;
		position: absolute;
		left: 100px;
		top: 25px;
	}
	.usergoods span{
		display: inline-block;
		margin-left:8px;
		font-size: 20px;
	}
	.usergoods p{
		font-size: 15px;
	}
	.usergoods p::before{
		content: '';
		width: 16px;
		height: 16px;
		display: inline-block;
		background:url(../../assets/img/profile/phone.svg)no-repeat;
		vertical-align:middle;
	}
	.usergoods img{
		position: absolute;
		left: 230px;
		display: block;
		
	}
	.assets{
		height: 100px;
		display: flex;
		font-size: 18px;
		border-bottom: 15px solid #ececec;
	}
	
	.assets p{
		display: block;
		margin-top:4px;
	}
	.assets span{
		color: #ff5906;
		font-size: 23px;
	}
	.assets div{
		flex: 1;
		text-align: center;
		padding-top: 30px;
	}
	.assets div:nth-child(1),.assets div:nth-child(2){
		border-right: 1px solid #dcdcdc;
		
	}
	.listbar{
		display: flex;
		flex-direction: column;
		height: 153px;
		border-bottom: 15px solid #ececec;
	}
	.list:nth-child(1),.list:nth-child(2){
				border-bottom: 1px solid #dcdcdc;
	}
	.list{
		flex: 1;
		line-height:50px;
		/* background-color: pink; */

		margin: 0 10px;
	}
	.list img{
		width: 23px;
		vertical-align: sub;
		margin-right: 10px;
	
	}
	.list span{
		font-size:20px ;
		
		
	}
</style>
