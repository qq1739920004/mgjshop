<template>
	<div id="leftcatelist" @click="maitK" >
		<div class="list">
			{{list.title}}
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			list:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		data(){
			return{
				idkey:{maitkey:0,miniwallkey:0}
			}
		},
		methods:{
			maitK(){
				this.idkey.maitkey=this.list.maitKey
				this.idkey.miniwallkey=this.list.miniWallkey
				this.$store.commit('maiKey',this.idkey)
				
			}
		}
	}
</script>

<style scoped="scoped">
	#leftcatelist{
		height: 50px;
		width: 90px;
		border-bottom: 1px solid #eeeeee;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.list{
		height: 50px;
		line-height: 50px;
		width: 90px;
		text-align: center;
		color: #7d7d7d;
		font-size: 20px;
		
	}
	
</style>
