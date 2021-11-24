<template>
	<div id="null">
	<h2>无此接口数据</h2>
	<h2>非常抱歉！</h2>
	<button type="button" @click="goto">点击返回</button>
	</div>
</template>

<script>
	export default{
	name:'nul',
	methods:{
		goto(){
		this.$router.back()
		}
	},
	created() {
		window.alert('糟糕~此商品已下架')
	}
	}
	
	
	
</script>

<style scoped="scoped">
	#null{
		color: red;
		text-align: center;
	}
	
</style>
