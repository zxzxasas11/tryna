<template>
	<div class="history-box">
		<div class="history-single" v-for="h in historyList.data">
			<div><nuxt-link :to="'/post/'+h.postId._id">{{h.postId.title}}</nuxt-link></div>
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
	.history-box{
		width:80%;
		margin: 0 auto;
		.history-single{
			width:100%;
			margin:10px 0;
			border: 1px solid #eeeeee;
			box-sizing: border-box;
		}
	}
</style>
