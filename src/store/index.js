import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'
Vue.use(Vuex)

const state={
	cartlist:[],
	maikey:"3627",//分类页面的右侧导航栏的id值
	miniWallkey:"10062603"
	}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})
