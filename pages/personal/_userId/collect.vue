<template>
	<div>
		<span>收藏列表</span>
		<div class="list-box">
			<div class="list-single" v-for="h in collectList.data">
				<div><nuxt-link :to="'/post/'+h.postId._id">{{h.postId.title}}</nuxt-link></div>
				<div>
					<span>浏览时间:{{h.create_time}}</span>
					<span>所属分类:{{h.postId.categoryId.name}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import collect from "../../../api/collect";
    export default {
        data(){
            return{
                collectList:[]
            }
        },
        async asyncData({params,store}) {
            let {data} = await collect.getList({userId:params.userId});
            console.log(data);
            return {
                collectList: data,
            }
        },
    }
</script>

<style scoped lang="less">
	@import "../../../assets/css/personalList";
</style>
