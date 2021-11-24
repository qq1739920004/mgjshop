import {request} from 'network/request.js';

export function categoryajx(){
	return request({
		url:'/category'
	})
}

export function categoryajxrigth(maitKey){
	return request({
		url:'/subcategory',
		params:{
			maitKey
		}
		
	})
}
export function categoryajxrigthboottom(miniWallkey,type){
	return request({
		url:'/subcategory/detail',
		params:{
			miniWallkey,
			type
		}
		
	})
}


	
