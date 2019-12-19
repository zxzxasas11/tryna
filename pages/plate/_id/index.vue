<template>
	<div>
		<div>
			<h2 class="text-center">欢迎进入{{categoryInfo.name}}专区</h2>
		</div>

		<!--版头开始-->
		<div class="top-box">
			<div v-for="c in categoryInfo.top" class="top-single">
				<div class="top-name">{{c.name}}</div>
				<div class="top-list" v-for="l in c.list">
					<nuxt-link :to="'/post/'+l._id">{{l.title}}</nuxt-link>
				</div>
			</div>
		</div>
		<!--版头结束-->

		<nuxt-link :to="{path:`/plate/${$route.params.id}/addPost`}"
		           class="btn text-right">发布新帖</nuxt-link>
		<table class="post-box">
			<tbody>
				<tr v-for="p in postList">
					<td>{{p.comments}}</td>
					<td :class="p.essence===1?'top-class':''">
						<nuxt-link :to="'/post/'+p._id">{{p.title}}</nuxt-link>
					</td>
					<td>{{p.username}}</td>
					<td>{{common.formatTime(p.create_time,'YYYY-MM-DD HH:mm:ss')}}</td>
				</tr>
			</tbody>
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
            },
	        //点击添加版头按钮
            addTop(){

            }
        }
    }
</script>

<style scoped lang="less">
	.btn{
		width:80px;
		height:40px;
		display: inline-block;
		line-height: 40px;
		margin:0 5px;
		cursor: pointer;
	}
	.post-box {
		width: 100%;
		//table-layout: fixed;
		tr {
			height: 40px;
			line-height: 40px;
			font-size:16px;
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
	
	.top-box{
		display: flex;
		flex-flow: wrap;
		justify-content: center;
		.top-single{
			border:1px solid #eeeeee;
			box-sizing: border-box;
			flex:1;
			max-width:25%;
			text-align: center;
			align-items: center;
			.top-name{
				border-bottom:1px solid #eeeeee;
				font-weight: bold;
			}
			.top-list{
				font-size:14px;
			}
		}
	}
</style>
