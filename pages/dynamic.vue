<template>
	<div class="box">
		<div class="dynamic-singe" v-for="d in dynamicList.data">
			<span>{{d.creator.username}}</span>
			<nuxt-link :to="'/post/'+d.postId">{{d.content}}</nuxt-link>
			<div v-if="d.commentId!==undefined&&d.commentId!==null">
				<div v-html="common.markdownToHtml(d.commentId.content)"></div>
			</div>
			<div v-else>
				<div>{{d.postId.title}}</div>
				<div v-html="common.markdownToHtml(d.postId.content)"></div>
			</div>
			<span>发布时间:{{d.create_time}}</span>
		</div>
	</div>
</template>

<script>
	import message from "../api/message";
    export default {
        data(){
            return{
                dynamicList:{}
            }
        },
        async asyncData({params}){
            let {data} =  await message.getDynamicList();
            console.log(data);
            return{
                dynamicList:data
            }
        },
	    methods:{
     
	    }
	    
    }
</script>

<style scoped lang="less">
	.box{
		padding:10px 0;
		background-color: #c5c9d3;
		min-height:calc(100% - 60px);
		.dynamic-singe{
			width:80%;
			min-height:80px;
			margin:10px auto;
			background-color: #fff;
			border-radius: 5px;
		}
	}
</style>
