<template>
	<div>
		<div>{{projectInfo.name}}</div>
		<div>
			<ul class="menu-ul">
				<li>接口总数</li>
				<li>状态码总数</li>
				<li>项目组成员</li>
				<li>最后更新时间</li>
			</ul>
		</div>
	</div>
</template>

<script>
    import project from "~/api/project";
    export default {
        name: "index",
	    data(){
            return{
                projectInfo:{},
            }
	    },
	    created(){
            //this.getInfo();
	    },
	    methods:{
            /*async getInfo(){
                await project.getOne(this.$route.params.id).then(res=>{
                    console.log(res.data);
                    this.$store.dispatch("project/setProject",res.data);
                    this.projectInfo = res.data;
                })
            },*/
            
	    }
    }
</script>

<style scoped lang="less">
	.menu-ul{
		display: flex;
		border:1px solid #ddd;
		li{
			flex:1;
			height:80px;
			line-height:80px;
			text-align: center;
		}
		li:not(:first-child){
			border-left:1px solid #ddd;
			box-sizing: border-box;
		}
	}
</style>
