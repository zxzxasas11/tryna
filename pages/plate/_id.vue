<template>
	<div>
		<div>
			<h2 class="text-center">欢迎进入{{categoryInfo.name}}专区</h2>
		</div>
		<el-button class="btn text-right">发布新帖</el-button>
		<table class="post-box">
			<tr v-for="p in postList">
				<td></td>
				<td><nuxt-link :to="'/post/'+p._id">{{p.title}}</nuxt-link></td>
				<td>{{p.username}}</td>
				<td>{{p.create_time}}</td>
			</tr>
		</table>
	</div>
</template>

<script>
	import post from "../../api/post";
	import category from "../../api/category";
    export default {
        data(){
            return{
                postList:[],
	            categoryInfo:{}
            }
        },
        async asyncData ({ params }) {
            let {data} = await post.getList({categoryId:params.id});
            let c=await category.getOne({id:params.id});
            return{
                postList:data.data,
	            categoryInfo:c.data
            }
        },
	    methods:{
            getDetail(id){
                post.getList({categoryId:id}).then(res=>{
                    this.postList = res.data.data;
                });
            }
	    },
	    created() {
            //this.getDetail(this.$route.params.id);
        }
    }
</script>

<style scoped lang="less">
.post-box{
	width: 100%;
	//table-layout: fixed;
	tr{
		height:40px;
		line-height: 40px;
		&:nth-child(odd){
			background-color: #ffe34a;
		}
		&:nth-child(even){
			background-color: #7f828b;
		}
		&>td:first-child{
			width:10%;
		}
		&>td:nth-child(2){
			width:60%;
		}
		&>td:nth-child(3){
			width:15%;
		}
		&>td:nth-child(4){
			width:15%;
		}
	}
}
</style>
