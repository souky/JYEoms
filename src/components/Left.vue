<template>
    <div class="left" :style="{height: leftHeight}">
    	<nav class="navgition">
    		<ul class="ul-none">
    			<li>
    				<i class="icon-class ion-home"></i>
    				<router-link :to="{name:'Index'}">首页</router-link>
    			</li>
    			<li class="chilren">
    				<div class="nav-title"><i class="icon-class ion-help-circled"></i>问题反馈</div>
    				<router-link :to="{name:'problemList'}">问题反馈列表</router-link>
    			</li>
    			<li class="chilren">
    				<div class="nav-title"><i class="icon-class ion-ios-list-outline"></i>常见问题</div>
    				<router-link :to="{name:'commonProblemList'}">常见问题列表</router-link>
    			</li>
    			<li class="chilren">
    				<div class="nav-title"><i class="icon-class ion-ios-cloud"></i>资源共享</div>
    				<router-link :to="{name:'resourceList'}">资源共享列表</router-link>
    			</li>
    			<li class="chilren">
    				<div class="nav-title"><i class="icon-class ion-briefcase"></i>产品管理</div>
    				<router-link :to="{name:'productList'}">子产品管理</router-link>
    				<router-link :to="{name:'versionList'}">版本管理</router-link>
    			</li>
    			<li class="chilren">
    				<div class="nav-title"><i class="icon-class ion-monitor"></i>设备管理</div>
    				<router-link :to="{name:'patrolList'}">高清网上巡查系统</router-link>
    				<router-link :to="{name:'authenticationList'}">身份认证系统</router-link>
    			</li>
    			<li class="chilren">
    				<div class="nav-title"><i class="icon-class ion-monitor"></i>运维服务</div>
    				<router-link :to="{name:'operationList'}">运维服务列表</router-link>
    			</li>
    			<li class="chilren">
    				<div class="nav-title"><i class="icon-class ion-gear-b"></i>系统管理</div>
    				<router-link :to="{name:'usersList'}">用户管理</router-link>
    				<router-link :to="{name:'mechanism'}">机构管理</router-link>
    			</li>
    		</ul>
    	</nav>
    </div>
</template>

<script>
export default {
	name: "left",
    computed: {
        leftHeight: function() {
            return document.body.offsetHeight-80 + "px";
        }
    }
}
</script>

<style rel="stylesheet" scoped>
.left
{
	width: 200px;
	float: left;
	color: #FFFFFF;
    overflow: auto;
}
.left:before
{
	content: '';
	width: 200px;
	height: 100%;
	background-color: #545652;
	position: absolute;
	z-index: -1;
    top: 0;
    left: 0;
}
.left .navgition
{
	padding-top: 20px;
}
.left .navgition ul li a
{
	display: block;
	width: 100%;
	height: 32px;
	line-height: 32px;
	font-size: 14px;
	text-decoration: none;
}
.left .navgition ul li a:hover
{
	color: #2DB69C;
}
.left .navgition ul li .nav-title
{
	height: 32px;
	line-height: 32px;
	font-size: 16px;
    color: #ADADAD;
    background-color: #5B5D5A;
}
.left .navgition ul li .icon-class
{
	font-size: 21px;
	line-height: 32px;
	float: left;
	margin-right: 10px;
	margin-left: 15px;
}
.left .navgition ul li.chilren a
{
	padding-left: 42px;
}
.left .navgition ul li a.routes-active
{
    background-color: #2DB69C;
    color: #FFFFFF;
}
</style>