<template>
    <div class="app-index">
    	<app-header :user="user" @logout="onLogout"></app-header>
    	<div class="app-main">
	    	<app-left></app-left>
	    	<div class="right" :style="{height: rightHeight}">
	    		<router-view v-cloak></router-view>
	    	</div>
    	</div>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Left from '@/components/Left'

export default {
	name: 'app-index',
	data(){
		return {
			user:{}
		}
	},
	components: {
		"app-header": Header,
		"app-left": Left
	},
	computed: {
		rightHeight() {
			return document.body.offsetHeight-80 + "px";
		}
	},
	methods: {
		//注销
		onLogout: function() {
			this.$store.dispatch("logout");
			this.$router.push({name: "Login"});
		},
		//获取一级分类 产品线
		category_one : function() {
			this.$axios.post('/api/user/queryProduct').then(response => {
				let res = response.data;
				if(res.code == "10000")
				{

					let arr = [];
					for(let i= 0; i< res.result.length;i++)
					{
						let entry = {
							value: res.result[i].id,
							label: res.result[i].productName,
						}
						arr.push(entry);
					}
					this.cascader_one = arr;
					this.$store.commit('setProdcut_line',this.cascader_one);
				}
				else
				{
					this.$message({
						showClose: true,
						message: '数据拉取失败! 错误代码 : Index-200 ',
						type: 'warning'
			        });
				}
			}).catch(error => {
				this.$message({
					showClose: true,
					message: '数据拉取失败! 错误代码 : Index-404 '+error,
					type: 'warning'
		        });
				console.log(error)
			})
		},
		//获取二级分类
		category_two : function(type,parentid) {
			let axiosData = new FormData();
			axiosData.append('type',type);
			axiosData.append('productId',parentid);
			this.$axios.post('/api/common/cheseScreen',axiosData).then( response => {
				//console.log(response.data.result);
				this.cascader_two = response.data.result;
			}).catch(error => {
				this.$message({
					showClose: true,
					message: '数据拉取失败! 错误代码 : Index-404 '+error,
					type: 'warning'
		        });
				console.log(error)
			})
			return this.cascader_two;
		}
	},
	created(){
		this.user= this.$store.getters.loginInfo;
		this.category_one()
	}

}
</script>

<style rel="stylesheet" scoped>
[v-cloak] {
    display: none;
}
.app-index
{
	width: 100%;
	height: 100%;
}
.right
{
	margin-left: 200px;
	padding: 0 20px 1px 0;
	overflow: auto;
}
.app-main
{
	width: 100%;
}
</style>