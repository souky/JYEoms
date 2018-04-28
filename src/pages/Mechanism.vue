<template>
    <div class="mechanism-list patrol-list">
    	<inside-title :insideInfo="information"></inside-title>
    	<div class="partrolbox">
	    	<div class="partrol-left">
	    		<app-tree :options="options" ref="treeSave"></app-tree>
	    	</div>
	    	<div class="lists-hull-common">
	    		<el-card class="box-card">
				  <div slot="header" class="clearfix">
				    <span>已开通产品系统：</span>
				  </div>
				  <div v-for="o in 4" :key="o" class="text item">
				    {{'列表内容 ' + o }}
				  </div>
				</el-card>
	    	</div>
    	</div>
    </div>
</template>

<script>
import InsideTitle from '@/components/InsideTitle'
import TreeMechanism from '@/components/TreeMechanism'
export default {
	name: 'mechanism',
	components: {
		"inside-title": InsideTitle,
		"app-tree": TreeMechanism
	},
	data(){
		return {
			information: {
				title: "机构管理列表",
				smallTitle: "列表",
				mechanismSave: true
			},
			selectedOptions: [],
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
			],
			filterText: ''
		//end
		}
	},
	computed: {
		lists: function() {
			return this.$store.getters.getDataList;
		}
		// treeHeight: function () {
		// 	return document.body.offsetHeight-300 + "px";
		// }
	},
	methods: {
		//显示列表
		showLists: function() {
			this.$axios.get("/operation").then((response) => {
				let res= response.data;
				if(res.code == 10000)
				{
					this.$store.dispatch("setDataList",res.result.list);
				}
				else
				{
					this.$message({
			          showClose: true,
			          message: '数据拉取失败! 错误代码 : PROBLEM-LIST-404',
			          type: 'warning'
			        });
				}
			})
		},
		//新增数据
		problemAdd: function() {
			this.$router.push({name:"operationAdd"})
		}
	},
	created(){
		this.showLists();
	}
}
</script>

<style rel="stylesheet" scoped>

.patrol-list .lists-hull-common
{
	margin-left: 300px;
}
.patrol-list .screening-common
{
	margin: 0;
	height: 60px;
}
.patrol-list .screening-common .cascader
{
	margin-left: 0;
}
.patrol-list .screening-common .right
{
	margin-right: 0;
}
.patrol-list .partrol-left
{
	padding: 20px 0 0 20px;
}
.patrol-list .partrol-tree
{
	margin-top: 20px;
}
.text 
{
	font-size: 14px;
}

.item 
{
	margin-bottom: 18px;
}
.el-card
{
	min-height: 400px;
}
</style>