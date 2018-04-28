<template>
    <div class="product-editor">
    	<inside-title :insideInfo="information"></inside-title>
    	<div class="lists-hull-common common-look common-editor">
    		<div class="look-return">
    			<router-link :to="{name:'productList'}" class="a-none">
	    			<i class="icon-class ion-chevron-left"></i>
	    			<span>返回列表</span>
    			</router-link>
    		</div>
    		<el-row class="item-row">
    			<el-col :span="8">
    				<p class="title"><span class="red">*</span>产品线：</p>
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
					<p class="title"><span class="red">*</span>版本：</p>
					<p class="input">
						<el-input ></el-input>
					</p>
				</el-col>
			</el-row>
    		<el-row class="item-row">
    			<el-col :span="16">
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
	name: "product-editor",
	data(){
		return {
			information: {
				title: "子产品管理列表",
				smallTitle: "编辑",
			},
			fileList: [],
			editorList:{
				test: "产品甲",
				test1:["产品甲","产品乙","产品丙"],
				test2: "2017-10-10"
			}
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
	}
}
</script>

<style rel="stylesheet" scoped>
.commonproblem-tree
{
	border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: .2s;
    padding: 20px;
}
</style>