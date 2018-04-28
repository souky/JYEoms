<template>
    <div class="app-header">
    	<div class="loginimg">
    		<img :src="loginImg" />
    		<h1>{{title}}</h1>
    	</div>
    	<div class="login-info">
    		<img src="/static/img/u44.png"  v-popover:popover1 class="login-info-img"/>
    		<span class="username">{{user.userName}}</span>
    		<span class="logout" @click="logout">退出</span>
    		<el-popover ref="popover1" placement="bottom" width="200" trigger="click">
    			<div class="user-popover">
	    			<div class="item">姓名：{{user.name}}</div>
	    			<div class="item">角色权限：{{user.roleauthority}}</div>
	    			<div class="item">本次登录：</div>
	    			<div class="item">个人资料：
	    				<el-button @click="dialog=true">查看</el-button>
	    				<el-button @click="dialog1=true">编辑</el-button>
	    			</div>
    			</div>
    		</el-popover>
    		<!--查看个人资料-->
    		<el-dialog :visible.sync="dialog" top="auto">
    			<div slot="title">
	    			<el-breadcrumb separator-class="el-icon-arrow-right">
					  <el-breadcrumb-item>个人资料</el-breadcrumb-item>
					  <el-breadcrumb-item>详情</el-breadcrumb-item>
					</el-breadcrumb>
				</div>
    			<table class="dialog-table">
    				<tr>
    					<td>用户:</td>
    					<td>{{user.userName}}</td>
    				</tr>
    				<tr>
    					<td>姓名:</td>
    					<td>{{user.name}}</td>
    				</tr>
    				<tr>
    					<td>角色权限:</td>
    					<td>{{user.roleauthority}}</td>
    				</tr>
    				<tr>
    					<td>手机号码:</td>
    					<td>{{user.iphone}}</td>
    				</tr>
    				<tr>
    					<td>电子邮件:</td>
    					<td>{{user.email}}</td>
    				</tr>
    				<tr>
    					<td>备注:</td>
    					<td><div class="remarks">{{user.remarks}}</div></td>
    				</tr>
    			</table>
    			<div class="button">
    				<el-button type="primary" @click="dialog = false">关 闭</el-button>
    			</div>
    		</el-dialog>
    		<!--查看个人资料-->
    		<el-dialog :visible.sync="dialog1" top="auto">
    			<div slot="title">
	    			<el-breadcrumb separator-class="el-icon-arrow-right">
					  <el-breadcrumb-item>个人资料</el-breadcrumb-item>
					  <el-breadcrumb-item>编辑</el-breadcrumb-item>
					</el-breadcrumb>
				</div>
    			<table class="dialog-table">
    				<tr>
    					<td>用户:</td>
    					<td><el-input size="small" v-model="user.userName" :disabled="true"></el-input></td>
    				</tr>
    				<tr>
    					<td>姓名:</td>
    					<td><el-input size="small" v-model="user.name"></el-input></td>
    				</tr>
    				<tr>
    					<td>角色权限:</td>
    					<td><el-input size="small" v-model="user.roleauthority"></el-input></td>
    				</tr>
    				<tr>
    					<td>手机号码:</td>
    					<td><el-input size="small" v-model="user.iphone"></el-input></td>
    				</tr>
    				<tr>
    					<td>电子邮件:</td>
    					<td><el-input size="small" v-model="user.email"></el-input></td>
    				</tr>
    				<tr>
    					<td>备注:</td>
    					<td><el-input size="small" v-model="user.remarks"></el-input></td>
    				</tr>
    			</table>
    			<div class="button">
	    			<el-button type="primary" @click="dialog1 = false">保 存</el-button>
	    			<el-button type="info" @click="dialog1 = false">关 闭</el-button>
    			</div>
    		</el-dialog>
    	</div>
    </div>
</template>

<script>
export default {
	name: 'app-header',
	props: {
		user: {
			type: Object
		}
	},
	data(){
		return {
			title: '金阳运维管理系统',
			loginImg: '/static/img/u5089.png',
			dialog: false,
			dialog1: false
		}
	},
	methods: {
		logout() {
			this.$emit("logout");
		}
	}
}
</script>

<style rel="stylesheet" scoped>
.app-header
{
	width: 100%;
	height: 80px;
	background-color: #545652;
}
.app-header .loginimg
{
	float: left;
	width: 300px;
}
.app-header .loginimg img
{
	margin: 10px 10px 0 20px;
	float: left;
}
.app-header .loginimg  h1
{
	font-size: 25px;
	font-weight: normal;
    color: #FFFFFF;
    line-height: 38px;
    margin-top: 20px;
    float: left;
}
.app-header .login-info
{
	width: 400px;
	line-height: 80px;
	float: right;
	color: #FFFFFF;
}
.app-header .login-info .login-info-img
{
	width: 46px;
	height: 40px;
	margin: 20px 10px 0px 20px;
	float: left;
	cursor: pointer;
}
.app-header .login-info span
{
	font-size: 16px;
}
.app-header .login-info  span.el-breadcrumb__item
{
	font-size: 14px;
}
.app-header .login-info .logout
{
	padding-left: 45px;
	cursor: pointer;
}
.app-header .login-info .logout:hover
{
	text-decoration: underline;
	color: #2DB69C;
}
.app-header .login-info .el-breadcrumb
{
	
	height: 50px;
	line-height: 50px;
	padding-left: 10px;
    width: 100%;
    border-bottom: 1px solid #ADADAD;
}
.user-popover
{
	padding: 5px 10px 0px;
}
.user-popover .item
{
	line-height: 30px;
	border-bottom: 1px solid #D9D9D9;
	margin-bottom: 10px;
}
.user-popover .item .el-button
{
	display: inline;
	padding: 0;
	border: 0;
	margin-left: 5px;
	color: #337ab7;
}
.personal-dialog
{
	width: 300px;
	height: 400px;
}
/*个人资料*/
.dialog-table
{
	width: 100%;
	margin-top: 20px;
}
.dialog-table tr td
{
	padding-bottom: 10px;
}
.dialog-table tr td:first-child
{
	width: 105px;
	line-height: 30px;
	text-align: right;
	padding-right: 10px;
}
.login-info .el-dialog__wrapper .button .el-button
{
	width: 110px;
	height: 34px;
	line-height: 34px;
	padding: 0;
	margin: 12px 10px 0 0 ;
}
.login-info .el-dialog__wrapper .button
{
	text-align: center;
	padding-left: 20px;
}
.remarks
{
    white-space: nowrap;
    overflow-x: auto;
    width: 175px;
}
</style>