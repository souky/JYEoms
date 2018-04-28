<template>
    <div class="patrol-look">
    	<inside-title :insideInfo="information"></inside-title>
    	<div class="lists-hull-common common-look">
    		<div class="look-return">
    			<router-link :to="{name:'versionList'}" class="a-none">
	    			<i class="icon-class ion-chevron-left"></i>
	    			<span>返回列表</span>
    			</router-link>
    		</div>
    		<el-row class="item-row">
    			<el-col :span="8">
    				<p class="title">设备类型：</p>
    				<p class="input">路由器</p>
    			</el-col>
    		</el-row>
    		<el-row class="item-row">
    			<el-col :span="8">
    				<p class="title">IP：</p>
    				<p class="input">黄忠柳</p>
    			</el-col>
    			<el-col :span="8">
    				<p class="title">子网掩码：</p>
    				<p class="input">2018-04-10</p>
    			</el-col>
    		</el-row>
    		<el-row class="item-row">
    			<el-col :span="8">
    				<p class="title">网关：</p>
    				<p class="input">255.255.255.5</p>
    			</el-col>
    			<el-col :span="8">
    				<p class="title">管理方式：</p>
    				<p class="input">绑定</p>
    			</el-col>
    		</el-row>
    		<el-row class="item-row">
    			<el-col :span="8">
    				<p class="title">账户：</p>
    				<p class="input">Admin</p>
    			</el-col>
    			<el-col :span="8">
    				<p class="title">密码：</p>
    				<p class="input">goldsun123</p>
    			</el-col>
    		</el-row>
    		<el-row class="item-row">
    			<el-col :span="8">
    				<p class="title">版本：</p>
    				<p class="input">V3.8</p>
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
	name: 'patrol-look',
	data(){
		return {
			information: {
				title: "问题反馈列表",
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