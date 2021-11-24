export default {
	addcare(context,product){
			 return new Promise((resolve,reject)=>{
			  let existence=context.state.cartlist.find(item=>product.iid==item.iid)
			 
			  if(existence){
				 context.commit('addsum',existence)
				 resolve('购物车此商品数量+1')
			  }
			  else{
			   context.commit('addexistence',product)
			   resolve('商品已添加到购物车')
			   }
			   })
	}
	
}