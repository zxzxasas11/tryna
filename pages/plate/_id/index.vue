<template>
	<div>
		<div>
			<h2 class="text-center">欢迎进入{{categoryInfo.name}}专区</h2>
		</div>
		
		<div>这里应该是放版头</div>
		
		
		<nuxt-link :to="{path:`/plate/${$route.params.id}/addPost`}" class="btn text-right">发布新帖</nuxt-link>
		<table class="post-box">
			<tr v-for="p in postList">
				<td>{{p.comments}}</td>
				<td :class="p.essence===1?'top-class':''">
					<nuxt-link :to="'/post/'+p._id">{{p.title}}</nuxt-link>
				</td>
				<td>{{p.username}}</td>
				<td>{{p.create_time}}</td>
			</tr>
		</table>
	</div>
</template>

<script>
    import post from "~/api/post";
    import category from "~/api/category";

    export default {
        data() {
            return {
                postList: [],
                categoryInfo: {}
            }
        },
        async asyncData({params}) {
            let {data} = await post.getList({categoryId: params.id});
            let c = await category.getOne({id: params.id});
            console.log(data);
            return {
                postList: data.data,
                categoryInfo: c.data
            }
        },
        methods: {
            getDetail(id) {
                post.getList({categoryId: id}).then(res => {
                    this.postList = res.data.data;
                });
            }
        }
    }
</script>

<style scoped lang="less">
	.post-box {
		width: 100%;
		//table-layout: fixed;
		tr {
			height: 40px;
			line-height: 40px;
			
			&:nth-child(odd) {
				background-color: #ffe34a;
			}
			
			&:nth-child(even) {
				background-color: #7f828b;
			}
			
			& > td:first-child {
				width: 10%;
			}
			
			& > td:nth-child(2) {
				width: 60%;
			}
			
			& > td:nth-child(3) {
				width: 15%;
			}
			
			& > td:nth-child(4) {
				width: 15%;
			}
		}
	}
	
	.top-class {
		color: #003f81;
		font-weight: bold;
	}
</style>
