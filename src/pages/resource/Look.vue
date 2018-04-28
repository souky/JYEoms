<template>
    <div class="resource-look">
    	<inside-title :insideInfo="information"></inside-title>
    	<div class="lists-hull-common common-look">
    		<div class="look-return">
    			<router-link :to="{name:'resourceList'}" class="a-none">
	    			<i class="icon-class ion-chevron-left"></i>
	    			<span>返回列表</span>
    			</router-link>
    		</div>
    		<el-row class="item-row">
    			<el-col :span="24">
    				<p class="title">标题：</p>
    				<p class="input">作弊防控系统</p>
    			</el-col>
    		</el-row>
    		<el-row class="item-row">
    			<el-col :span="24">
    				<p class="title">涉及产品：</p>
    				<p class="input">巡查分发——V6.0</p>
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
	name: 'resource-look',
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