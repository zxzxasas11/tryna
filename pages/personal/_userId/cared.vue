<template>
	<div>
		<div>关注我的总数:{{careList.count}}</div>
		<div class="list-box">
			<div class="list-single" v-for="c in careList.data">
				{{c.creator}}
				<!--<div><nuxt-link :to="'/post/'+h.postId._id">{{h.postId.title}}</nuxt-link></div>
				<div>
					<span>浏览时间:{{h.create_time}}</span>
					<span>所属分类:{{h.postId.categoryId.name}}</span>
				</div>-->
			</div>
		</div>
	</div>
</template>

<script>
    import care from "../../../api/care";
    export default {
        data(){
            return{
                careList:{}
            }
        },
        async asyncData({params}) {
            let {data} = await care.getAll({type:"2"});
            return {
                careList: data
            }
        },
    }
</script>

<style scoped lang="less">
	@import "../../../assets/css/personalList";
</style>
