<template>
    <div class="product-list">
    	<inside-title :insideInfo="information"></inside-title>
    	<div class="screening-common">
    		<el-col :span="6">
	    		<el-input placeholder="关键词搜索..." class="input-with-select seach">
				    <el-button slot="append" icon="el-icon-search"></el-button>
				</el-input>
			</el-col>
			<el-col :span="6" class="cascader" >
				<el-cascader
				  :options="options"
				  change-on-select
				  @change="handleChange" placeholder="请选择产品线"></el-cascader>
			</el-col>
			<el-button type="primary" icon="el-icon-search">搜索</el-button>
			<div class="right">
				<el-button type="primary" @click="commonProblemAdd">新增</el-button>
    			<el-button type="primary">批量删除</el-button>
			</div>
			<div class="clear"></div>
    	</div>
    	<div class="lists-hull-common">
    		<table class="common-table">
    			<thead>
	    			<tr class="table-caption">
	    				<th width="40"><input type="checkbox" class="checkbox-all" name="checkboxall"/></th>
	    				<th width="50">序号</th>
	    				<th>产品名称</th>
	    				<th>子产品名称</th>
	    				<th width="60%">备注</th>
	    				<th>操作</th>
	    			</tr>
    			</thead>
    			<tbody>
	    			<tr v-for="(list,index) in lists" :key="list.id">
	    				<td><input type="checkbox" class="checkbox-all" name="checkboxall"/></td>
	    				<td>{{index+1}}</td>
	    				<td>{{list.productName}}</td>
	    				<td>{{list.subproductName}}</td>
	    				<td class="summary">{{list.remarks}}</td>
	    				<td class="operation">
	    					<el-tooltip transition="el-zoom-in-top" content="查看" placement="bottom" effect="dark">
	    						<router-link :to="{name:'productLook',params:{ id: list.id }}">
	    							<i class="icon-class ion-clipboard"></i>
	    						</router-link>
	    					</el-tooltip>
	    					<el-tooltip transition="el-zoom-in-top" content="编辑" placement="bottom" effect="dark">
	    						<router-link :to="{name:'productEditor',params:{ id: list.id }}">
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
</template>

<script>
import InsideTitle from '@/components/InsideTitle'
export default {
	name: 'product-list',
	components: {
		"inside-title": InsideTitle
	},
	data(){
		return {
			information: {
				title: "子产品管理",
				smallTitle: "列表",
			},
			selectedOptions: [],
			options: [
				{
					value: "zuobi",
					label: "作弊",
				},
				{
		            value: 'daohang',
		            label: '导航',
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
			this.$axios.get("/product").then((response) => {
				let res= response.data;
				if(res.code == 10000)
				{
					this.$store.dispatch("setDataList",res.result.list);
				}
				else
				{
					this.$message({
			          showClose: true,
			          message: '数据拉取失败! 错误代码 : COMMONPROBLEM-LIST-404',
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
		commonProblemAdd: function() {
			this.$router.push({name:"productAdd"})
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

</style>