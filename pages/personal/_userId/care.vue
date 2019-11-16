<template>
	<div>
		<div>关注总数:{{careList.count}}</div>
		<div class="list-box">
			<div class="list-single" v-for="c in careList.data">
				<div>
					<nuxt-link :to="'/personal/'+c.cared_id._id">{{c.cared_id.username}}</nuxt-link>
					<span>取消关注</span>
				</div>
				<!--<div>
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
            let {data} = await care.getAll({type:"1"});
            console.log(data);
            return {
                careList: data
            }
        },
    }
</script>

<style scoped lang="less">
	@import "../../../assets/css/personalList";
</style>
