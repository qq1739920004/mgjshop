import tp from 'components/contend/scrolltop/tp.vue'
export const mixintp={
	components:{
		tp
	},
	data(){
		return{
			isscroll:false//判断顶部按钮什么时候显示
		}
	},
	methods:{
		//点击返回顶部 
		tptop(){
			if(this.$refs.detailscroll){
			this.$refs.detailscroll.scrolltop(0,0,300)
			}
			else if(this.$refs.scr){
				this.$refs.scr.scrolltop(0,0,300)
			}
		},
	}
}