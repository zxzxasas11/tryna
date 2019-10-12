<template>
	<div>
		<div>{{projectInfo.name}}</div>
		<div class="window">
			<div class="left"></div>
			<div class="right"></div>
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
        /*async asyncData ({params}) {
            await project.getOne(params.id).then(res=>{
                console.log(res.data);
                return{ projectInfo : res.data }
            })
        },*/
        created(){
            this.getInfo();
        },
        methods:{
            async getInfo(){
                project.getOne(this.$route.params.id).then(res=>{
                    this.projectInfo = res.data;
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

</style>
