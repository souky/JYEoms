<template>
    <div class="resource-add">
    	<inside-title :insideInfo="information"></inside-title>
    	<div class="lists-hull-common common-look common-editor">
    		<div class="look-return">
    			<router-link :to="{name:'resourceList'}" class="a-none">
	    			<i class="icon-class ion-chevron-left"></i>
	    			<span>返回列表</span>
    			</router-link>
    		</div>
    		<el-row class="item-row">
    			<el-col :span="14">
    				<p class="title"><span class="red">*</span>标题：</p>
    				<p class="input">
    					<el-input ></el-input>
    				</p>
    			</el-col>
    		</el-row>
    		<el-row class="item-row">
    			<el-col :span="8">
    				<p class="title"><span class="red">*</span>产品线：</p>
    				<p class="input">
    					<el-select v-model="editorList.test">
    						<el-option
    						v-for="(item,index) in editorList.test1" 
    						:key="item"
      						:value="item">
    							{{item}}
    						</el-option>
    					</el-select>
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
    				<p class="input textarea">
                        <el-input
                          type="textarea"
                          :rows="4">
                        </el-input>            
                    </p>
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
	name: "resource-add",
	data(){
		return {
			information: {
				title: "资源共享列表",
				smallTitle: "新增",
			},
			fileList: [],
			editorList:{
				test: "产品甲",
				test1:["产品甲","产品乙","产品丙"],
				test2: "2017-10-10"
			}
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
	    },
        //取消修改
        cancel: function()
        {
            this.$router.go(-1);
        },
        //获取值
        getCheckedNodes: function() {
        	console.log(this.$refs.tree.getCheckedNodes());
        }
	}
}
</script>

<style rel="stylesheet" scoped>
.commonproblem-tree
{
	border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: .2s;
    padding: 20px;
}
</style>