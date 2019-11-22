<template>
	<div>
		<div>关注我的总数:{{careList.count}}</div>
		<div class="list-box">
			<div class="list-single" v-for="c in careList.data">
				<div>
					<nuxt-link :to="'/personal/'+c.creator._id">{{c.creator.username}}</nuxt-link>
				</div>
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
            let {data} = await care.getAll({cared_id:params.userId});
            return {
                careList: data
            }
        },
    }
</script>

<style scoped lang="less">
	@import "../../../assets/css/personalList";
</style>
