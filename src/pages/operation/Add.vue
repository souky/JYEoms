<template>
    <div class="operation-add">
    	<inside-title :insideInfo="information"></inside-title>
    	<div class="lists-hull-common common-look common-editor">
    		<div class="look-return">
    			<router-link :to="{name:'operationList'}" class="a-none">
	    			<i class="icon-class ion-chevron-left"></i>
	    			<span>返回列表</span>
    			</router-link>
    		</div>
    		<el-row class="item-row">
    			<el-col :span="12">
    				<p class="title"><span class="red">*</span>布置地区：</p>
    				<p class="input">
    					<el-cascader
					  :options="options"
					  change-on-select></el-cascader>
    				</p>
    			</el-col>
    		</el-row>
    		<el-row class="item-row">
    			<el-col :span="8">
    				<p class="title"><span class="red">*</span>产品名称：</p>
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
                    <p class="title"><span class="red">*</span>维护设备：</p>
                    <p class="input">
                        <el-input></el-input>
                    </p>
                </el-col>
    		</el-row>
            <el-row class="item-row">
            	<el-col :span="8">
                    <p class="title"><span class="red">*</span>设备序列号：</p>
                    <p class="input">
                        <el-input></el-input>
                    </p>
                </el-col>
            </el-row>
            <el-row class="item-row">
            	<el-col :span="24">
                    <p class="title"><span class="red">*</span>服务性质：</p>
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
    				<p class="title">故障现象：</p>
    				<p class="input textarea">
                        <el-input
                          type="textarea"
                          :rows="4">
                        </el-input>            
                    </p>
    			</el-col>
    		</el-row>
    		<el-row class="item-row">
    			<el-col :span="24">
    				<p class="title">解决方案：</p>
    				<p class="input textarea">
                        <el-input
                          type="textarea"
                          :rows="4">
                        </el-input>            
                    </p>
    			</el-col>
    		</el-row>
            <el-row class="item-row">
                <el-col :span="8">
                    <p class="title"><span class="red">*</span>工程师姓名：</p>
                    <p class="input">
                        <el-input></el-input>
                    </p>
                </el-col>
                <el-col :span="8">
                    <p class="title"><span class="red">*</span>工程师手机号：</p>
                    <p class="input">
                        <el-input></el-input>
                    </p>
                </el-col>
            </el-row>
            <el-row class="item-row">
                <el-col :span="8">
                    <p class="title"><span class="red">*</span>考点联系人：</p>
                    <p class="input">
                        <el-input></el-input>
                    </p>
                </el-col>
                <el-col :span="8">
                    <p class="title"><span class="red">*</span>联系人手机号：</p>
                    <p class="input">
                        <el-input></el-input>
                    </p>
                </el-col>
            </el-row>
            <el-row class="item-row">
                <el-col :span="24">
                    <p class="title"><span class="red">*</span>客户满意度：</p>
                    <p class="input">
                        <el-radio-group v-model="radio">
						    <el-radio :label="1">非常满意</el-radio>
						    <el-radio :label="2">满意</el-radio>
						    <el-radio :label="3">一般</el-radio>
						    <el-radio :label="4">不满意</el-radio>
						    <el-radio :label="5">差</el-radio>
						</el-radio-group>
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
	name: 'operation-add',
	data(){
		return {
			information: {
				title: "运维服务列表",
				smallTitle: "新增"
			},
			editorList:{
				test: "产品甲",
				test1:["产品甲","产品乙","产品丙"],
				test2: "2017-10-10"
			},
			fileList: [],
			radio: 2,
			cities: ['上门维修', '用户送修', '修复OS', '开箱验机','扩充配置','电话支持','其他','实施','售后','巡检','是否为接替他人未完成的服务'],
			checkedCities1: [],
			options: [
				{
					value: "zuobi",
					label: "中国",
					children: [
						{
			              value: 'yizhi',
			              label: '江苏省',
			              children:[
			              	{
			              		value:'1',
			              		label: '泰州市'
			              	},
			              	{
			              		value:'2',
			              		label: '无锡市'
			              	},
			              	{
			              		value:'3',
			              		label: '苏州市',
			              		children:[
			              			{
			              				value: "sz1",
			              				label: "沧浪区",
			              				children:[{value:"xx1",label:"苏州沧浪第一实验中学"}]
			              			},
			              			{
			              				value: "sz2",
			              				label: "吴中区"
			              			},
			              		]
			              	},
			              ]
			            }, {
			              value: 'fankui',
			              label: '反馈'
			            }, {
			              value: 'xiaolv',
			              label: '效率'
			            }, {
			              value: 'kekong',
			              label: '可控'
			            }
					]
				},
				{
		            value: 'daohang',
		            label: '导航',
		            children: [
				            {
				              value: 'cexiangdaohang',
				              label: '侧向导航'
				            }, 
				            {
				              value: 'dingbudaohang',
				              label: '顶部导航'
				            }
		          	]
		        }
			]
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
.item-row .input .el-checkbox+.el-checkbox
{
	margin-left: 0;
}
.common-look .item-row .el-col .nature 
{
	width: 80% !important;
}
.nature .el-checkbox
{
	width: 16.666%;
}
.operation-add .el-cascader
{
	width: 100%;
}
</style>