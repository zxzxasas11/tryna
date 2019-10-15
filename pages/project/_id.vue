<template>
	<div>
		<div>{{projectInfo.name}}</div>
		<div class="btn-group">
			<el-button size="small" type="primary" @click="openDialog">添加分组</el-button>
			<el-button size="small" @click="addInterface">添加接口</el-button>
		</div>
		<div class="window">
			<div class="left">
				<div v-for="i in projectInfo.category" class="first-menu">
					<nuxt-link active-class="active-class" :to="'/project/'+$route.params.id+'/'+i._id">{{i.name}}</nuxt-link>
				</div>
			</div>
			<div class="right">
				<nuxt/>
			</div>
		</div>
		
		<el-dialog  class="elDialog abow_dialog" :close-on-click-modal="false" title="添加分组" :visible.sync="dialogVisible">
			<el-form ref="form" :model="category" label-width="80px" style="text-align: left">
				<el-form-item label="一级分组">
					<el-select clearable v-model="category.category" placeholder="一级分组">
						<el-option :label="c.name" :value=c._id :key="c._id" v-for="c in projectInfo.category"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="分组名称">
					<el-input v-model="category.name" placeholder="分组名称"></el-input>
				</el-form-item>
			
			</el-form>
			<el-button type="primary" @click="submitCategory">提交</el-button>
			<el-button @click="QuestionAddVisible=false">取消</el-button>
		</el-dialog>
		
		
	</div>
</template>

<script>
	import project from "../../api/project";
    export default {
        data(){
            return{
                projectInfo:{},
                dialogVisible:false,
	            category:{
                    category:"",
                    name:""
	            },
            }
        },
        head(){
            return{
                meta:[
                    {name:`api`,content:'This is news page'}
                ]
            }
        },
        //middleware:"auth",
        created(){
            this.getInfo();
        },
        methods:{
            async getInfo(){
                await project.getOne(this.$route.params.id).then(res=>{
                    this.projectInfo = res.data;
                })
            },
	        //打开添加分组对话框
	        async openDialog(){
                this.dialogVisible = true;
	        },
            async addInterface(){
                this.$router.push("/project/"+this.$route.params.id+"/addInterface");
            },
	        //提交添加分组请求
	        async submitCategory(){
                await project.addCategory(this.category).then(res=>{
                    console.log(res);
                    alert(1);
                })
	        }
        },
        computed:{
        },
	    mounted() {
            console.log(this.$route.params);
        }
    }
</script>

<style scoped lang="less">
	@import "../../assets/css/api.less";
	.active-class{
		color:red;
	}
	
	.first-menu{
		width:100%;
		height:40px;
		line-height:40px;
		a{
			display: inline-block;
			width:100%;
		}
	}
</style>
