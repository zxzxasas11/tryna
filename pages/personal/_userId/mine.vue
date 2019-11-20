<template>
	<div class="list-box">
		<div class="list-single" v-for="p in postList.data">
			<div class="title"><nuxt-link :to="'/post/'+p._id">{{p.title}}</nuxt-link></div>
			<div>
				<span>浏览时间:{{p.create_time}}</span>
				<span>所属分类:{{p.category}}</span>
				<span>回复数:{{p.comments}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	import post from "../../../api/post";
    export default {
        data(){
            return{
                postList:{}
            }
        },
        async asyncData({params}){
            let {data} =  await post.getList({creator:params.userId});
            return{
                postList:data
            }
        }
    }
</script>

<style scoped lang="less">
	@import "../../../assets/css/personalList";
</style>
