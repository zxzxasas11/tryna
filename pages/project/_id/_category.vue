<template>
	<div>
		<table cellpadding="0" cellspacing="0" class="table">
			<tr class="head">
				<th>接口名称</th>
				<th>接口URL</th>
				<th>最近更新人</th>
				<th>最近更新日期</th>
				<th>操作</th>
			</tr>
			<tr v-for="l in list">
				<td>{{l.name}}</td>
				<td>{{l.url}}</td>
				<td>{{l.updater}}</td>
				<td>{{l.update_time}}</td>
				<td>
					<span>修改</span>
					<span @click="deleteApi(l)">删除</span>
				</td>
			</tr>
			
		</table>
	</div>
</template>

<script>
	import project from "../../../api/project";
	import api from "../../../api/api"
    export default {
        data(){
            return{
                projectInfo:{},
                list:[]
            }
        },
        head(){
            return{
                meta:[
                    {name:`api`,content:'This is news page'}
                ],
            }
        },
        //middleware:"auth",
        created(){
            this.$message.success("删除成功");
        },
        async asyncData ({ params }) {
            return await project.getApiList({category:params.category}).then(res=>{
                return{list:res.data.data}
            })
        },
        methods:{
            async getData(){
                await project.getApiList({category:this.$route.params.category}).then(res=>{
                    this.list=res.data.data;
                })
            },
            async deleteApi(l){
                await api.del(l._id).then(res=>{
                    console.log(res);
                    this.$message.success("删除成功");
                    this.getData();
                });
            }
        },
        computed:{
        },
	    mounted() {
        },
    }
</script>

<style scoped lang="less">
	.table{
		width:100%;
		tr{
			height:40px;
			text-align: center;
		}
	}
</style>
