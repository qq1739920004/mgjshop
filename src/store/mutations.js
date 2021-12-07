export default {
	addsum(state,num){
		 num.count+=1
	// console.log(state.cartlist);
	  },
	  addexistence(state,num){
		  state.cartlist.push(num)
		  // console.log(state.cartlist);
	  },
	  //增加商品数量
	  add(state,list){//list是那个购物车商品标题价格之类的数据对象
		const index=state.cartlist.indexOf(list)
		state.cartlist[index].count+=1
	  },
	   //减少商品数量
	  reduce(state,list){
		  const index=state.cartlist.indexOf(list)
		  state.cartlist[index].count-=1
      if(state.cartlist[index].count<0){
        state.cartlist.splice(index,1)
        console.log(state.cartlist);
      }
	  },
	  //全选按钮点击触发
	  reverse(state){
		  //吧没选的全选
		  if( state.cartlist.some(item=>item.ispink==false)){
				 state.cartlist.map(item=>item.ispink=true)
				
		  }
		  //如果全选了则全不选
		  else{
			  state.cartlist.map(item=>item.ispink=false)
			
		  }
		 
	  },
	  //分类页面的右侧显示数据的id
	    maiKey(state,payload){
	  state.maikey=payload.maitkey
	  state.miniWallkey=payload.miniwallkey
	  }
}