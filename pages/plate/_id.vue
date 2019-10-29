<template>
	<div>
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
                    this.postList = res.data.data;
                });
            }
	    },
	    created() {
            this.getDetail(this.$route.params.id);
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
