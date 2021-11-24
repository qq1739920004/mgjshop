import Toast from './toast.vue'
const obj={}
obj.install=function(Vue){
	//创建组件构造器
	const toastconstructor=Vue.extend(Toast)
	//new的方式根据组件构造器创建出来一个组件对象
	const toast=new toastconstructor()
	//将组件手动挂载到某一个元素上
	toast.$mount(document.createElement('div'))
	//将挂载好的组件添加到body上
	document.body.appendChild(toast.$el)
	//创建Vue的原形对象
	Vue.prototype.$toast=toast
	
}
export default obj