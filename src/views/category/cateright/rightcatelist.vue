<template>
	<div id="rightlist">
		<a :href="listright.link">
		<img :src="listright.image"  @load="imgload">
		<div class="listtitle">
			{{listright.title}}
		</div>
		</a>
	</div>
</template>

<script>
	export default{
		props:{
			listright:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		methods:{
			imgload(){
				this.$emit('as')
			}
		}
	}
</script>

<style scoped="scoped">
	#rightlist{
	margin:8px 3px 20px 3px;
	}
	#rightlist img{
		width: 80px;
		
	}
	#rightlist a{
		text-decoration: none;
		
	}
	.listtitle{
		display: block;
		width: 80px;
		text-align: center;
		color: #7d7d7d;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
</style>
