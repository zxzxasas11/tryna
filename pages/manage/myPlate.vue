<template>
	<div class="main">
		<div v-for="m in menu" class="single">
			<div class="title">分类名称:{{m.name}}</div>
			<div class="top">
				<div>
					<span>置顶板块</span>
					<el-button @click="addTop(m)">添加</el-button>
				</div>
				<div v-for="t in m.top">
					<span>{{t.name}}</span>
					<el-button>移除</el-button>
				</div>
			</div>
		</div>
		
		<el-dialog
				:close-on-click-modal="false"
				title="添加置顶板块"
				:visible.sync="dialogVisible">
			<el-form label-width="80px" model="top">
				<el-form-item label="板块名称">
					<el-input v-model="top.name"></el-input>
				</el-form-item>
			
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="topConfirm">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	import category from "../../api/category";
    export default {
        data(){
            return{
                menu:[],
                dialogVisible:false,
	            top:{},
	            categoryId:""
            }
        },
        async asyncData ({ params }) {
            let {data} = await category.getPlateByUserId();
            console.log(data);
            return{
                menu:data,
            }
        },
	    methods:{
            addTop(m){
	            this.dialogVisible = true;
	            this.categoryId = m._id;
            },
            topConfirm(){
                category.addTop(this.categoryId,this.top).then(res=>{
                    console.log(res);
                    this.$message.success("添加成功");
                    this.dialogVisible = false;
                })
            }
	    }
    }
</script>

<style scoped lang="less">
	.main{
		height:calc(100% - 40px);
		overflow: auto;
	}
	.single{
		margin-bottom:20px;
		.title{
			font-weight: bold;
		}
		.top{
			margin-left:20px;
		}
	}
	
</style>
