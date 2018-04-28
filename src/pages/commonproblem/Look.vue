<template>
    <div class="commonproblem-look">
    	<inside-title :insideInfo="information"></inside-title>
    	<div class="lists-hull-common common-look">
    		<div class="look-return">
    			<router-link :to="{name:'commonProblemList'}" class="a-none">
	    			<i class="icon-class ion-chevron-left"></i>
	    			<span>返回列表</span>
    			</router-link>
    		</div>
    		<el-row class="item-row">
    			<el-col :span="24">
    				<p class="title">产品线：</p>
    				<p class="input">作弊防控系统</p>
    			</el-col>
    		</el-row>
    		<el-row class="item-row">
    			<el-col :span="24">
    				<p class="title">子产品线：</p>
    				<p class="input">巡查分发——V6.0</p>
    			</el-col>
    		</el-row>
    		<el-row class="item-row">
    			<el-col :span="24">
    				<p class="title">问题描述：</p>
    				<p class="input">测试时间</p>
    			</el-col>
    		</el-row>
    		<el-row class="item-row">
    			<el-col :span="24">
    				<p class="title">解决方案：</p>
    				<p class="input">测试时间</p>
    			</el-col>
    		</el-row>
    		<el-row  class="item-row">
    			<el-col :span="24">
    				<p class="title">附件列表：</p>
    				<table class="reply-table">
    					<thead>
    						<tr>
    							<th>附件名称</th>
    							<th>上传者</th>
    							<th>上传日期</th>
    							<th>操作</th>
    						</tr>
    					</thead>
    					<tbody>
    						<tr>
    							<td>运维.xls</td>
    							<td>黄忠柳</td>
    							<td>2018-04-18</td>
    							<td><a href="">下载</a></td>
    						</tr>
    					</tbody>
    				</table>
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
	name: 'commonproblem-look',
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
		//提交上传
		submitUpload: function(){
			this.$refs.upload.submit();
		},
		//点击已上传的文件链接时的钩子, 可以通过 file.response 拿到服务端返回数据
		handleRemove(file, fileList) {
        	console.log(file, fileList);
	    },
	    //文件列表移除文件时的钩子
	    handlePreview(file) {
	        console.log(file);
	    }
	}
}
</script>

<style rel="stylesheet" scoped>
    
</style>