<template>
    <div class="problem-list">
    	<inside-title :insideInfo="information"></inside-title>
    	<div class="screening-common">
    		<el-col :span="4">
	    		<el-input placeholder="关键词搜索..." v-model="paging.keyword" class="input-with-select seach">
				    <el-button slot="append" icon="el-icon-search" @click= "secarchList"></el-button>
				</el-input>
			</el-col>
			<el-col :span="4" class="cascader" >
				<el-select v-model="paging.productLine" @change="categoryGetLine(1,paging.productLine)" placeholder="请选择产品线" clearable >
				    <el-option
				      v-for="item in productLine"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				</el-select>
			</el-col>
			<el-col :span="4" class="cascader" >
				<el-select v-model="paging.productChilren" @change="categoryGetChilren(2,paging.productChilren)" placeholder="请选择子产品线" clearable >
				    <el-option
				      v-for="item in productChilren"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				</el-select>
			</el-col>
			<el-col :span="4" class="cascader" >
				<el-select v-model="paging.productVersion" placeholder="请选择版本" clearable >
				    <el-option
				      v-for="item in productVersion"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				</el-select>
			</el-col>
			<el-col :span="4" class="cascader" >
				<el-select v-model="paging.productState" placeholder="请选择状态" clearable >
				    <el-option
				      v-for="item in productState"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				</el-select>
			</el-col>
			<el-button type="primary" @click= "secarchList" icon="el-icon-search">搜索</el-button>
			<div class="clear"></div>
    	</div>
    	<div class="lists-hull-common">
    		<table class="common-table">
    			<thead>
	    			<tr class="table-caption">
	    				<th width="40">
	    					<input type="checkbox" class="checkbox-all" @change="CusCheckAllChange" v-model="selectBut"/>
	    				</th>
	    				<th  width="50">序号</th>
	    				<th>产品线</th>
	    				<th>子产品线</th>
	    				<th>版本</th>
	    				<th width="30%">概述</th>
	    				<th>当前状态</th>
	    				<th>所属人</th>
	    				<th>创建人</th>
	    				<th>创建时间</th>
	    				<th width="120">操作</th>
	    			</tr>
    			</thead>
    			<tbody>
	    			<tr v-for="(list,index) in lists" :key="list.id">
	    				<td><input type="checkbox" class="checkbox-all" name="checkall" :value="list.id" v-model="selectArr" @change="CusCheckedCitiesChange"/></td>
	    				<td>{{index+1+(paging.pageNum-1)*paging.pageSize}}</td>
	    				<td>{{list.productName}}</td>
	    				<td>{{list.subproductName}}</td>
	    				<td>{{list.versionName}}</td>
	    				<td class="summary">{{list.summary}}</td>
	    				<td v-if="list.state==1">未处理</td>
	    				<td v-if="list.state==2">处理中</td>
	    				<td v-if="list.state==3">已解决</td>
	    				<td v-if="list.state==4">不予解决</td>
	    				<td>{{list.userName}}</td>
	    				<td>{{list.createUser}}</td>
	    				<td >{{list.createTime | formatTime}}</td>
	    				<td class="operation">
	    					<el-tooltip transition="el-zoom-in-top" content="查看" placement="bottom" effect="dark">
	    						<router-link :to="'/problem/look/'+list.id">
	    							<i class="icon-class ion-clipboard"></i>
	    						</router-link>
	    					</el-tooltip>
	    					<el-tooltip transition="el-zoom-in-top" content="编辑" placement="bottom" effect="dark">
	    						<router-link :to="'/problem/editor/'+list.id">
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
    		<div class="left">
				<el-button type="primary" size="small" @click="problemAdd">新增</el-button>
    			<el-button type="primary" size="small" @click="batchDeleting">批量删除</el-button>
			</div>
    		<div class="bbatch-common">
    			<div class="block">
				    <el-pagination
				      @size-change="handleSizeChange"
				      @current-change="handleCurrentChange"
				      :current-page="paging.pageNum"
				      :page-sizes="[10, 20, 30, 50]"
				      :page-size="paging.pageSize"
				      layout="total, sizes, prev, pager, next, jumper"
				      :total="total">
				    </el-pagination>
				</div>
    		</div>
    	</div>
    </div>
</template>

<script>
/**
 * data() 下的数据用途
 * information  标题
 * selectBut   全选按钮状态
 * proData     全选数组
 * selectArr   批量删除选中的数组
 * paging      翻页
 *   - pageNum      当前页码
 *   - pageSize     每页显示条数
 *   - productId    产选产品ID
 *   - secarch      关键词筛选
 * total       数据总和
 * categroyVal 筛选
 */ 

import InsideTitle from '@/components/InsideTitle'
export default {
	name: 'problem-list',
	components: {
		"inside-title": InsideTitle
	},
	data(){
		return {
			information: {
				title: "问题反馈列表",
				smallTitle: "列表",
			},
			selectBut: false,
			proData:[],
			selectArr:[],
			total: 0,
			paging: {
				pageNum: 1,
				pageSize: 10,
				productLine: '',
				productChilren: '',
				productVersion: '',
				categoryGetState: '',
				keyword: ''
			}
		//end
		}
	},
	computed: {
		lists: function() {
			return this.$store.getters.getDataList;
		},
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
		productState: function() {
			let arr = [
				{value: "1",label:"未处理"},
				{value: "2",label:"处理中"},
				{value: "3",label:"已解决"},
				{value: "4",label:"不予解决"}
			]
			return arr;
		}
	},
	methods: {
		//显示列表
		showLists: function(paging) {
			let axiosData = new FormData();
			axiosData.append('pageNum',paging.pageNum);
			axiosData.append('pageSize',paging.pageSize);
			axiosData.append('productId',paging.productLine);
			axiosData.append('subproductId',paging.productChilren);
			axiosData.append('versionId',paging.productVersion);
			axiosData.append('state',paging.categoryGetState);
			axiosData.append('search',paging.keyword);
			this.$axios.post("/api/problemFeedback/queryProblemFeedbackList",axiosData).then(response => {
				//录入全选数据proData
				//console.log(response);
				let res = response.data;
				if(res.code == "10000")
				{
					this.total = res.result.total;
					if(res.result.list)
					{
						for(let i=0; i< res.result.list.length; i++)
						{
							let arr = res.result.list[i].id;
							this.proData.push(arr);
						}
					}
					//录入vuex
					this.$store.dispatch("setDataList",res.result.list);
				}
				else
				{
					this.$message({
						showClose: true,
						message: '数据拉取失败! 错误代码 : PROBLEM-LIST-200',
						type: 'warning'
			        });
				}
			}).catch(error => {
			    this.$message({
					showClose: true,
					message: '数据拉取失败! 错误代码 : PROBLEM-LIST-404 '+error,
					type: 'warning'
		        });
		        console.log(error)
			});
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
			this.$router.push({name:"problemAdd"})
		},
		//翻页
		handleSizeChange: function(val) {
        	this.paging.pageSize = val;
			this.showLists(this.paging);
	    },
		handleCurrentChange: function(val) {
			this.paging.pageNum = val;
			this.showLists(this.paging);
		},
		//全选
		CusCheckAllChange(e) {
			if(e.currentTarget.checked)
			{
				this.selectArr = this.proData;
			}
			else
			{
				this.selectArr = [];
			}
		},
		//取消全选
		CusCheckedCitiesChange(e) {
			if(this.selectBut == true)
			{
				this.selectBut = false;
			}
		},
		batchDeleting(){
			if(this.selectArr.length>0)
			{
				console.log(this.selectArr)
				this.$confirm('您是否批量删除这些数据, 是否继续?', '提示', {
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
	        }
	        else
	        {
	        	this.$message({
	        		showClose: true,
	        		message: '请选择要删除的数据!',
		          	type: 'warning'
		        });
	        }
		},
		//获取产品ID 加载子产品
		categoryGetLine: function (typeid,id) {
			this.paging.productChilren = '';
			this.paging.productVersion = '';
			this.paging.categoryGetState = '';
			this.$store.commit('unProdcut_version');
			this.Funs.category_two(typeid,id);
		},
		//获取子产品ID 加载版本
		categoryGetChilren: function (typeid,id) {
			this.paging.productVersion = '';
			this.paging.categoryGetState = '';
			this.Funs.category_three(typeid,id);
		},
		//搜索
		secarchList: function()
		{
			this.showLists(this.paging);
		}
	},
	created(){
		this.showLists(this.paging);
		if(this.$route.query.message)
		{
			this.$message({
                showClose: true,
                message: this.$route.query.message,
                type: 'success'
            });
		}	
	}
}
</script>

<style rel="stylesheet" scoped>

</style>