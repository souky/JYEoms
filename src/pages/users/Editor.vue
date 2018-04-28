<template>
    <div class="users-editor">
    	<inside-title :insideInfo="information"></inside-title>
    	<div class="lists-hull-common common-look common-editor">
    		<div class="look-return">
    			<router-link :to="{name:'usersList'}" class="a-none">
	    			<i class="icon-class ion-chevron-left"></i>
	    			<span>返回列表</span>
    			</router-link>
    		</div>
    		<el-row class="item-row">
    			<el-col :span="8">
    				<p class="title"><span class="red">*</span>角色：</p>
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
    			<el-col :span="8">
    				<p class="title"><span class="red">*</span>用户类型：</p>
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
    			<el-col :span="8">
    				<p class="title"><span class="red">*</span>姓名：</p>
    				<p class="input">
    					<el-input ></el-input>
    				</p>
    			</el-col>
    			<el-col :span="8">
    				<p class="title"><span class="red">*</span>账户名称：</p>
    				<p class="input">
    					<el-input ></el-input>
    				</p>
    			</el-col>
    		</el-row>
    		<el-row class="item-row">
    			<el-col :span="8">
    				<p class="title"><span class="red">*</span>邮箱：</p>
    				<p class="input">
    					<el-input ></el-input>
    				</p>
    			</el-col>
    			<el-col :span="8">
    				<p class="title"><span class="red">*</span>手机号码：</p>
    				<p class="input">
    					<el-input ></el-input>
    				</p>
    			</el-col>
    		</el-row>
    		<el-row class="item-row">
    			<el-col :span="24">
    				<p class="title"><span class="red">*</span>产品：</p>
    				<p class="input nature">
    					<el-checkbox-group 
						    v-model="checkedCities1">
						    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
						</el-checkbox-group>
    				</p>
    			</el-col>
    		</el-row>
    		<el-row class="item-row">
    			<el-col :span="24">
    				<p class="title">机构：</p>
    				<el-col :span="8">
    					<p class="smalltitle"><span class="red">*</span>省</p>
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
    				<el-col :span="8">
    					<p class="smalltitle"><span class="red">*</span>市</p>
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
    			</el-col>
    		</el-row>
    		<el-row class="item-row">
    			<el-col :span="24">
    				<p class="title"></p>
    				<el-col :span="8">
    					<p class="smalltitle"><span class="red">*</span>区</p>
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
    				<el-col :span="8">
    					<p class="smalltitle"><span class="red">*</span>考点</p>
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
	name: 'users-editor',
	data(){
		return {
			information: {
				title: "用户管理",
				smallTitle: "编辑"
			},
			editorList:{
				test: "产品甲",
				test1:["产品甲","产品乙","产品丙"],
				test2: "2017-10-10"
			},
			fileList: [],
			cities: ['作弊防控系统','高清网上巡查系统','数字时钟同步系统','教育考试综合管理平台','身份认证系统'],
			checkedCities1: []
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
        //取消修改
        cancel: function()
        {
            this.$router.go(-1);
        }
	}
}
</script>

<style rel="stylesheet" scoped>
.common-look .item-row .el-col .nature 
{
	width: 80% !important;
}
.item-row .input .el-checkbox+.el-checkbox
{
	margin-left: 0;
}
.nature .el-checkbox
{
	width: 33.333%;
}
</style>