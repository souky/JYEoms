<template>
    <div class="users-look">
    	<inside-title :insideInfo="information"></inside-title>
    	<div class="lists-hull-common common-look">
    		<div class="look-return">
    			<router-link :to="{name:'usersList'}" class="a-none">
	    			<i class="icon-class ion-chevron-left"></i>
	    			<span>返回列表</span>
    			</router-link>
    		</div>
    		<el-row class="item-row">
    			<el-col :span="8">
    				<p class="title">角色：</p>
    				<p class="input">客户</p>
    			</el-col>
    			<el-col :span="8">
                    <p class="title">用户类型：</p>
                    <p class="input">普通用户</p>
                </el-col>
    		</el-row>
            <el-row class="item-row">
                <el-col :span="8">
                    <p class="title">姓名：</p>
                    <p class="input">兴化人</p>
                </el-col>
                <el-col :span="8">
    				<p class="title">账户姓名：</p>
    				<p class="input">xianghua</p>
    			</el-col>
            </el-row>
    		<el-row class="item-row">
    			<el-col :span="8">
    				<p class="title">邮箱：</p>
    				<p class="input">132@qq.com</p>
    			</el-col>
    			<el-col :span="8">
    				<p class="title">手机号码：</p>
    				<p class="input">1775121321</p>
    			</el-col>
    		</el-row>
    		<el-row class="item-row">
                <el-col :span="24">
                    <p class="title">所属机构：</p>
                    <p class="input">江苏省-泰州市-兴化市-兴化中学</p>
                </el-col>
    		</el-row>
            <el-row class="item-row">
                <el-col :span="24">
                    <p class="title">产品：</p>
                    <p class="input">高清网上巡查系统，身份认证系统</p>
                </el-col>
            </el-row>
            <el-row class="item-row">
                <el-col :span="24">
                    <p class="title">备注：</p>
                    <p class="input">这里是备注</p>
                </el-col>
            </el-row>
    		
    	</div>
    </div>
</template>

<script>
import InsideTitle from '@/components/InsideTitle'
export default {
	name: 'users-look',
	data(){
		return {
			information: {
				title: "用户管理列表",
				smallTitle: "详情"
			},
			list:{},
			fileList: []
		}
	},
	components: {
		"inside-title": InsideTitle
	},
	methods: {
		//显示信息
		// itemList: function(id) {
		// 	this.$axios.get("/lists/id="+id+"").then((response) => {
		// 		console.log(response);
		// 	})
		// }
		//
	}
}
</script>

<style rel="stylesheet" scoped>
    
</style>