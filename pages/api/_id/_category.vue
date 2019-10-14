<template>
	<div>
		<div v-for="l in list">{{l.name}}</div>
	</div>
</template>

<script>
	import project from "../../../api/project";
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
        middleware:"auth",
        created(){
            //this.getInfo();
	        
        },
        async asyncData ({ params }) {
            return await project.getApiList({category:params.category}).then(res=>{
                return{list:res.data.data}
            })
        },
        methods:{
        },
        computed:{
        },
	    mounted() {
            console.log(this.$route.params);
        },
	    watch:{
            'route'(){
                console.log(this.$route.params);
            }
	    }
    }
</script>

<style scoped lang="less">
</style>
