//登录
export const readinLogin = (context,data) => {
	context.commit("readinLogin",data);
}
//登出
export const logout = (context) => {
	context.commit("logout");
}
//列表
export const setDataList = (context,data) => {
	context.commit("setDataList",data);
}