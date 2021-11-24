<template>
  <div id="app">
	  <keep-alive exclude="detail,nul"> 
	<router-view></router-view>
	</keep-alive>
	<!-- v-show判断当前路由处于哪个界面如果是处于商品详情页面就把底部的选项栏给隐藏 -->
	<maintab v-show="this.$route.meta.isboottab"></maintab>
  </div>
</template>
<script>
	import maintab from 'components/contend/maintab/maintab.vue'
	export default {
		name:'app',
		components:{
			maintab
		}
	}
</script>

<style scoped="scoped">
@import url("assets/css/base.css");

</style>
