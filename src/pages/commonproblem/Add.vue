<template>
    <div class="commonproblem-add">
    	<inside-title :insideInfo="information"></inside-title>
    	<div class="lists-hull-common common-look common-editor">
    		<div class="look-return">
    			<router-link :to="{name:'commonProblemList'}" class="a-none">
	    			<i class="icon-class ion-chevron-left"></i>
	    			<span>返回列表</span>
    			</router-link>
    		</div>
    		<el-row class="item-row">
    			<el-col :span="24">
    				<p class="title"><span class="red">*</span>产品线：</p>
    				<p class="input">
    					<el-tabs v-model="activeName" class="add-tabs" type="card" @tab-click="handleClick">
						    <el-tab-pane label="作弊防控系统" name="first">
						    	<el-tree
								  :data="treeData"
								  show-checkbox
								  default-expand-all
								  node-key="value"
								  ref="tree"
								  highlight-current>
								</el-tree>
						    </el-tab-pane>
						    <el-tab-pane label="高清网上巡查系统" name="second">配置管理</el-tab-pane>
						    <el-tab-pane label="数字时钟同步系统" name="third">角色管理</el-tab-pane>
						    <el-tab-pane label="教育考试综合管理平台" name="fourth">定时任务补偿</el-tab-pane>
						    <el-tab-pane label="身份认证系统" name="fourth">定时任务补偿</el-tab-pane>
						</el-tabs>
    				</p>
    			</el-col>
    		</el-row>
    		<el-row class="item-row">
    			<el-col :span="24">
    				<p class="title"><span class="red">*</span>问题描述：</p>
    				<p class="input">
    					<el-input
						  type="textarea"
						  :rows="4">
						</el-input>
					</p>
    			</el-col>
    		</el-row>
    		<el-row class="item-row">
    			<el-col :span="24">
    				<p class="title"><span class="red">*</span>解决方案：</p>
    				<p class="input">
    					<el-input
						  type="textarea"
						  :rows="4">
						</el-input>
					</p>
    			</el-col>
    		</el-row>
    		<el-row class="item-row">
    			<el-col :span="24">
    				<p class="title">附件：</p>
    				<div class="upload-hull">
    					<el-upload
						  class="upload-demo"
						  ref="upload"
						  action="https://jsonplaceholder.typicode.com/posts/"
						  :on-preview="handlePreview"
						  :on-remove="handleRemove"
						  :file-list="fileList"
						  :auto-upload="false">
						  <el-button slot="trigger" size="small" plain>选取文件</el-button>
						  <el-button plain style="margin-left: 10px;" size="small" @click="submitUpload">上传</el-button>
						</el-upload>
    				</div>
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
    		<div class="editor-button">
    			<el-button type="primary">保存</el-button>
    			<el-button type="info" @click="cancel">取消</el-button>
    		</div>
    	</div>
    </div>
</template>

<script>
import InsideTitle from '@/components/InsideTitle'
export default {
	name: 'commonproblem-add',
	data(){
		return {
			information: {
				title: "问题反馈列表",
				smallTitle: "新增"
			},
			fileList: [],
			activeName:"first",
			treeData: [
				{
		          value: '巡查分发',
		          label: '巡查分发',
		          children: [{
			            value: 'V 1.0',
			            label: 'V 1.0'
			          },
			          {
			            value: 'V 2.0',
			            label: 'V 2.0'
			          }
		          ]
		        }, 
		        {
		          value: '管理服务器',
		          label: '管理服务器',
		          children: [{
		            value: '二级 2-1',
		            label: '二级 2-1'
		          }, {
		            value: '二级 2-2',
		            label: '二级 2-2'
		          }]
		        }
			],
		}
	},
	components: {
		"inside-title": InsideTitle
	},
	methods: {
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
	    },
	    //取消修改
        cancel: function()
        {
            this.$router.go(-1);
        },
        handleClick(tab, event) {
	        console.log(tab, event);
	    }
	}
}
</script>

<style rel="stylesheet" scoped>
.commonproblem-add .add-tabs .el-tabs__header
{
	margin-bottom: 0;
}
.commonproblem-add .add-tabs .el-tab-pane
{
    padding: 10px 20px;
}
</style>