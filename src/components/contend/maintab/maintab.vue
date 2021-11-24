<template>
		<tab>
			<tabbar path='/home'>
				<img slot='tab-tex-imgred' src="~assets/img/tabbar/home_active.svg">
				<img slot='tab-tex-img' src="~assets/img/tabbar/home.svg">
				<div slot='tab-tex-p'>主页</div>
			</tabbar>

			<tabbar path='/category'>
				<img slot='tab-tex-imgred' src="~assets/img/tabbar/category_active.svg">
				<img slot='tab-tex-img' src="~assets/img/tabbar/category.svg">
				<div slot='tab-tex-p'>分类</div>
			</tabbar>
			<tabbar path='/shopcart'>
				<img slot='tab-tex-imgred' src="~assets/img/tabbar/shopcart_active.svg">
				<img slot='tab-tex-img' src="~assets/img/tabbar/shopcart.svg">
				<div slot='tab-tex-p'>购物车</div>
			</tabbar>
			<tabbar path='/profile'>
				<img slot='tab-tex-imgred' src="~assets/img/tabbar/profile_active.svg">
				<img slot='tab-tex-img' src="~assets/img/tabbar/profile.svg">
				<div slot='tab-tex-p'>我的</div>
			</tabbar>
		</tab>
</template>

<script>
	import tab from 'components/common/tab/tab.vue'
	import tabbar from 'components/common/tab/tab-bar.vue'
	export default {
		name: 'maintab',
		components: {
			tab,
			tabbar
		}
	}
</script>
<style scoped="scoped">

</style>
