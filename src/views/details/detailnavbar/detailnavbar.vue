<template>
	<div id="detailnavbar">
	<navbar>
		<div slot='left' class="slot" @click="leftback">
			<div>
				<img src="~assets/img/detailnavbar/detailnavbar-left.svg" >
			</div>
		</div>
		<div slot='cent' class="centnav">
			<div v-for="(item,index) in title" class="centnavitem" :class="{aticl:index==isaticl}" @click="isaticladd(index)">
				{{item}}
			</div>
		</div>
	</navbar>
	</div>
</template>

<script>
	import navbar from 'components/common/tab/navbar.vue'
	export default{
		
		data(){
			return{
				title:['商品','参数','评论','推荐'],
				isaticl:0
			}
		},
		components:{
			navbar
		},
		methods:{
			isaticladd(index){
				this.isaticl=index
				this.$emit('tpclik',index)
			},
			leftback(){
				this.$router.back()
			}
		}
	}
</script>

<style scoped="scoped">
	#detailnavbar{
		z-index: 9;
		background-color: white;
		
	}
	.centnav{
		display: flex;
		justify-content: space-around;
		font-weight: 500;
		opacity: 0.7;
		font-size: 16px;
	}
	
	.slot{
		margin-top: 5px;
	}
	.aticl{
		color: #FF9EC5;
	}
</style>
