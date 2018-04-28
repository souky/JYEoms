//登录状态获取
export const loginInfo = (state) => {
	return state.validate;
}
//列表获取
export const getDataList = (state) => {
	return state.dataList;
}
//获取一级分类 产品线
export const getProduct_line = (state) => {
	return state.product_line;
}
//获取二级分类 子产品线
export const getProduct_chilren = (state) => {
	return state.product_chilren;
}
//获取三级分类 版本
export const getProdcut_version = (state) => {
	return state.prodcut_version;
}
//获取省
export const getRegion_sheng = (state) => {
	return state.region_sheng;
}
//获取市
export const getRegion_shi = (state) => {
	return state.region_shi;
}
//获取区
export const getRegion_qu = (state) => {
	return state.region_qu;
}
//获取区
export const getRegion_kd = (state) => {
	return state.region_kd;
}