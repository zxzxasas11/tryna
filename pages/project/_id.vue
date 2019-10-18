<template>
	<div class="window">
		<div class="left">
			<ul class="slide">
				<li><nuxt-link :to="'/project/'+$route.params.id+'/'">项目概况</nuxt-link></li>
				<li><nuxt-link :to="'/project/'+$route.params.id+'/api'">api接口</nuxt-link></li>
				<li><nuxt-link :to="'/project/'+$route.params.id+'/group'">成员管理</nuxt-link></li>
				<li><nuxt-link :to="'/project/'+$route.params.id+'/code'">状态码管理</nuxt-link></li>
			</ul>
		</div>
		<div class="right">
			<nuxt/>
		</div>
	</div>
</template>

<script>
	import project from "../../api/project";
    export default {
        data(){
            return{
            
            }
        },
        head(){
            return{
                meta:[
                    {name:`api`,content:'This is news page'}
                ]
            }
        },
        created(){
        },
        async fetch ({ app, store, params }) {
            await project.getOne(params.id).then(res=>{
                console.log(res);
                store.dispatch("project/setProject",res.data);
            })
            //let { data } = app.$axios.get('/token');
            //store.commit('setToken', data.token);
        },
        methods:{
        },
        computed:{
        },
	    mounted() {
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
