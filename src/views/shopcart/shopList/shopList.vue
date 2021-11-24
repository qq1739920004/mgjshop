<template>
	<div id="shopList">
		
		<div class="list">
		<img @click="clikpink" class="shoptrue" :class="{clikcolor:list.ispink}" src="~assets/img/shopLIst/shoptrue.svg" >
		<img class="shopimg" :src="list.image" >
		<div class="font">
		<span >{{list.title.title}}</span>
		<span >{{list.desc}}</span>
		<span >￥:{{list.price}}</span>
		<button type="button" class="but1" @click="add">+</button>
		<span class="count">x{{list.count}}</span>
		<button type="button" class="but2" @click="reduce">-</button>
	</div>
	</div>
	</div>
</template>

<script>
	export default{
		name:'shopList',
		props:{
			list:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		
		methods:{
			clikpink(){
				this.list.ispink=!this.list.ispink
				// console.log(this.$store.state.cartlist)
			},
			add(){
				this.$store.commit('add',this.list)
			},
			reduce(){
				this.$store.commit('reduce',this.list)
			}
		}
	}
</script>

<style scoped="scoped">
	.list{
		width: 100%;
		height: 130px;
		position: relative;
		border-bottom: 1px solid #A2A2A2;
	}
	.shopimg{
		box-sizing: border-box;
		height: 100%;
		width: 90px;
		padding: 5px;
		border-radius: 13px;
		
		
	}
	.shoptrue{
		margin-left: 5px;
		width: 20px;
		height: 20px;
		border: 1px #9c9c9c solid;
		border-radius: 50%;
		margin-bottom: 55px;
	}
	.clikcolor{
		background-color:pink;
		border: 1px white solid;
	}
	.font{
		
		position: absolute;
		width:calc(100% - 30px);
		height: 130px;
		top: 10px;
		left: 120px;
		
	}
	.font :nth-child(1){
		padding-top: 5px;
		display: block;
		width:calc(100% - 110px);
		height: 22px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		font-size: 18px;
	}
	.font :nth-child(2){
		display: block;
		padding-top: 20px;
		width:calc(100% - 110px);
		color: #a8a8a8;
		font-size: 15px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.font :nth-child(3){
		display: block;
		position: absolute;
		bottom:20px;
		color: red;
	}
	.count{
		display: block;
		width: 20px;
		position: absolute;
		right:130px;
		bottom:20px;
	}
	.but1,.but2{
		width: 20px;
		height: 20px;
		
		
	}
	.but1{
		
		padding-right:17px ;
		padding-bottom:20px ;
		position: absolute;
		right:160px;
		bottom:20px;
		
	}
	.but2{
		padding-right:15px ;
		padding-bottom:20px ;
		
		position: absolute;
		right:100px;
		bottom:20px;
		
	}
	
</style>
