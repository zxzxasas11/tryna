<template>
	<div style="height:calc(100% - 40px)">
		<div class="left-window">
			<el-button @click="addC">增加大类</el-button>
			<el-tree
					class="tree"
					:data="info"
					show-checkbox
					default-expand-all
					node-key="_id"
					empty-text=""
					ref="tree"
					:expand-on-click-node="false"
					highlight-current
					:props="defaultProps">
				<span class="" slot-scope="{ node, data }">
					<span @click="open(node,data)">{{node.label}}</span>
	                <span>
						<el-button
								type="text"
								size="mini"
								@click="() => append(data)">
							<i class="el-icon-plus"></i>
						</el-button>
						<el-button
								type="text"
								size="mini"
								@click="() => remove(node, data)">
							<i class="el-icon-minus"></i>
						</el-button>
	                </span>
				</span>
			</el-tree>
		</div>
		<div class="right-window">
			<nuxt-child></nuxt-child>
		</div>
		<el-dialog
				:close-on-click-modal="false"
				:title="dialogTitle"
				:visible.sync="dialogVisible">
			<el-form label-width="80px" :model="plate" ref="info">
				<el-form-item style="text-align:left" label="分类名称">
					<el-input v-model="plate.name"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="addCategory">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
    import category from "../../api/category";
    export default {
        data() {
            return {
                info: [],
	            plate:{},
                dialogTitle:"添加分类",
                dialogVisible:false,
                defaultProps: {
                    children: 'children',
                    label: 'name'
                },
            }
        },
        async asyncData({params}) {
            let {data} = await category.getCategory({});
            return {
                info: data
            }
        },
        middleware:"admin",
        methods: {
            refreshTree(){
                category.getCategory({}).then(res=>{
                    this.info = res.data;
                })
            },
            append(node){
                this.dialogVisible = true;
                this.plate.parentId = node._id;
            },
		    remove(node,data){},
            async addCategory(){
                await category.add(this.plate).then(res=>{
                    this.dialogVisible = false;
                    this.$message.success("添加成功");
                    this.refreshTree();
                })
            },
            //增加大类
            addC(){
                this.plate = {};
                this.dialogVisible = true;
                
            },
	        open(node,data){
                this.$router.push("/manage/plate/"+data._id);
	        }
        }
    }
</script>

<style scoped lang="less">
	@width:200px;
.tree{
	width:200px;
}
	
	.left-window{
		float: left;
		width: @width;
	}
	
	.right-window{
		float: left;
		width:calc(100% - @width);
		height:100%;
	}
</style>
