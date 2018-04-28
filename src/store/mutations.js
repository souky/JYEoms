//登录状态
export const readinLogin = (state,data) => {
	state.validate= data;
}
//登出状态
export const logout = (state) => {
	state.validate= {};
	sessionStorage.removeItem("goldsun-userInfo");
}
//修改问题反馈列表
export const setDataList = (state,data) => {
	state.dataList= data;
}

//录入一级分类 产品线
export const setProdcut_line = (state,data) => {
	state.product_line= data;
}
//录入二级分类 子产品线
export const setProdcut_chilren = (state,data) => {
	state.product_chilren= data;
}
//置空
export const unProdcut_chilren = (state) => {
	state.product_chilren= [];
}
//录入三级分类 版本
export const setProdcut_version = (state,data) => {
	state.prodcut_version= data;
}
//置空
export const unProdcut_version = (state) => {
	state.prodcut_version= [];
}


//省
export const setRegion_sheng = (state,data) => {
	state.region_sheng= data;
}
//市
export const setRegion_shi = (state,data) => {
	state.region_shi= data;
}
export const unRegion_shi = (state) => {
	state.region_shi= [];
}
//区
export const setRegion_qu = (state,data) => {
	state.region_qu= data;
}
export const unRegion_qu = (state) => {
	state.region_qu= [];
}
//考点
export const setRegion_kd = (state,data) => {
	state.region_kd= data;
}
export const unRegion_kd = (state) => {
	state.region_kd= [];
}