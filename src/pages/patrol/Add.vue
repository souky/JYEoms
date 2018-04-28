<template>
    <div class="patrol-add">
    	<inside-title :insideInfo="information"></inside-title>
    	<div class="lists-hull-common common-look common-editor">
    		<div class="look-return">
    			<router-link :to="{name:'patrolList'}" class="a-none">
	    			<i class="icon-class ion-chevron-left"></i>
	    			<span>返回列表</span>
    			</router-link>
    		</div>
    		<el-row class="item-row">
    			<el-col :span="8">
    				<p class="title"><span class="red">*</span>布置地区：</p>
    				<p class="input">
    					<el-cascader
					  :options="options"
					  change-on-select
					  @change="handleChange"></el-cascader>
    				</p>
    			</el-col>
    		</el-row>
    		<el-row class="item-row">
    			<el-col :span="8">
    				<p class="title"><span class="red">*</span>设备类型：</p>
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
                    <p class="title"><span class="red">*</span>IP：</p>
                    <p class="input">
                        <el-input></el-input>
                    </p>
                </el-col>
                <el-col :span="8">
                    <p class="title"><span class="red">*</span>子网掩码：</p>
                    <p class="input">
                        <el-input></el-input>
                    </p>
                </el-col>
            </el-row>
            <el-row class="item-row">
                <el-col :span="8">
                    <p class="title"><span class="red">*</span>网关：</p>
                    <p class="input">
                        <el-input></el-input>
                    </p>
                </el-col>
                <el-col :span="8">
                    <p class="title"><span class="red">*</span>管理方式：</p>
                    <p class="input">
                        <el-input></el-input>
                    </p>
                </el-col>
            </el-row>
            <el-row class="item-row">
                <el-col :span="8">
                    <p class="title"><span class="red">*</span>账号：</p>
                    <p class="input">
                        <el-input></el-input>
                    </p>
                </el-col>
                <el-col :span="8">
                    <p class="title"><span class="red">*</span>密码：</p>
                    <p class="input">
                        <el-input></el-input>
                    </p>
                </el-col>
            </el-row>
            <el-row class="item-row">
                <el-col :span="8">
                    <p class="title"><span class="red">*</span>版本：</p>
                    <p class="input">
                        <el-input></el-input>
                    </p>
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
	name: 'patrol-add',
	data(){
		return {
			information: {
				title: "高清网上巡查",
				smallTitle: "新增"
			},
			editorList:{
				test: "产品甲",
				test1:["产品甲","产品乙","产品丙"],
				test2: "2017-10-10"
			},
			fileList: [],
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
        },
        //联动菜单回调
		handleChange: function(value) {
			console.log(value);
		}
	}
}
</script>

<style rel="stylesheet" scoped>
.patrol-add .el-cascader
{
	width: 100%;
}
</style>