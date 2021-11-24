<template>
	<div class="navtop">
	<div  class="navtop-bag" v-for="item in recommend">
		<a :href="item.link">
			<img :src="item.image" >
			<div>{{item.title}}</div>
		</a>
	</div>
	</div>
</template>

<script>
	export default{
		props:['recommend'],
		
	}
</script>

<style scoped="scoped">
	.navtop{
		padding: 20px 0 30px 0;
		display: flex;
		width: 100%;
		border-bottom:solid 10px #eaeaea;
	}
	.navtop img{
		width: 80px;
		height: 80px;
		margin-bottom: 5px;
	}
	.navtop-bag{
		width: 100%;
		flex: 1;
		text-align: center;
	}
	.navtop-bag a{
	text-decoration: none;
	color: #2C3E50;
	}
	.navtop-bag div{
		font-weight: 500;
	}
</style>
