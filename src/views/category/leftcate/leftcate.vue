<template>
	<div id="leftcate">
		<div class="leftbar">
			<leftlist v-for="(item,index) in list"  :list='list[index]' :key="index" @click.native='change(index)' :class="{backcolor:ischange==index}"></leftlist>
		</div>
	</div>
</template>

<script>
	import leftlist from './leftcatelist.vue'//左侧导航栏组件
	
	export default{
		data(){
			return{
				ischange:0
			}
		},
		components:{
			leftlist
		},
		props:{
			list:{
				type:Array,
				default(){
					return []
				}
			}
		},
		methods:{
			change(index){
				this.ischange=index
			}
		}
	}
</script>

<style scoped="scoped">
	
	.leftbar{
		background-color:#f8f8f8;
		display: flex;
		flex-direction: column;
		
	}
	.backcolor{
		background-color: white;
	}
	
</style>
