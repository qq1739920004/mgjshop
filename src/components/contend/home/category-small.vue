<template>
	<div class="category-small">
		<div v-for="(item,index) in title" class="catspan" @click="setcolor(index)">
		<span :class="index==ind?'pin':''">{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
			ind:0,
			}
		},
		props:{
			title:{
				type:Array,
				default(){
					return []
				}
			}
		},
		methods:{
			setcolor(index){
				this.ind=index
				this.$emit('switchcategory',index)
			}
			
		},
		
	}
</script>

<style scoped="scoped">
	.category-small{
		line-height: 40px;
		height: 40px;
		display: flex;
		background-color: #f9f9f9;
		font-size: 18px;
	}
	.catspan{
		flex: 1;
		text-align: center;
	}
	.pin{
		padding: 5px;
		color: #ff9ec5;
		border-bottom: 2px solid #FF9EC5;
	}
</style>
