<template>
    <div class="authentication-look">
    	<inside-title :insideInfo="information"></inside-title>
    	<div class="lists-hull-common common-look">
    		<div class="look-return">
    			<router-link :to="{name:'authenticationList'}" class="a-none">
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
                    <p class="title">操作人：</p>
                    <p class="input">屠丽娟</p>
                </el-col>
                <el-col :span="8">
                    <p class="title">操作时间：</p>
                    <p class="input">2018-04-10</p>
                </el-col>
            </el-row>
    		<el-row class="item-row">
    			<el-col :span="8">
    				<p class="title">设备ID：</p>
    				<p class="input">201802</p>
    			</el-col>
    			<el-col :span="8">
    				<p class="title">MAC地址：</p>
    				<p class="input">20180231</p>
    			</el-col>
    		</el-row>
    		<el-row class="item-row">
    			<el-col :span="8">
    				<p class="title">客户：</p>
    				<p class="input">金瑞英</p>
    			</el-col>
                <el-col :span="8">
                    <p class="title">条形码：</p>
                    <p class="input">6465135</p>
                </el-col>
    		</el-row>
            <el-row class="item-row">
                <el-col :span="8">
                    <p class="title">人脸识别：</p>
                    <p class="input">未激活</p>
                </el-col>
                <el-col :span="8">
                    <p class="title">制造商：</p>
                    <p class="input">-</p>
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
	name: 'authentication-look',
	data(){
		return {
			information: {
				title: "身份认证系统",
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