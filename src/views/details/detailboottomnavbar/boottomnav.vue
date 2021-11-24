<template>
	<div id="boottomnav">
		<div class="boottomimg">
			<div>
				<img src="~assets/img/detailboottomnav/communication.svg">
				<div>客服</div>
			</div>
			<div>
				<img src="~assets/img/detailboottomnav/store.svg">
				<div>店铺</div>
			</div>
			<div>
				<img src="~assets/img/detailboottomnav/collection.svg">
				<div>收藏</div>
			</div>
		</div>
		<div class="font">
			<div @click="addtocart">
				加入购物车
			</div>
			<div>
				购买
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			addtocart(){
				this.$emit('addtocart')
			}
		}

	}
</script>

<style scoped="scoped">
	#boottomnav {
		border-top: 1px solid #EAEAEA;
		display: flex;
		height: 49px;
		position: relative;
		bottom: 49px;
		background-color: white;

	}

	.boottomimg {
		flex: 1;
		display: flex;
		text-align: center;
		font-size: 15px;
	}

	.boottomimg>div {
		flex: 1;

	}

	.boottomimg img {
		margin: 0 auto;
	}

	.font {
		flex: 1;
		display: flex;
	}

	.font div {
		flex: 1;
		line-height: 49px;
		text-align: center;
	}

	.font :nth-child(1) {
		background-color: #ffdc15;
	}

	.font :nth-child(2) {
		color: white;
		background-color: #ff5d9e;
	}
</style>
