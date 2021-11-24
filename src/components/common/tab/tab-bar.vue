<template>
	<div class="tab-tex-item" @click="url()">
		<div v-show="isname"><slot name='tab-tex-imgred'></slot></div>
		<div v-show="!isname"><slot name='tab-tex-img'></slot></div>
		<div :style="sycolour"><slot name='tab-tex-p'></slot></div>
	</div>
</template>
<script>
	export default {
		
		props:{
			path:String,
			colour:{
				type:String,
				default:'red'
			}
		},
		methods:{
			url(){
				this.$router.replace(this.path).catch(err => {
				  console.log('点那么快，手不疼啊！！！！')
				})
				
			}
		},
		computed:{
			isname(){
				return this.$route.path.indexOf(this.path)!==-1
			},
			sycolour(){
				return this.isname?{color:this.colour}:{}
			}
			
		}
	}
</script>


<style scoped="scoped">
	.tab-tex-item{
		flex: 1;
		text-align: center;
		height: 49px;
		
	}
	.tab-tex-item img{
		width: 23px;
		height: 20px;
		vertical-align: middle;
	}
	
</style>
