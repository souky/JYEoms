<template>
    <div class="operation-look">
    	<inside-title :insideInfo="information"></inside-title>
    	<div class="lists-hull-common common-look">
    		<div class="look-return">
    			<router-link :to="{name:'operationList'}" class="a-none">
	    			<i class="icon-class ion-chevron-left"></i>
	    			<span>返回列表</span>
    			</router-link>
    		</div>
    		<el-row class="item-row">
    			<el-col :span="8">
    				<p class="title">维护产品：</p>
    				<p class="input">教育考试综合管理平台</p>
    			</el-col>
    			<el-col :span="8">
                    <p class="title">维护设备：</p>
                    <p class="input">作弊系统</p>
                </el-col>
    		</el-row>
            <el-row class="item-row">
                <el-col :span="8">
                    <p class="title">设备序列号：</p>
                    <p class="input">2018-04-10</p>
                </el-col>
                <el-col :span="8">
    				<p class="title">服务性质：</p>
    				<p class="input">上门维修</p>
    			</el-col>
            </el-row>
    		<el-row class="item-row">
    			<el-col :span="24">
    				<p class="title">故障现象：</p>
    				<p class="input">这里是故障现象</p>
    			</el-col>
    		</el-row>
    		<el-row class="item-row">
    			<el-col :span="24">
    				<p class="title">解决方案：</p>
    				<p class="input">这里是解决方案</p>
    			</el-col>
    		</el-row>
    		<el-row class="item-row">
                <el-col :span="8">
                    <p class="title">工程师姓名：</p>
                    <p class="input">小明</p>
                </el-col>
                <el-col :span="8">
                    <p class="title">工程师手机号：</p>
                    <p class="input">1778888888</p>
                </el-col>
    		</el-row>
            <el-row class="item-row">
                <el-col :span="8">
                    <p class="title">考点联系人：</p>
                    <p class="input">小王</p>
                </el-col>
                <el-col :span="8">
                    <p class="title">联系人手机号：</p>
                    <p class="input">1778888888</p>
                </el-col>
            </el-row>
            <el-row class="item-row">
                
                <el-col :span="8">
                    <p class="title">客户满意度：</p>
                    <p class="input">满意</p>
                </el-col>
            </el-row>
    		
    	</div>
    </div>
</template>

<script>
import InsideTitle from '@/components/InsideTitle'
export default {
	name: 'operation-look',
	data(){
		return {
			information: {
				title: "运维服务列表",
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