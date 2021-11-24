<template>
	<div class="goodslistitem" @click="detail">
		<div class="goodslistitemli">
			<img v-lazy="goodsimage" >
			<div class="goodslistitemtitle">
			<p>{{goodslist.title}}</p>
			<div class="goodslistitemspan">
			<span>￥:{{goodslist.price}}</span><!-- 价钱 -->
			<span>{{goodslist.cfav}}</span><!-- 收藏 -->
			</div>
			</div>
		</div>
	</div>
</template>
	
<script>
	export default{
		data(){
			return{
				noarray:[/^1m7crxi/,/^1m64qjg/,/^1m039te/,/^1m6wj4a/,/^1m6xfjw/]
			}
		},
		props:{
			goodslist:{
				type:Object,
				default(){
					return {}
					
				}
			}
		},
		methods:{
			detail(){
				if(this.noarray.some(value=>{
					return value.test(this.goodslist.iid)}))
					{
					this.$router.push('/null')
				}
				else{
				if(this.goodslist.iid!==undefined){
				this.$router.push('/details/'+(this.goodslist.iid || 'null')).catch(err=>{})
				}
				else{
					this.$router.push('/null')
				}
				}
			}
		},
		computed:{
			goodsimage(){
				return this.goodslist.img||this.goodslist.image || this.goodslist.show.img
			}
		}
	}
</script>

<style scoped="scoped">
	.goodslistitem{
		width: 50%;
		/* display: inline-block; */
		padding: 0;
		margin: 0;
	}
	.goodslistitemli{
		width: 100%;
		box-sizing: border-box;
		padding: 5px;
	}
	.goodslistitemli img{
		
		width: 100%;
		border-radius: 5px;
	}
	.goodslistitemtitle p{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		height: 18px;
		padding: 0;
		margin: 0;
	}
	.goodslistitemspan span:first-child{
		color: #F40;
		margin-right: 5px;
	}
	.goodslistitemspan{
		text-align: center;
	}
	.goodslistitemspan span:nth-child(2)::before{
		content:url(~@/assets/img/home/collection.svg);
		
	}
</style>
