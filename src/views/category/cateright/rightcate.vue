<template>
	<div id="rightcate">
		<rightlist v-for="(item,index) in listright" :listright='listright[index]' :key="index"></rightlist>
	</div>
</template>

<script>
	import rightlist from './rightcatelist.vue'
	export default{
		components:{
			rightlist
		},
		props:{
			listright:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style scoped="scoped">
	#rightcate{
		margin-top: 20px;
		width: 100%;
		/* background-color:#dfdfdf; */
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		
	}
</style>
