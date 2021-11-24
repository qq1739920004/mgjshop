<template>
	<div id='detailgoods' v-if="Object.keys(goods).length !==0">
		<div class="dgoods-title">{{goods.title}}</div>
		<div class="dgoods-price">
			<span class="n-price">{{goods.newPrice}}</span>
			<span class="o-price">{{goods.oldPrice}}</span>
			<span v-if="goods.discount" class="discount">{{goods.discount}}</span>
		</div>
		<div class="dgoods-other">
			<span>{{goods.columns[0]}}</span>
			<span>{{goods.columns[1]}}</span>
			<span>{{goods.services[goods.services.length-1].name}}</span>
		</div>
		<div class="dgoods-service">
			<span class="dgoods-service-item" v-for="index in goods.services.length-1" :key="index">
			<img :src="goods.services[index-1].icon" >
			<span>{{goods.services[index-1].name}}</span>
			</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'detailgoods',
		props:{
			goods:{
				type:Object,
				default(){
					return {}
				}
			}
		},
	}
</script>

<style scoped="scoped">
	#detailgoods{
		margin-top: 15px;
		padding: 0 10px;
		color: #2C3E50;
		border-bottom: 5px solid #f2f5f8;
	}
	.dgoods-title{
		color: #2C3E50;
		font-size: 18px;
	}
	.dgoods-price{
		margin-top: 10px;
	}
	.dgoods-price .n-price{
		font-size: 24px;
		color:red;
	}
	.dgoods-price .o-price{
		font-size: 13px;
		margin-left: 5px;
		text-decoration:line-through ;
	}
	 .dgoods-price .discount{
		 font-size: 12px;
		 padding: 2px 5px;
		 color:white ;
		 background-color: #ff557f;
		 border-radius: 8px;
		 margin-left: 5px;
		 position: relative;
		 top: -8px;
	 }
	 .dgoods-other{
		 margin-top: 15px;
		 line-height: 30px;
		 display: flex;
		 font-size: 15px;
		 color: #a2a2a2;
		 border-bottom: 2px solid rgba(100,100,100,.1);
		 justify-content: space-between;
	 }
	 .dgoods-service{
		 display: flex;
		 justify-content: space-between;
		 line-height: 60px;
	 }
	 .dgoods-service-item img{
		 width:14px;
		 height: 14px;
		 position: relative;
		 top: 2px;
	 }
	 .dgoods-service-item span{
		 font-size: 14px;
		 color: #3f3f3f;
	 }
	   
</style>
