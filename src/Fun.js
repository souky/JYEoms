import Vue from 'vue'
import 'babel-polyfill'
import Axios from 'axios'
//vuex
import store from '@/store'
import {ElementUI} from 'element-ui'

export default {
	padLeftZero: function (str) {
	    return ('00' + str).substr(str.length);
	},
	//自定义过滤器时间格式化函数
	formatDate: function (date, fmt) {
	    if (/(y+)/.test(fmt)) {
	        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
	    }
	    var o = {
	        'M+': date.getMonth() + 1,
	        'd+': date.getDate(),
	        'h+': date.getHours(),
	        'm+': date.getMinutes(),
	        's+': date.getSeconds()
	    };
	    for (var k in o) {
	        if (new RegExp(`(${k})`).test(fmt)) {
	            var str = o[k] + '';
	            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : this.padLeftZero(str));
	        }
	    }
	    return fmt;
	},
	//获取二级分类
	category_two : function(type,parentid) {
		let axiosData = new FormData();
		axiosData.append('type',type);
		axiosData.append('productId',parentid);
		Axios.post('/api/common/cheseScreen',axiosData).then( response => {
			//console.log(response.data);
			if(response.data.code == "10000")
			{
				let arr = [];
				for(let i= 0; i< response.data.result.length;i++)
				{
					let entry = {
						value: response.data.result[i].id,
						label: response.data.result[i].subproductName,
					}
					arr.push(entry);
				}
				store.commit('setProdcut_chilren',arr);
			}
		}).catch(error => {
			console.log(error)
		})
	},
	//获取三级分类
	category_three : function(type,parentid) {

		let axiosData = new FormData();
		axiosData.append('type',type);
		axiosData.append('subProductId',parentid);
		Axios.post('/api/common/cheseScreen',axiosData).then( response => {

			if(response.data.code == "10000")
			{
				let arr = [];
				for(let i= 0; i< response.data.result.length;i++)
				{
					let entry = {
						value: response.data.result[i].id,
						label: response.data.result[i].versionName,
					}
					arr.push(entry);
				}
				store.commit('setProdcut_version',arr);
			}
		}).catch(error => {
			console.log(error)
		})
	},
	//获取省市区
	getRegion: function(type,id){
		let axiosData = new FormData();
		if(type == 4)
		{
			axiosData.append('areaId',id);
			Axios.post('/api/common/queryExamination',axiosData).then( response => {
				if(response.data.code == "10000")
				{
					let arr= [];
					for(let i= 0; i< response.data.result.length;i++)
					{
						let entry = {
							value: response.data.result[i].id,
							label: response.data.result[i].examinationName,
						}
						arr.push(entry);
					}
					store.commit('setRegion_kd',arr);
				}
			})
		}
		else
		{
			axiosData.append('type',type);
			axiosData.append('id',id);
			Axios.post('/api/common/changesExamination',axiosData).then(response => {
				if(response.data.code == "10000")
				{
					let arr= [];
					for(let i= 0; i< response.data.result.length;i++)
					{
						let entry = {
							value: response.data.result[i].id,
							label: response.data.result[i].regionName,
						}
						arr.push(entry);
					}
					if(type == 1)
					{
						store.commit('setRegion_sheng',arr);
					}
					else if(type == 2)
					{
						store.commit('setRegion_shi',arr);
					}
					else if(type == 3)
					{
						store.commit('setRegion_qu',arr);
					}
				}
			}).catch( error => {
				console.log(error);
			})
		}
	}
}
