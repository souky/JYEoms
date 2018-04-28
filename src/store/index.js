import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from '@/store/actions'
import * as getters from '@/store/getters'
import * as mutations from '@/store/mutations'


Vue.use(Vuex)
/**
 * state 
 * validate		登录验证
 * dataList		列表数据
 * product_line 产品线树
 */
export default new Vuex.Store({
	state: {
		validate: {},
		dataList: {},
		product_line: [], //产品
		product_chilren: [],  //子产品
		prodcut_version: [],  //版本
		region_sheng: [], //省
		region_shi: [], //市
		region_qu: [], //区
		region_kd: [] //考点
	},
	getters,
	mutations,
	actions
})

