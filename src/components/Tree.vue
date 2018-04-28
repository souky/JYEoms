<template>
   	<div class="tree">
   		<el-input
		  placeholder="输入关键字进行过滤" v-model="filterText">
		</el-input>
		<el-tree
		  class="filter-tree partrol-tree"
		  :data="options"
		  default-expand-all
		  :filter-node-method="filterNode"
		  highlight-current
		  ref="tree2">
		</el-tree>
   	</div>
</template>

<script>
export default {
	name: 'tree',
	data () {
		return {
			filterText: '',
		}
	},
	props: ['options'],
	methods: {
		//过滤
		filterNode: function(value, data){
			if (!value) return true;
        	return data.label.indexOf(value) !== -1;
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
}
.tree-save span
{
	margin-right: 20px;
}
</style>