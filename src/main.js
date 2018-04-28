// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'babel-polyfill'
import Axios from 'axios'
//vuex
import store from '@/store'
//element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//路由设置
import App from './App'
import router from './router'

//公共函数库
import Funs from './Fun'


//Axios.defaults.baseURL = 'http://localhost:8080'
//Axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.prototype.$axios = Axios
Vue.config.productionTip = false



Vue.prototype.Funs = Funs;

Vue.use(ElementUI)

//自定义过滤器时间格式化
Vue.filter('formatTime',function(time){
	if(time)
	{
		let date = new Date(time);
	    return Funs.formatDate(date, "yyyy-MM-dd");
    }
})

//登录状态
router.beforeEach((to, from ,next) => {
	
	if(sessionStorage.getItem("goldsun-userInfo"))
	{
		if(!store.getters.loginInfo.isLogin)
		{
			let userInfoObject = JSON.parse(sessionStorage.getItem("goldsun-userInfo"));
			let arrLogin = {
				"userName": userInfoObject.userName,
				"isLogin": userInfoObject.isLogin
			}
			store.dispatch("readinLogin",arrLogin);
		}
		next();
	}
	else
	{
		if(to.name != "Login")
		{
			router.push({name:'Login'})
		}
		next();
	}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
