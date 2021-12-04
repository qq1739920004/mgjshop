<template>
	<div id="goodslist">
	<div class="goodslisti">
		<goodslistitem v-for="(item,index) in goods" :key="index" :goodslist="item"></goodslistitem></div>
	</div>
</template>

<script>
	import goodslistitem from './goodslistitem.vue'
	export default{
		props:{
			goods:{
				type:Array,
				default(){
					return []
				}
			}
		},
		components:{
			goodslistitem 
		}
	}
</script>

<style scoped="scoped">
	#goodslist{
		padding-bottom: 59px;
	}
	.goodslisti{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
</style>
