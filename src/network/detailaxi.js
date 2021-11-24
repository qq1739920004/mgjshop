import {
	request
} from 'network/request.js'
//详情页的数据
export function getdetail(iid) {
	return request({
		url: '/detail',
		params: {
			iid
		}
	})
}
//详情页里面推荐的数据，由于不同接口需要在写一个
export function getrecommend(){
	return request({
		url:'/recommend'
	})
}
export class Goods {
	constructor(itemInfo, columns, services) {
		this.title = itemInfo.title
		this.desc = itemInfo.desc
		this.newPrice = itemInfo.price
		this.oldPrice = itemInfo.oldPrice
		this.discount = itemInfo.discountDesc
		this.columns = columns
		this.services = services
		this.realPrice = itemInfo.lowNowPrice
	}
}
export class Shop {
	constructor(shopInfo) {
			this.logo = shopInfo.shopLogo;
			this.name = shopInfo.name;
			this.fans = shopInfo.cFans;
			this.sells = shopInfo.cSells;
			this.score = shopInfo.score;
			this.goodsCount = shopInfo.cGoods
			}
			}
export class GoodsParam{
	constructor(info,rule) {
	    this.image= info.image ? info.image[0]:'';
		this.infos=info.set;
		this.sizes=rule.tables;
	}
}
