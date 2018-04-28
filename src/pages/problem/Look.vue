<template>
    <div class="problem-look">
    	<inside-title :insideInfo="information"></inside-title>
    	<div class="lists-hull-common common-look">
    		<div class="look-return">
    			<router-link :to="{name:'problemList'}" class="a-none">
	    			<i class="icon-class ion-chevron-left"></i>
	    			<span>返回列表</span>
    			</router-link>
    		</div>
    		<el-row class="item-row">
    			<el-col :span="8">
    				<p class="title">产品线：</p>
    				<p class="input">{{list.productName}}</p>
    			</el-col>
    			<el-col :span="8">
    				<p class="title">子产品线：</p>
    				<p class="input">{{list.subproductName}}</p>
    			</el-col>
    			<el-col :span="8">
    				<p class="title">版本：</p>
    				<p class="input">{{list.versionName}}</p>
    			</el-col>
    		</el-row>
    		<el-row class="item-row">
    			<el-col :span="24">
    				<p class="title">概述：</p>
    				<p class="input">{{list.summary}}</p>
    			</el-col>
    		</el-row>
    		<el-row class="item-row">
    			<el-col :span="24">
    				<p class="title">详细描述：</p>
    				<p class="input">{{list.detailed}}</p>
    			</el-col>
    		</el-row>
    		<el-row class="item-row">
    			<el-col :span="8">
    				<p class="title">反馈人：</p>
    				<p class="input">{{list.contacts}}</p>
    			</el-col>
    			<el-col :span="8">
    				<p class="title">反馈机构：</p>
    				<p class="input">{{list .provinceName}}-{{list.cityName}}-{{list.areaName}}-{{list.examinationName}}</p>
    			</el-col>
    			<el-col :span="8">
    				<p class="title">反馈者电话：</p>
    				<p class="input">{{list.contactInformation}}</p>
    			</el-col>
    		</el-row>
    		<el-row class="item-row">
    			<el-col :span="8">
    				<p class="title">所属人：</p>
    				<p class="input">{{list.userName}}</p>
    			</el-col>
    			<el-col :span="8">
    				<p class="title">当前状态：</p>
    				<p class="input">
    					<span v-if="list.state==1">未处理</span>
	    				<span v-if="list.state==2">处理中</span>
	    				<span v-if="list.state==3">已解决</span>
	    				<span v-if="list.state==4">不予解决</span>
    				</p>
    			</el-col>
    			<el-col :span="8"></el-col>
    		</el-row>
    		<el-row class="item-row">
    			<el-col :span="8">
    				<p class="title">问题发现日期：</p>
    				<p class="input">{{list.findTime | formatTime}}</p>
    			</el-col>
    			<el-col :span="8">
    				<p class="title">更新日期：</p>
    				<p class="input">{{list.updateTime | formatTime}}</p>
    			</el-col>
    			<el-col :span="8"></el-col>
    		</el-row>
    		<el-row class="item-row">
    			<el-col :span="24">
    				<p class="title">历史回复：</p>
    				<div class="input historyReply">
                        <div v-for='item in list.prList'>
                            <p> 
                                <span>所属人: {{item.createUser}}</span>
                                <span>回复于: {{item.createTime | formatTime}}</span>
                                <i class="icon-class ion-trash-a reply-icon" @click="deleteReply(item.id)"></i>
                            </p>
                            <p> 
                                <span>{{item.replyContent}}</span>
                            </p>
                        </div>
                    </div>
    			</el-col>
    		</el-row>
    		<el-row class="item-row">
    			<el-col :span="24">
    				<p class="title">回复：</p>
    				<textarea class="reply" v-model="reply"></textarea>
    				<button type="button" @click="onReply" class="el-button el-button--primary reply-button">
    					<span>回复</span>
    				</button>
    			</el-col>
    		</el-row>
    		<el-row class="item-row">
    			<el-col :span="24">
    				<p class="title">附件：</p>
    				<div class="upload-hull">
    					<el-upload
						  class="upload-demo"
						  ref="upload"
						  action="/api/common/uploadFile"
						  :auto-upload="false"
                          :on-success="uploadFileSuccess"
                          >
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
    						<tr v-for="item in list.drList" :key="item.id">
    							<td>{{item.fileName}}</td>
    							<td>{{item.createUser}}</td>
    							<td>{{item.createTime | formatTime}}</td>
    							<td><a href="javascript:void(0)" @click="enclosureUpload(item.fileUrl,item.fileName)">下载</a></td>
    						</tr>
    					</tbody>
    				</table>
    			</el-col>
    		</el-row>
    		<el-row class="item-row">
    			<el-col :span="24">
    				<p class="title">备注：</p>
    				<p class="input">{{list.remarks}}</p>
    			</el-col>
    		</el-row>
    	</div>
    </div>
</template>

<script>
/**
 * list     产品内容
 * reply    回复
 * 
*/
import InsideTitle from '@/components/InsideTitle'
export default {
	name: 'problem-look',
	data(){
		return {
			information: {
				title: "问题反馈列表",
				smallTitle: "详情"
			},
			list:{},
			fileList: [],
            reply: ''
		}
	},
	components: {
		"inside-title": InsideTitle
	},
	methods: {
		//显示信息
		showList: function() {
            let axiosData = new FormData();
            axiosData.append('id',this.$route.params.id);
            this.$axios.post('/api/problemFeedback/selecttProblemFeedbackMessage',axiosData).then(response => {
                if(response.data.code == "10000")
                {
                    this.list = response.data.result;
                }
                else
                {
                    this.$message({
                        showClose: true,
                        message: '数据拉取失败! 错误代码 : PROBLEM-LOOK-200',
                        type: 'warning'
                    });
                }
            }).catch(error => {
                this.$message({
                    showClose: true,
                    message: '数据拉取失败! 错误代码 : PROBLEM-LOOK-404 '+error,
                    type: 'warning'
                });
                console.log(error)
            })
        },
		//提交上传
		submitUpload: function(){
			this.$refs.upload.submit();
		},
        //文件上传成功
        uploadFileSuccess: function (response, file, fileList) {
            //console.log(file);
            let axiosData = new FormData();
            let arr = [{
                "fileName": response.result.fileName,
                "fileUrl": response.result.fileUrl
            }];
            this.fileList.push({
                "name": response.result.fileName,
            });
            let arr_url = JSON.stringify(arr);
            axiosData.append('url',arr_url);
            axiosData.append('id',this.list.id);
            this.$axios.post('/api/problemFeedback/insertUrl',axiosData).then(response => {
                if(response.data.code == "10000")
                {
                    this.showList();
                }
            })
        },
        //文件下载
        enclosureUpload(file,name) {
            window.open("/api/common/downFile?pathName="+file+"&fileName="+name)
        },
        //点击回复
        onReply: function () {
            if(this.reply)
            {
                let axiosData = new FormData();
                axiosData.append('replyContent',this.reply);
                axiosData.append('problemFeedbackId',this.list.id);
                this.$axios.post('/api/problemFeedback/saveProblemResponse',axiosData).then( response => {
                    if(response.data.code == "10000")
                    {
                        this.reply = '';
                        this.$message({
                            showClose: true,
                            message: '回复成功！',
                            type: 'success'
                        });
                        this.showList();
                    }
                    else
                    {
                        this.$message({
                            showClose: true,
                            message: '回复失败! : PROBLEM-LOOK-200',
                            type: 'warning'
                        });
                    }
                }).catch(error => {
                    console.log(error);
                })
            }
            else
            {
                this.$message({
                    showClose: true,
                    message: '请填写回复内容！再点击回复',
                    type: 'warning'
                });
            }
        },
        //删除回复
        deleteReply: function(id) {
            this.$confirm('是否要删除此条回复?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                let axiosData = new FormData();
                axiosData.append('id',id);
                this.$axios.post('/api/problemFeedback/deleteProblemResponse',axiosData).then(response => {
                    if(response.data.code == '10000')
                    {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        this.showList();
                    }
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            });
        }
	},
    created() {
        this.showList();
    }
}
</script>

<style rel="stylesheet" scoped>
    
</style>