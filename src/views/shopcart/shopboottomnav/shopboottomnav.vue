<template>
	<div id="boottomnav">
		<div class="nav">
			<div class="truediv">
			<img  src="~assets/img/shopLIst/shoptrue.svg" @click="trueclik" :class="{issumpink:istotal}">
			<span>全选</span>
			<span class="sum">合计:</span>
			<span>{{pricesum}}</span>
			</div>
			
		</div>
		<div class="countsum">
			去计算:{{countsum}}
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				istotal:false
			}
		},
		methods:{
			trueclik(){
			this.$store.commit('reverse')
			}
		},
		watch:{
			//监听vuex里state的cartlistwct变化
			cartlistwct:{
				handler(newval,oldval){
					if( !this.$store.state.cartlist.some(item=>item.ispink==false)){
									 this.istotal=true
					}
					else{
						this.istotal=false
					}
				},
			immediate:true,
			deep:true
			},
		},
		computed:{
			//获取cartlist
			cartlistwct(){
				return this.$store.state.cartlist
			},
			pricesum(){
				return this.$store.state.cartlist.filter(item=>item.ispink).reduce((onval,sumval)=>{
					return onval+sumval.price*sumval.count
				},0).toFixed(2)
			},
			countsum(){
				return this.$store.state.cartlist.filter(item=>item.ispink).reduce((onval,sumval)=>{
					return onval+sumval.count
				},0)
			}
		}
	}
</script>

<style scoped="scoped">
	#boottomnav{
		height: 50px;
		display: flex;
		justify-content: space-between;
		background-color: #f4f6f7;
		position: relative;
		bottom:0px;
		font-size: 18px;
	}
	
	.truediv{
		margin-left: 15px;
		height: 50px;
		line-height: 50px;
		display: flex;
	}
	.truediv img{
		border: 1px #9c9c9c solid;
		border-radius: 50%;
		width: 20px;
		height: 20px;
		margin-top: 15px;
		margin-right: 5px;
	}
	.sum{
		margin-left: 30px;
	}
	.countsum{
		text-align: center;
		width: 120px;
		line-height: 50px;
		background-color: #ff7559;
	}
	.issumpink{
		background-color: pink;
	}
	
</style>
