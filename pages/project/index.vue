<template>
	<div class="box">
		<div class="head">
			<el-button @click="dialogVisible=true">新建项目</el-button>
		</div>
		<table class="table-list" cellspacing="0" cellpadding="0">
			<tr>
				<th></th>
				<th>项目名称</th>
				<th>创建时间</th>
				<th>创建人</th>
				<th>操作</th>
			</tr>
			<tr v-for="(l,index) in list" :key="index">
				<td>{{index+1}}</td>
				<td><nuxt-link :to="'/project/'+l._id">{{l.name}}</nuxt-link></td>
				<td>{{l.create_time}}</td>
				<td>{{l.creator}}</td>
				<td>
					<button class="check-btn">预览</button>
				</td>
			</tr>
		</table>
		
		<el-dialog  class="elDialog abow_dialog" :close-on-click-modal="false" title="添加项目" :visible.sync="dialogVisible">
			<el-form :validate-on-rule-change="false"  class="form" ref="exam" :model="project" label-width="90px" >
				<el-form-item label="项目名称:">
					<el-input v-model="project.name"></el-input>
				</el-form-item>
				
				
				<el-form-item label-width="0">
					<el-button type="primary" @click="submitAdd">提交</el-button>
					<el-button @click="dialogVisible = false">取消</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>
	</div>
</template>

<script>
	import project from "../../api/project";
    export default {
        data() {
            return {
                list:[],
	            project:{
                    name:""
	            },
                dialogVisible:false
            }
        },
        created() {
            this.getProject();
        },
        /*async asyncData ({ params }) {
            return await project.getProjectById({})
                .then((res) => {
                    return{list:res.data}
                })
        },*/
        methods: {
            async getProject(){
                await project.getProjectById({}).then((res) => {
                        //return{list:res.data}
	                this.list = res.data;
                })
            },
            /*async fetch ({ app, store, params }) {
                console.log("-----------");
                //let { data } = app.$axios.get('/token');
                //store.commit('setToken', data.token);
            }*/
            async submitAdd(){
                await project.addProject(this.project).then(async res=>{
                    console.log(res);
                    this.$message.success("添加成功");
                    await this.getProject();
                    this.dialogVisible = false;
                })
            }
        }
    }
</script>

<style scoped lang="less">
	.table-list{
		width: 100%;
		font-size:14px;
		tr{
			height: 70px;
			.text{
				text-align: left;
			}
			th{
				color: #4271b7;
				font-weight: normal;
			}
			td:not(.text){
				width:8%;
			}
			td:last-child{
				width:30%;
			}
		}
		//edf5ff
		tr:nth-child(odd){
			background-color: #edf5ff;
		}
		
	}
</style>
