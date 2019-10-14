<template>
	<div>
		<div>{{projectInfo.name}}</div>
		<div class="btn-group">
			<el-button size="small" type="primary">添加分组</el-button>
			<el-button size="small" @click="addInterface">添加接口</el-button>
		</div>
		<div class="window">
			<div class="left">
				<div v-for="i in projectInfo.category" @click="getApi(i)">{{i.name}}
				</div>
			</div>
			<div class="right">
				<nuxt/>
			</div>
		</div>
		
		
	</div>
</template>

<script>
	import project from "../../api/project";
    export default {
        data(){
            return{
                projectInfo:{}
            }
        },
        head(){
            return{
                meta:[
                    {name:`api`,content:'This is news page'}
                ]
            }
        },
        middleware:"auth",
        created(){
            this.getInfo();
        },
        methods:{
            async getInfo(){
                project.getOne(this.$route.params.id).then(res=>{
                    this.projectInfo = res.data;
                })
            },
	        async getApi(i){
                this.$router.push("/api/"+this.$route.params.id+"/"+i._id);
	        },
	        async addInterface(){
         
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
</style>
