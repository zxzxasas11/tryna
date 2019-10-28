<template>
	<div>
		<div>这个是板块详情</div>
		<table class="post-box">
			<tr v-for="p in postList">
				<td></td>
				<td><nuxt-link :to="'/post/'+p._id">{{p.title}}</nuxt-link></td>
				<td>{{p.creator.username}}</td>
				<td>{{p.create_time}}</td>
			</tr>
		</table>
	</div>
</template>

<script>
	import post from "../../api/post";
    export default {
        data(){
            return{
                postList:[]
            }
        },
	    methods:{
            getDetail(id){
                post.getList({categoryId:id}).then(res=>{
                    console.log(res);
                    this.postList = res.data.data;
                });
            }
	    },
	    created() {
            this.getDetail(this.$route.params.id);
        }
    }
</script>

<style scoped>

</style>
