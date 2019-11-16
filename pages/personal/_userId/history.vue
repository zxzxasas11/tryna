<template>
	<div class="list-box">
		<div class="list-single" v-for="h in historyList.data">
			<div class="title"><nuxt-link :to="'/post/'+h.postId._id">{{h.postId.title}}</nuxt-link></div>
			<div>
				<span>浏览时间:{{h.create_time}}</span>
				<span>所属分类:{{h.postId.categoryId.name}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	import history from "../../../api/history";
    export default {
        data(){
            return{
                historyList:[]
            }
        },
        async asyncData({params}){
            let {data} =  await history.getAll({});
            return{
                historyList:data
            }
        }
    }
</script>

<style scoped lang="less">
	@import "../../../assets/css/personalList";
</style>
