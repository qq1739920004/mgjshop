<template>
	<div class="navbar">
		<div class="left">
			<slot name="left"></slot>
		</div>
		<div class="center">
			<slot name="cent"></slot>
		</div>
		<div class="right">
			<slot  name="right"></slot>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.navbar{
		z-index: 9;
		display: flex;
		height: 44px;
		line-height: 44px;
		text-align: center;
		font-size: 20px;
		font-weight: 800;
	}
	.left,
	.right {
		width: 60px;
		
	}
	.center{
		flex: 1;
	}
	
</style>
