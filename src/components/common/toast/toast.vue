<template>
	<div id="toast" v-show="isshow" :style="isshow?`opacity:${opacity}`:''">
		<div class="toastbox">
			{{message}}
		</div>
	</div>
</template>

<script>
	export default {

		data() {
			return {
				message: '哈哈哈哈哈哈',
				isshow: false,
				opacity: 1
			}
		},
		methods: {
			show(message) {
				let fam
				this.message = message
				this.isshow = true
				this.opacity=1
			fam=setInterval(() => {
					this.opacity-=0.01
					if(this.opacity<=0.1){
						this.isshow = false
						clearInterval(fam)
					}
				}, 10)
			}
		}
	}
</script>

<style scoped="scoped">
	.toastbox {
		white-space: nowrap;
		position: fixed;
		top: 50%;
		left: 50%;
		z-index: 999;
		background-color: rgba(0, 0, 0, 0.7);
		color: white;
		font-size: 20px;
		padding: 10px 12px;
		transform: translate(-50%, -50%);
	}
</style>
