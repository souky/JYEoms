<template>
    <div class="patrol-list">
    	<inside-title :insideInfo="information"></inside-title>
    	<div class="partrolbox">
	    	<div class="partrol-left">
	    		<app-tree :options="options"></app-tree>
	    	</div>
	    	<div class="lists-hull-common">
	    		<div class="screening-common">
					<el-col :span="6" class="cascader" >
						<el-cascader
						  :options="options"
						  change-on-select
						  @change="handleChange"></el-cascader>
					</el-col>
					<el-button type="primary" icon="el-icon-search">搜索</el-button>
					<div class="right">
						<el-button type="primary" @click="problemAdd">新增</el-button>
		    			<el-button type="primary">批量删除</el-button>
					</div>
					<div class="clear"></div>
		    	</div>
	    		<table class="common-table">
	    			<thead>
		    			<tr class="table-caption">
		    				<th width="40"><input type="checkbox" class="checkbox-all" name="checkboxall"/></th>
		    				<th  width="50">序号</th>
		    				<th>设备类型</th>
		    				<th>IP/掩码/网关</th>
		    				<th>域名</th>
		    				<th>型号</th>
		    				<th>板卡号(同轴)</th>
		    				<th width="30%">备注</th>
		    				<th width="120">操作</th>
		    			</tr>
	    			</thead>
	    			<tbody>
		    			<tr v-for="(list,index) in lists" :key="list.id">
		    				<td><input type="checkbox" class="checkbox-all" name="checkboxall"/></td>
		    				<td>{{index+1}}</td>
		    				<td v-if="list.equipmentType==1">上级拼控</td>
		    				<td v-if="list.equipmentType==2">控制主机</td>
		    				<td v-if="list.equipmentType==3">路由器</td>
		    				<td v-if="list.equipmentType==4">管理服务器</td>
		    				<td v-if="list.equipmentType==5">映射关系表</td>
		    				<td v-if="list.equipmentType==6">分发存储</td>
		    				<td v-if="list.equipmentType==7">摄像机</td>
		    				<td></td>
		    				<td>{{list.domainName}}</td>
		    				<td>{{list.serviceModel}}</td>
		    				<td>{{list.servicePlateNumber}}</td>
		    				<td class="summary">{{list.remarks}}</td>
		    				<td class="operation">
		    					<el-tooltip transition="el-zoom-in-top" content="查看" placement="bottom" effect="dark">
		    						<router-link :to="{name: 'patrolLook',params:{id: list.id}}">
		    							<i class="icon-class ion-clipboard"></i>
		    						</router-link>
		    					</el-tooltip>
		    					<el-tooltip transition="el-zoom-in-top" content="编辑" placement="bottom" effect="dark">
		    						<router-link :to="{name: 'patrolEditor',params:{id: list.id}}">
		    							<i class="icon-class ion-compose"></i>
		    						</router-link>
		    					</el-tooltip>
		    					<el-tooltip transition="el-zoom-in-top" content="删除" placement="bottom" effect="dark">
		    						<i class="icon-class ion-trash-a" @click="dataDelete"></i>
		    					</el-tooltip>
		    				</td>
		    			</tr>
	    			</tbody>
	    		</table>
	    		<div class="bbatch-common">
	    			<div class="block">
					    <el-pagination
					      @size-change="handleSizeChange"
					      @current-change="handleCurrentChange"
					      :current-page="1"
					      :page-sizes="[10, 20, 30, 50]"
					      :page-size="10"
					      layout="total, sizes, prev, pager, next, jumper"
					      :total="400">
					    </el-pagination>
					</div>
	    		</div>
	    	</div>
    	</div>
    </div>
</template>

<script>
import InsideTitle from '@/components/InsideTitle'
import Tree from '@/components/Tree'
export default {
	name: 'patrol-list',
	components: {
		"inside-title": InsideTitle,
		"app-tree": Tree
	},
	data(){
		return {
			information: {
				title: "高清网上巡查",
				smallTitle: "列表",
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
			]
		//end
		}
	},
	computed: {
		lists: function() {
			return this.$store.getters.getDataList;
		}
	},
	methods: {
		//显示列表
		showLists: function() {
			this.$axios.get("/patrol").then((response) => {
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
		//删除数据
		dataDelete: function() {
			this.$confirm('此操作将永久删除这条数据, 是否继续?', '提示', {
	          confirmButtonText: '确定',
	          cancelButtonText: '取消',
	          type: 'warning'
	        }).then(() => {
	          this.$message({
	            type: 'success',
	            message: '删除成功!'
	          });
	        }).catch(() => {
	          this.$message({
	            type: 'info',
	            message: '已取消删除'
	          });          
	        });
		},
		//新增数据
		problemAdd: function() {
			this.$router.push({name:"patrolAdd"})
		},
		handleSizeChange: function(val) {
        	//console.log(`每页 ${val} 条`);
	    },
		handleCurrentChange: function(val) {
			//console.log(`当前页: ${val}`);
		},
		//联动菜单回调
		handleChange: function(value) {
			console.log(value);
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
</style>