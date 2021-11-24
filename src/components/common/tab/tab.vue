<template>
	<div id="tab">
		<slot></slot>
	</div>
</template>



<style scoped="scoped">
	#tab{
		height: 49px;
		padding-top:10px;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		box-shadow: 0px -1px 0px rgba(100,100,100,0.1) ;
		background-color: #ffffff;
	}
</style>
