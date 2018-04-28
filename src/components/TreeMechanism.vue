<template>
   	<div class="tree">
   		<el-input
		  placeholder="输入关键字进行过滤" v-model="filterText">
		</el-input>
		<div class="tree-save">
			<span @click="dialogAdd=true"><i class="icon-class ion-android-add"></i>新增</span>
			<span @click="dialogEditor=true"><i class="icon-class ion-compose"></i>编辑</span>
			<span @click="dataDelete"><i class="icon-class ion-trash-a"></i>删除</span>
        </div>
		<el-tree
		  class="filter-tree partrol-tree"
		  :data="options"
		  default-expand-all
		  :filter-node-method="filterNode"
		  @node-click="handleNodeClick"
		  :props="defaultProps"
		  highlight-current
		  ref="tree2">
		</el-tree>
		<el-dialog :visible.sync="dialogAdd" top="auto">
			<div slot="title">新增</div>
			<div class="item">
				<label>省：</label>
				<div class="item-input">
					<el-select v-model="region.seng" size="small" placeholder="请选择">
					    <el-option
					      v-for="item in regionoptions"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					</el-select>
				</div>
			</div>
			<div class="item">
				<label>市：</label>
				<div class="item-input">
					<el-select v-model="region.seng" size="small" placeholder="请选择">
					    <el-option
					      v-for="item in regionoptions"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					</el-select>
				</div>
			</div>
			<div class="item">
				<label>区：</label>
				<div class="item-input">
					<el-select v-model="region.seng" size="small" placeholder="请选择">
					    <el-option
					      v-for="item in regionoptions"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					</el-select>
				</div>
			</div>
			<div class="clear"></div>
			<div class="itembg">
				<label>考点名称：</label>
				<el-input></el-input>
			</div>
			<div class="itembg check">
				<label>绑定系统：</label>
				<el-checkbox-group v-model="checkList">
				    <el-checkbox label="作弊防控系统"></el-checkbox>
				    <el-checkbox label="高清网上巡查系统"></el-checkbox>
				    <el-checkbox label="数字时钟同步系统"></el-checkbox>
				    <el-checkbox label="教育考试综合管理平台"></el-checkbox>
				    <el-checkbox label="身份认证系统"></el-checkbox>
				</el-checkbox-group>
			</div>
			<div class="tree-button">
				<el-button type="primary">保存</el-button>
				<el-button type="info" @click="dialogAdd=false">取消</el-button>
			</div>
		</el-dialog>
		<el-dialog :visible.sync="dialogEditor" top="auto">
			<div slot="title">编辑</div>
			<div class="item">
				<label>省：</label>
				<div class="item-input">
					<el-select v-model="region.seng" size="small" placeholder="请选择">
					    <el-option
					      v-for="item in regionoptions"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					</el-select>
				</div>
			</div>
			<div class="item">
				<label>市：</label>
				<div class="item-input">
					<el-select v-model="region.seng" size="small" placeholder="请选择">
					    <el-option
					      v-for="item in regionoptions"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					</el-select>
				</div>
			</div>
			<div class="item">
				<label>区：</label>
				<div class="item-input">
					<el-select v-model="region.seng" size="small" placeholder="请选择">
					    <el-option
					      v-for="item in regionoptions"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					</el-select>
				</div>
			</div>
			<div class="clear"></div>
			<div class="itembg">
				<label>考点名称：</label>
				<el-input></el-input>
			</div>
			<div class="itembg check">
				<label>绑定系统：</label>
				<el-checkbox-group v-model="checkList">
				    <el-checkbox label="作弊防控系统"></el-checkbox>
				    <el-checkbox label="高清网上巡查系统"></el-checkbox>
				    <el-checkbox label="数字时钟同步系统"></el-checkbox>
				    <el-checkbox label="教育考试综合管理平台"></el-checkbox>
				    <el-checkbox label="身份认证系统"></el-checkbox>
				</el-checkbox-group>
			</div>
			<div class="tree-button">
				<el-button type="primary">保存</el-button>
				<el-button type="info" @click="dialogEditor=false">取消</el-button>
			</div>
		</el-dialog>
   	</div>
</template>

<script>
export default {
	name: 'treemechanism',
	data () {
		return {
			filterText: '',
			defaultProps: {
	          children: 'children',
	          label: 'label'
	        },
	        dialogAdd: false,
	        dialogEditor: false,
	        region:{},
	        checkList:[],
	        regionoptions: [
	        	{
	        		label: "江苏省",
	        		value: "江苏省"
	        	},
	        	{
	        		label: "安徽省",
	        		value: "安徽省"
	        	}
	        ]
		}
	},
	props: ['options'],
	methods: {
		//过滤
		filterNode: function(value, data){
			if (!value) return true;
        	return data.label.indexOf(value) !== -1;
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
		handleNodeClick: function(data) {
	        console.log(data);
	    }
	},
	watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      }
    }
}
</script>

<style rel="stylesheet" scoped>
.tree .el-input
{
	margin-bottom: 10px;
}
.tree-save
{
	font-size: 14px;
	padding-left: 10px;
}
.tree-save span
{
	margin-right: 20px;
	cursor: pointer;
}
.tree-save span:hover
{
	color: #409EFF;
}
.tree-save span i
{
	margin-right: 4px;
}
.item
{
	width: 180px;
	padding: 0 15px 0 0;
	float: left;
}
.item .item-input
{
	display: inline-block;
	width: 120px;
}
.itembg
{
	width: 100%;
}
.itembg .el-input
{
	width: 400px;
	display: inline-block;
	margin-top: 20px;
}
.itembg .el-checkbox-group
{
	display: inline-block;
}
.itembg .el-checkbox-group .el-checkbox
{
	display: block;
	width: 170px;
	margin: 0;
}
.check label
{
	vertical-align: top;
}
.tree-button
{
	margin-top: 15px;
	padding-top: 15px;
	border-top: 1px solid #EEE;
	text-align: center;
}
</style>