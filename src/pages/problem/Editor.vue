<template>
    <div class="problem-editor">
    	<inside-title :insideInfo="information"></inside-title>
    	<div class="lists-hull-common common-look common-editor">
    		<div class="look-return">
    			<a href="javascript:void(0)" @click="cancel" class="a-none">
	    			<i class="icon-class ion-chevron-left"></i>
	    			<span>返回列表</span>
    			</a>
    		</div>
    		<el-row class="item-row">
    			<el-col :span="8">
    				<p class="title"><span class="red">*</span>产品线：</p>
    				<p class="input">
    					<el-select v-model="nowList.productName" @change= "categoryGetLine(1,nowList.productName)">
    						<el-option
    						v-for="item in productLine"
                            :key="item.value" 
    						:label="item.label"
      						:value="item.value">
    						</el-option>
    					</el-select>
    				</p>
    			</el-col>
    			<el-col :span="8">
    				<p class="title"><span class="red">*</span>子产品线：</p>
    				<p class="input">
    					<el-select v-model="nowList.subproductName" @change= "categoryGetChilren(2,nowList.subproductName)">
    						<el-option
                             no-match-text = false
    						v-for="item in productChilren" 
    						:key="item.value"
                            :label="item.label"
      						:value="item.value">
    						</el-option>
    					</el-select>
    				</p>
    			</el-col>
    			<el-col :span="8">
    				<p class="title"><span class="red">*</span>版本：</p>
    				<p class="input">
    					<el-select v-model="nowList.versionName">
    						<el-option
    						v-for="item in productVersion" 
    						:key="item.value"
                            :label="item.label"
      						:value="item.value">
    						</el-option>
    					</el-select>
    				</p>
    			</el-col>
    		</el-row>
    		<el-row class="item-row">
    			<el-col :span="24">
    				<p class="title"><span class="red">*</span>概述：</p>
    				<p class="input">
    					<el-input v-model="nowList.summary"></el-input>
    				</p>
    			</el-col>
    		</el-row>
    		<el-row class="item-row">
    			<el-col :span="24">
    				<p class="title"><span class="red">*</span>详细描述：</p>
    				<p class="input">
    					<el-input
						  type="textarea"
						  :rows="4" v-model="nowList.detailed">
						</el-input>
					</p>
    			</el-col>
    		</el-row>
    		<el-row class="item-row">
    			<el-col :span="24">
    				<p class="title">反馈机构：</p>
    				<el-col :span="8">
    					<p class="smalltitle"><span class="red">*</span>省</p>
	    				<p class="input">
	    					<el-select v-model="nowList.provinceName" @change="getSheng(2,nowList.provinceName)">
                                <el-option
                                v-for="item in getRegion_sheng" 
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
	    					</el-select>
	    				</p>
    				</el-col>
    				<el-col :span="8">
    					<p class="smalltitle"><span class="red">*</span>市</p>
	    				<p class="input">
	    					<el-select v-model="nowList.cityName" @change="getShi(3,nowList.cityName)">
	    						<el-option
                                v-for="item in getRegion_shi" 
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
	    					</el-select>
	    				</p>
    				</el-col>
    			</el-col>
    		</el-row>
    		<el-row class="item-row">
    			<el-col :span="24">
    				<p class="title"></p>
    				<el-col :span="8">
    					<p class="smalltitle"><span class="red">*</span>区</p>
	    				<p class="input">
	    					<el-select v-model="nowList.areaName" @change="getQu(4,nowList.areaName)">
	    						<el-option
                                v-for="item in getRegion_qu" 
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
	    					</el-select>
	    				</p>
    				</el-col>
    				<el-col :span="8">
    					<p class="smalltitle"><span class="red">*</span>考点</p>
	    				<p class="input">
	    					<el-select v-model="nowList.examinationName">
	    						<el-option
                                v-for="item in getRegion_kd" 
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
	    					</el-select>
	    				</p>
    				</el-col>
    			</el-col>
    		</el-row>
    		<el-row class="item-row">
    			<el-col :span="8">
    				<p class="title"><span class="red">*</span>反馈人：</p>
    				<p class="input">
    					<el-input v-model="nowList.contacts"></el-input>
    				</p>
    			</el-col>
    			<el-col :span="8">
    				<p class="title"><span class="red">*</span>反馈者电话：</p>
    				<p class="input"><el-input v-model="nowList.contactInformation"></el-input></p>
    			</el-col>
    			<el-col :span="8"></el-col>
    		</el-row>
    		<el-row class="item-row">
    			<el-col :span="8">
    				<p class="title"><span class="red">*</span>指派给：</p>
    				<p class="input">
    					<el-select v-model="nowList.userName">
    						<el-option
    						v-for="(item,index) in nowList.test1" 
    						:key="item"
      						:value="item">
    							{{item}}
    						</el-option>
	    				</el-select>
    				</p>
    			</el-col>
    			<el-col :span="8">
    				<p class="title"><span class="red">*</span>发现问题日期：</p>
    				<p class="input">
    					<el-date-picker
					      v-model="nowList.findTime"
					      type="date"
					      placeholder="选择日期">
					    </el-date-picker>
    				</p>
    			</el-col>
    			<el-col :span="8">
    				<p class="title">当前状态：</p>
    				<p class="input">
    					<el-select v-model="nowList.state">
    						<el-option
    						v-for="item in productState" 
    						:key="item.value"
                            :label="item.label"
      						:value="item.value">
    						</el-option>
	    				</el-select>
    				</p>
    			</el-col>
    			<el-col :span="8"></el-col>
    		</el-row>
    		<el-row class="item-row">
    			<el-col :span="24">
    				<p class="title">附件：</p>
    				<div class="upload-hull">
    					<el-upload
						  class="upload-demo"
						  ref="upload"
						  action="/api/common/uploadFile"
                          :on-remove="handleRemove"
                          :file-list="fileList"
                          :auto-upload="false"
                          :on-success="uploadFileSuccess">
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
    						<tr v-for="(item,index) in nowList.drList" :key="item.id">
    							<td>{{item.fileName}}</td>
                                <td>{{item.createUser}}</td>
                                <td>{{item.createTime | formatTime}}</td>
    							<td>
                                    <a href="javascript:void(0)" @click="enclosureUpload(item.fileUrl,item.fileName)">下载</a>
                                    <a href="javascript:void(0)" @click="deleteFile(index,item.id)">删除</a>
                                </td>
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
                          :rows="4" v-model="nowList.remarks">
                        </el-input>            
                    </p>
    			</el-col>
    		</el-row>
    		<div class="editor-button">
    			<el-button type="primary" @click="saveData">保存</el-button>
    			<el-button type="info" @click="cancel">取消</el-button>
    		</div>
    	</div>
    </div>
</template>

<script>
import InsideTitle from '@/components/InsideTitle'
export default {
	name: 'problem-editor',
	data(){
		return {
			information: {
				title: "问题反馈列表",
				smallTitle: "编辑"
			},
            list: {},
			nowList:{},
            fileList: [],
            fileUrl: [],
            fileDeteleUrl: "",
            isSave: false
		}
	},
	components: {
		"inside-title": InsideTitle
	},
    computed:{
        //获取产品线
        productLine: function() {
            return this.$store.getters.getProduct_line;
        },
        //获取子产品线
        productChilren: function() {  
            return this.$store.getters.getProduct_chilren;
        },
        //获取版本
        productVersion: function() {
            return this.$store.getters.getProdcut_version;
        },
        //省
        getRegion_sheng: function() {
            return this.$store.getters.getRegion_sheng;
        },
        //市
        getRegion_shi: function() {
            return this.$store.getters.getRegion_shi;
        },
        //区
        getRegion_qu: function() {
            return this.$store.getters.getRegion_qu;
        },
        //考点
        getRegion_kd: function() {
            return this.$store.getters.getRegion_kd;
        },
        productState: function() {
            let arr = [
                {value: 1,label:"未处理"},
                {value: 2,label:"处理中"},
                {value: 3,label:"已解决"},
                {value: 4,label:"不予解决"}
            ]
            return arr;
        }
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
                    //加载默认tree
                    this.categoryGetLine(1,this.list.productId);
                    this.categoryGetChilren(2,this.list.subproductId);
                    //获取地区
                    this.Funs.getRegion(1); //省
                    this.Funs.getRegion(2,this.list.provinceId); //市
                    this.Funs.getRegion(3,this.list.cityId); //区
                    this.Funs.getRegion(4,this.list.areaId); //考点
                    return response.data.result;
                }
                else
                {
                    this.$message({
                        showClose: true,
                        message: '数据拉取失败! 错误代码 : PROBLEM-LOOK-200',
                        type: 'warning'
                    });
                }
            }).then((res)=>{
                //默认值
                this.nowList =Object.assign({},res);
            }).catch(error => {
                this.$message({
                    showClose: true,
                    message: '数据拉取失败! 错误代码 : PROBLEM-LOOK-404 '+error,
                    type: 'warning'
                });
                console.log(error)
            })
        },
        //取消修改
        cancel: function()
        {
            this.$router.push({name: 'problemList'});
        },
        //获取产品ID 加载子产品
        categoryGetLine: function (typeid,id) {
            this.$store.commit('unProdcut_version'); //清除版本
            this.nowList.subproductName= '';
            this.nowList.versionName= '';
            this.Funs.category_two(typeid,id);
        },
        //获取子产品ID 加载版本
        categoryGetChilren: function (typeid,id) {
            this.nowList.versionName= '';
            this.Funs.category_three(typeid,id);
        },
        //反馈机构
        //获取省ID,加载市
        getSheng: function (typeid,id) {
            this.$store.commit('unRegion_qu'); //清除区,考点
            this.$store.commit('unRegion_kd'); 
            this.nowList.cityName='';
            this.nowList.areaName='';
            this.nowList.examinationName='';
            this.Funs.getRegion(typeid,id); //市
        },
        //获取市ID,加载区
        getShi: function (typeid,id) {
             this.$store.commit('unRegion_kd'); //清除考点
            this.nowList.areaId='';
            this.nowList.examinationName='';
            this.Funs.getRegion(typeid,id); //区
        },
        //获取区ID,加载考点
        getQu: function (typeid,id) {
            this.nowList.examinationName='';
            this.Funs.getRegion(typeid,id); //考点
        },

        //文件提交上传
        submitUpload: function(){
            this.$refs.upload.submit();
        },
        //文件上传成功
        uploadFileSuccess: function (response, file, fileList) {
            let arr = {
                "fileName": response.result.fileName,
                "fileUrl": response.result.fileUrl
            };
            this.fileUrl.push(arr);
        },
        //文件列表移除文件时的钩子
        handleRemove(file, fileList) {
            this.fileUrl= this.fileUrl.filter(item => {
                return item.fileName != file.name;
            })
        },
        //文件下载
        enclosureUpload(file,name) {
            window.open("/api/common/downFile?pathName="+file+"&fileName="+name)
        },
        //文件删除
        deleteFile(index,url){
            this.nowList.drList.splice(index,1);
            this.fileDeteleUrl+=url+","
        },
        //保存数据
        saveData(){
            this.isSave = true;
            let axiosData = new FormData();
            let url = JSON.stringify(this.fileUrl);
            if(this.nowList.productName != this.list.productName){ 
                this.nowList.productId = this.nowList.productName;
            }
            if(this.nowList.subproductName != this.list.subproductName){ 
                this.nowList.subproductId = this.nowList.subproductName;
            }
            if(this.nowList.versionName != this.list.versionName){ 
                this.nowList.versionId = this.nowList.versionName;
            }

            if(this.nowList.provinceName != this.list.provinceName){ 
                this.nowList.provinceId = this.nowList.provinceName;
            }
            if(this.nowList.cityName != this.list.cityName){ 
                this.nowList.cityId = this.nowList.cityName;
            }
            if(this.nowList.areaName != this.list.areaName){ 
                this.nowList.areaId = this.nowList.areaName;
            }
            if(this.nowList.examinationName != this.list.examinationName){ 
                this.nowList.examinationId = this.nowList.examinationName;
            }

            axiosData.append('id',this.nowList.id);
            axiosData.append('productId',this.nowList.productId);
            axiosData.append('subproductId',this.nowList.subproductId);
            axiosData.append('versionId',this.nowList.versionId);
            axiosData.append('summary',this.nowList.summary);
            axiosData.append('detailed',this.nowList.detailed);
            axiosData.append('examinationId',this.nowList.examinationId);
            axiosData.append('contacts',this.nowList.contacts);
            axiosData.append('contactInformation',this.nowList.contactInformation);
            axiosData.append('findTime',new Date(this.nowList.findTime));
            axiosData.append('remarks',this.nowList.remarks);
            axiosData.append('url',url);
            axiosData.append('delateUrls',this.fileDeteleUrl);
            axiosData.append('assignUserId',this.nowList.assignUserId);
            axiosData.append('delateUrls',this.nowList.delateUrls);
            axiosData.append('state',this.nowList.state);

            this.$axios.post('/api/problemFeedback/updateProblemFeedback',axiosData).then(response => {
                //console.log(response);
                if(response.data.code == "10000")
                {
                    this.$router.push({name: 'problemList',query: {message: "修改成功!"}});
                }
                else
                {
                    //console.log(response)
                    this.$message({
                        showClose: true,
                        message: response.data.message,
                        type: 'warning'
                    });
                }
            })
        }
	},
    created() {
        this.showList();
    },
    beforeDestroy(){
        if(this.isSave == false)
        {
            //滚回山传
           this.$refs.upload.clearFiles();
        }
    }
}
</script>

<style rel="stylesheet" scoped>
</style>